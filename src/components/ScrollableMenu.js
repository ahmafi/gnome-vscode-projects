const { St } = imports.gi;
const { popupMenu: PopupMenu } = imports.ui;

var ScrollableMenu = class ScrollableMenu extends PopupMenu.PopupMenuSection {
  constructor() {
    super();
    this._innerMenu = new PopupMenu.PopupMenuSection();

    this._scrollView = new St.ScrollView({
      y_align: St.Align.START,
      overlay_scrollbars: true,
      style_class: 'scrollable-menu',
    });
    this._scrollView.add_actor(this._innerMenu.actor);

    this.actor.add_actor(this._scrollView);
  }

  addMenuItem(item) {
    this._innerMenu.addMenuItem(item);
  }

  removeAll() {
    this._innerMenu.removeAll();
  }
};
