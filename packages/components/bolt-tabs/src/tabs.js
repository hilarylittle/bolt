import {
  defineContext,
  withContext,
  define,
  props,
  hasNativeShadowDomSupport,
  containsTagName,
  getUniqueId,
} from '@bolt/core/utils';
import { withLitHtml, html } from '@bolt/core/renderers/renderer-lit-html';

// import heightUtils from '@bolt/global/styles/07-utilities/_utilities-height.scss';
import classNames from 'classnames/bind';
import styles from './tabs.scss';
import schema from '../tabs.schema.yml';

// define which specific props to provide to children that subscribe
export const TabsContext = defineContext({
  spacing: '',
  name: '',
  selectedIndex: 0,
  useShadow: hasNativeShadowDomSupport,
});

let cx = classNames.bind(styles);

@define
class BoltTabs extends withContext(withLitHtml()) {
  static is = 'bolt-tabs';

  static props = {
    align: props.string,
    spacing: props.string,
    variant: props.string,
    name: props.string,
    selectedTab: {
      ...props.number,
      ...{ default: schema.properties.selected_tab.default },
    },
  };

  constructor(self) {
    self = super(self);
    self.useShadow = hasNativeShadowDomSupport;
    self.schema = this.getModifiedSchema(schema);

    return self;
  }

  // provide context info to children that subscribe
  // (context + subscriber idea originally from https://codepen.io/trusktr/project/editor/XbEOMk)
  static get provides() {
    return [TabsContext];
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();

    const { uuid, selectedTab, spacing } = this.validateProps(this.props);

    const panels = this.tabPanels;

    // This is a last resort to ensure each tab instance has a unique identifier. Will be different on each load. For constant and/or readable `id`s user must provide one.
    this.uniqueId = getUniqueId();
    this.tabsId = uuid || this.uniqueId;

    // Convert tab index to 0-based numbering with some additional validation
    this.selectedIndex = this.validateIndex(selectedTab - 1);

    // Check if any panels have `selected` prop set, return index
    const preselectedIndex = Array.from(panels).findIndex(element => {
      return element.hasAttribute('selected');
    });

    // If there is a preselected panel, it overrides `selectedTab` prop
    const initialSelectedTab =
      preselectedIndex !== -1 ? preselectedIndex : this.selectedIndex;

    this.setSelectedTab(initialSelectedTab);

    // @todo: Only need this if we want to listen for `selected` attribute changes on children. For now, just do a one-time check on setup.
    // this.addEventListener('tabs:setSelectedTab', e => {
    //   const newIndex = e.detail.selectedIndex;
    //   if (this.selectedIndex !== newIndex) {
    //     if (Array.from(panels).includes(e.target)) {
    //       this.setSelectedTab(newIndex);
    //     }
    //   }
    // });
  }

  // @todo: move to BoltBase and/or move into a standalone addon function components can opt into
  ssrHydrationPrep() {
    if (this._ssrHydrationPrep) return;
    const parentElem = this;
    const initialNodesToKeep = Array.from(
      this.querySelectorAll('[ssr-hydrate]'),
    );
    const nodesToClean = [];

    initialNodesToKeep.forEach(item => {
      const hydrationType = item.getAttribute('ssr-hydrate');

      switch (hydrationType) {
        case 'keep-children':
          while (item.firstChild) {
            parentElem.appendChild(item.firstChild);
          }
          break;
        case 'keep':
        default:
          parentElem.appendChild(item);
          nodesToClean.push(item); // track the [ssr-hydrate] nodes to clean up later
      }
    });

    // grab an array of the pre-rendered DOM nodes to potentially remove
    const nodesToRemove = Array.from(
      parentElem.querySelectorAll('[class*="c-bolt-tabs"]:not([ssr-hydrate])'),
    );

    // remove pre-rendered DOM nodes not containing children with [ssr-hydrate] attributes
    nodesToRemove.forEach(node => {
      if (!node.closest(['[ssr-hydrate]'])) {
        node.parentElement.removeChild(node);
      }
    });

    // cleanup any [ssr-hydrate] nodes afterward
    nodesToClean.forEach(node => {
      node.removeAttribute('ssr-hydrate');
    });

    this._ssrHydrationPrep = true;
  }

  get tabPanels() {
    return this.getElementsByTagName('bolt-tab-panel');
  }

  get tabLabels() {
    return this.renderRoot.querySelectorAll('.c-bolt-tabs__label');
  }

  validateIndex(index) {
    const panels = this.tabPanels;

    return index < 0 ? 0 : index >= panels.length ? panels.length - 1 : index;
  }

