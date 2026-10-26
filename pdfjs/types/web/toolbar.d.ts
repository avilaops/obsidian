export type EventBus = import("./event_utils.js").EventBus;
export type ToolbarOptions = {
    /**
     * - Container for the secondary toolbar.
     */
    container: HTMLDivElement;
    /**
     * - Label that contains number of pages.
     */
    numPages: HTMLSpanElement;
    /**
     * - Control for display and user input
     * of the current page number.
     */
    pageNumber: HTMLInputElement;
    /**
     * - Scale selection control.
     * Its width is adjusted, when necessary, on UI localization.
     */
    scaleSelect: HTMLSelectElement;
    /**
     * - The item used to display
     * a non-predefined scale.
     */
    customScaleOption: HTMLOptionElement;
    /**
     * - Button to go to the previous page.
     */
    previous: HTMLButtonElement;
    /**
     * - Button to go to the next page.
     */
    next: HTMLButtonElement;
    /**
     * - Button to zoom in the pages.
     */
    zoomIn: HTMLButtonElement;
    /**
     * - Button to zoom out the pages.
     */
    zoomOut: HTMLButtonElement;
    /**
     * - Button to switch to
     * FreeText editing.
     */
    editorFreeTextButton: HTMLButtonElement;
    /**
     * - Button to download the document.
     */
    download: HTMLButtonElement;
};
/**
 * @typedef {Object} ToolbarOptions
 * @property {HTMLDivElement} container - Container for the secondary toolbar.
 * @property {HTMLSpanElement} numPages - Label that contains number of pages.
 * @property {HTMLInputElement} pageNumber - Control for display and user input
 *   of the current page number.
 * @property {HTMLSelectElement} scaleSelect - Scale selection control.
 *   Its width is adjusted, when necessary, on UI localization.
 * @property {HTMLOptionElement} customScaleOption - The item used to display
 *   a non-predefined scale.
 * @property {HTMLButtonElement} previous - Button to go to the previous page.
 * @property {HTMLButtonElement} next - Button to go to the next page.
 * @property {HTMLButtonElement} zoomIn - Button to zoom in the pages.
 * @property {HTMLButtonElement} zoomOut - Button to zoom out the pages.
 * @property {HTMLButtonElement} editorFreeTextButton - Button to switch to
 *   FreeText editing.
 * @property {HTMLButtonElement} download - Button to download the document.
 */
export class Toolbar {
    /**
     * @param {ToolbarOptions} options
     * @param {EventBus} eventBus
     * @param {number} toolbarDensity - The toolbar density value.
     *   The possible values are:
     *    - 0 (default) - The regular toolbar size.
     *    - 1 (compact) - The small toolbar size.
     *    - 2 (touch) - The large toolbar size.
     */
    constructor(options: ToolbarOptions, eventBus: EventBus, toolbarDensity?: number);
    eventBus: import("./event_utils.js").EventBus;
    setPageNumber(pageNumber: any, pageLabel: any): void;
    pageNumber: any;
    pageLabel: any;
    setPagesCount(pagesCount: any, hasPageLabels: any): void;
    pagesCount: any;
    hasPageLabels: any;
    setPageScale(pageScaleValue: any, pageScale: any): void;
    pageScaleValue: any;
    pageScale: any;
    reset(): void;
    updateLoadingIndicatorState(loading?: boolean): void;
    #private;
}
