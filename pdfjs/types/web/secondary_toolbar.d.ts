export type EventBus = import("./event_utils.js").EventBus;
export type SecondaryToolbarOptions = {
    /**
     * - Container for the secondary toolbar.
     */
    toolbar: HTMLDivElement;
    /**
     * - Button to toggle the visibility
     * of the secondary toolbar.
     */
    toggleButton: HTMLButtonElement;
    /**
     * - Button for entering
     * presentation mode.
     */
    presentationModeButton: HTMLButtonElement;
    /**
     * - Button to open a file.
     */
    openFileButton: HTMLButtonElement;
    /**
     * - Button to print the document.
     */
    printButton: HTMLButtonElement;
    /**
     * - Button to download the
     * document.
     */
    downloadButton: HTMLButtonElement;
    /**
     * - Button to obtain a
     * bookmark link to the current location in the document.
     */
    viewBookmarkButton: HTMLAnchorElement;
    /**
     * - Button to go to the first
     * page in the document.
     */
    firstPageButton: HTMLButtonElement;
    /**
     * - Button to go to the last page
     * in the document.
     */
    lastPageButton: HTMLButtonElement;
    /**
     * - Button to rotate the pages
     * clockwise.
     */
    pageRotateCwButton: HTMLButtonElement;
    /**
     * - Button to rotate the
     * pages counterclockwise.
     */
    pageRotateCcwButton: HTMLButtonElement;
    /**
     * - Button to enable the
     * select tool.
     */
    cursorSelectToolButton: HTMLButtonElement;
    /**
     * - Button to enable the
     * hand tool.
     */
    cursorHandToolButton: HTMLButtonElement;
    /**
     * - Button for opening
     * the image alt-text settings dialog.
     */
    imageAltTextSettingsButton: HTMLButtonElement;
    /**
     * - Button for opening
     * the document properties dialog.
     */
    documentPropertiesButton: HTMLButtonElement;
};
/**
 * @typedef {Object} SecondaryToolbarOptions
 * @property {HTMLDivElement} toolbar - Container for the secondary toolbar.
 * @property {HTMLButtonElement} toggleButton - Button to toggle the visibility
 *   of the secondary toolbar.
 * @property {HTMLButtonElement} presentationModeButton - Button for entering
 *   presentation mode.
 * @property {HTMLButtonElement} openFileButton - Button to open a file.
 * @property {HTMLButtonElement} printButton - Button to print the document.
 * @property {HTMLButtonElement} downloadButton - Button to download the
 *   document.
 * @property {HTMLAnchorElement} viewBookmarkButton - Button to obtain a
 *   bookmark link to the current location in the document.
 * @property {HTMLButtonElement} firstPageButton - Button to go to the first
 *   page in the document.
 * @property {HTMLButtonElement} lastPageButton - Button to go to the last page
 *   in the document.
 * @property {HTMLButtonElement} pageRotateCwButton - Button to rotate the pages
 *   clockwise.
 * @property {HTMLButtonElement} pageRotateCcwButton - Button to rotate the
 *   pages counterclockwise.
 * @property {HTMLButtonElement} cursorSelectToolButton - Button to enable the
 *   select tool.
 * @property {HTMLButtonElement} cursorHandToolButton - Button to enable the
 *   hand tool.
 * @property {HTMLButtonElement} imageAltTextSettingsButton - Button for opening
 *   the image alt-text settings dialog.
 * @property {HTMLButtonElement} documentPropertiesButton - Button for opening
 *   the document properties dialog.
 */
export class SecondaryToolbar {
    /**
     * @param {SecondaryToolbarOptions} options
     * @param {EventBus} eventBus
     */
    constructor(options: SecondaryToolbarOptions, eventBus: EventBus);
    eventBus: import("./event_utils.js").EventBus;
    opened: boolean;
    /**
     * @type {boolean}
     */
    get isOpen(): boolean;
    setPageNumber(pageNumber: any): void;
    pageNumber: any;
    setPagesCount(pagesCount: any): void;
    pagesCount: any;
    reset(): void;
    open(): void;
    close(): void;
    toggle(): void;
    #private;
}
