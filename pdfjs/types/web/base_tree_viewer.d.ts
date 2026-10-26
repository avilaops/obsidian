export class BaseTreeViewer {
    constructor(options: any);
    container: any;
    eventBus: any;
    _l10n: any;
    reset(): void;
    _pdfDocument: any;
    _lastToggleIsShow: boolean | undefined;
    _currentTreeItem: any;
    /**
     * @protected
     */
    protected _dispatchEvent(count: any): void;
    /**
     * @protected
     */
    protected _bindLink(element: any, params: any): void;
    /**
     * @private
     */
    private _normalizeTextContent;
    /**
     * Prepend a button before a tree item which allows the user to collapse or
     * expand all tree items at that level; see `_toggleTreeItem`.
     * @param {HTMLDivElement} div
     * @param {boolean|object} [hidden]
     * @protected
     */
    protected _addToggleButton(div: HTMLDivElement, hidden?: boolean | object): void;
    /**
     * Collapse or expand the subtree of a tree item.
     *
     * @param {Element} root - the root of the item (sub)tree.
     * @param {boolean} show - whether to show the item (sub)tree. If false,
     *   the item subtree rooted at `root` will be collapsed.
     * @private
     */
    private _toggleTreeItem;
    /**
     * Collapse or expand all subtrees of the `container`.
     * @private
     */
    private _toggleAllTreeItems;
    /**
     * @private
     */
    private _finishRendering;
    renderTree(params: any): void;
    /**
     * @private
     */
    private _updateCurrentTreeItem;
    /**
     * @private
     */
    private _scrollToCurrentTreeItem;
}