  addMutationObserver() {
    const self = this;

    // todo: this.useShadow is a temporary workaround until mutation observer works better with light DOM
    if (window.MutationObserver && this.useShadow) {
      // Re-generate slots + re-render when mutations are observed
      const mutationCallback = (mutationsList, observer) => {
        for (let mutation of mutationsList) {
          if (mutation.type === 'childList') {
            // @todo: add, remove, reorder
            if (containsTagName(mutation.addedNodes, 'BOLT-TAB-PANEL')) {
              self.triggerUpdate();
            }
          } else if (mutation.type === 'attributes') {
            // @todo: see `bolt-accordion` as reference for WIP attribute mutation handler
          }
        }
      };

      // Create an observer instance linked to the callback function
      self.observer = new MutationObserver(mutationCallback);

      // Start observing the target node for configured mutations
      self.observer.observe(this, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
  }

  // 0-based
  setSelectedTab(index) {
    const newIndex = this.validateIndex(index);

    if (newIndex !== this.selectedIndex) {
      this.selectedIndex = newIndex;

      this.setAttribute('selected-tab', newIndex + 1); // Convert `selectedTab` back to 1-based scale
      this.contexts.get(TabsContext).selectedIndex = newIndex; // Keep context 0-based

      // @todo: disable for now, not working as expected, scrolling whole page!
      // this.scrollToSelectedTab();
    }
  }

  scrollToSelectedTab() {
    const selectedLabel = this.tabLabels[this.selectedIndex];

    selectedLabel &&
      selectedLabel.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
  }

  handleOnKeydown(e) {
    switch (e.keyCode) {
      case 35: // end key
      case 36: // home key
      case 37: // left arrow
      case 39: // right arrow
        // Prevent default horizontal scrollbar from shifting before `this.scrollIntoView()` kicks in
        e.preventDefault();
        break;
    }
  }

  handleOnKeyup(e) {
    const panels = this.tabPanels;
    let newIndex;

    switch (e.keyCode) {
      case 35: // end key
        newIndex = panels.length - 1;
        break;
      case 36: // home key
        newIndex = 0;
        break;
      case 37: // left arrow
        newIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : 0;
        break;
      case 39: // right arrow
        newIndex =
          this.selectedIndex < panels.length - 1
            ? this.selectedIndex + 1
            : panels.length - 1;
        break;
    }

    // If any of the above keys were pressed, update selected tab and set focus
    if (newIndex !== undefined) {
      this.renderRoot.querySelectorAll('[role="tab"]')[newIndex].focus();
      this.setSelectedTab(newIndex);
    }
  }

  template() {
    const { align, spacing } = this.validateProps(this.props);

    const classes = cx('c-bolt-tabs', {
      [`c-bolt-tabs--align-${align}`]: align,
      [`c-bolt-tabs--spacing-${spacing}`]: spacing,
    });
    const labelClasses = cx('c-bolt-tabs__label');
    const labelInnerClasses = cx('c-bolt-tabs__label-inner');
    const listClasses = cx('c-bolt-tabs__nav', {});
    const panelsClasses = cx('c-bolt-tabs__panels-container');

    const tabButtons = () => {
      let buttons = [];

      Array.from(this.tabPanels).forEach((item, index) => {
        const isSelected = index === this.selectedIndex;
        const label = item.querySelector('[slot="label"]');
        const labelText = label ? label.textContent : `Tab label ${index + 1}`; // @todo: add icon support? how to handle missing labels?
        const labelId = `tab-${this.tabsId}-${index + 1}`; // Use 1-based Id's
        const panelId = `tab-panel-${this.tabsId}-${index + 1}`; // Use 1-based Id's

        let button = html`
          <bolt-trigger
            class="${labelClasses}"
            no-outline
            cursor="${isSelected ? 'auto' : 'pointer'}"
            role="tab"
            aria-selected="${isSelected}"
            aria-controls="${panelId}"
            id="${labelId}"
            tabindex="${isSelected ? -1 : 0}"
            @click=${e => this.setSelectedTab(index)}
            @keydown=${e => this.handleOnKeydown(e)}
            @keyup=${e => this.handleOnKeyup(e)}
          >
            <span class="${labelInnerClasses}">${labelText}</span>
          </bolt-trigger>
        `;

        buttons.push(button);
      });

      return buttons;
    };

    return html`
      <div class="${classes}">
        <div class="${listClasses}" role="tablist" aria-label="Sample Tabs">
          ${tabButtons()}
        </div>
        <div class="${panelsClasses}">
          ${this.slots.default ? this.slot('default') : ''}
        </div>
      </div>
    `;
  }

  rendered() {
    super.rendered && super.rendered();

    if (!this.observer) {
      this.addMutationObserver();
    }

    if (!this.ready) {
      this.setAttribute('ready', '');
      this.dispatchEvent(new CustomEvent('tabs:ready'));

      // On first render, if last item is selected, needs timeout to get acurate scroll position
      // setTimeout(() => {
      //   this.scrollToSelectedTab();
      // }, 0);
    }
  }

  disconnected() {
    super.disconnected && super.disconnected();

    // remove MutationObserver if supported + exists
    if (window.MutationObserver && this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    const { spacing, uuid, selectedTab } = this.validateProps(this.props);

    this.tabsId = uuid || this.uniqueId;
    this.selectedIndex = this.validateIndex(selectedTab - 1);

    this.contexts.get(TabsContext).spacing = spacing;
    this.contexts.get(TabsContext).uuid = this.tabsId;
    this.contexts.get(TabsContext).selectedIndex = this.selectedIndex;
    this.contexts.get(TabsContext).tabPanels = this.tabPanels;

    return html`
      ${this.addStyles([styles])} ${this.template()}
    `;
  }
}

export { BoltTabs };
