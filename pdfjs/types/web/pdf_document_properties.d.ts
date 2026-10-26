export type EventBus = import("./event_utils.js").EventBus;
export type IL10n = import("./interfaces.js").IL10n;
export type OverlayManager = import("./overlay_manager.js").OverlayManager;
export type PDFDocumentProxy = import("../src/display/api.js").PDFDocumentProxy;
export type PDFDocumentPropertiesOptions = {
    /**
     * - The overlay's DOM element.
     */
    dialog: HTMLDialogElement;
    /**
     * - Names and elements of the overlay's fields.
     */
    fields: Object;
    /**
     * - Button for closing the overlay.
     */
    closeButton: HTMLButtonElement;
};
/**
 * @typedef {Object} PDFDocumentPropertiesOptions
 * @property {HTMLDialogElement} dialog - The overlay's DOM element.
 * @property {Object} fields - Names and elements of the overlay's fields.
 * @property {HTMLButtonElement} closeButton - Button for closing the overlay.
 */
export class PDFDocumentProperties {
    /**
     * @param {PDFDocumentPropertiesOptions} options
     * @param {OverlayManager} overlayManager - Manager for the viewer overlays.
     * @param {EventBus} eventBus - The application event bus.
     * @param {IL10n} l10n - Localization service.
     * @param {function} fileNameLookup - The function that is used to lookup
     *   the document fileName.
     */
    constructor({ dialog, fields, closeButton }: PDFDocumentPropertiesOptions, overlayManager: OverlayManager, eventBus: EventBus, l10n: IL10n, fileNameLookup: Function, titleLookup: any);
    dialog: HTMLDialogElement;
    fields: Object;
    overlayManager: import("./overlay_manager.js").OverlayManager;
    l10n: import("./interfaces.js").IL10n;
    _fileNameLookup: Function;
    _titleLookup: any;
    _currentPageNumber: any;
    _pagesRotation: any;
    /**
     * Open the document properties overlay.
     */
    open(): Promise<void>;
    /**
     * Close the document properties overlay.
     */
    close(): Promise<void>;
    /**
     * Set a reference to the PDF document in order to populate the dialog fields
     * with the document properties. Note that the dialog will contain no
     * information if this method is not called.
     *
     * @param {PDFDocumentProxy} pdfDocument - A reference to the PDF document.
     */
    setDocument(pdfDocument: PDFDocumentProxy): void;
    pdfDocument: import("../src/display/api.js").PDFDocumentProxy | null | undefined;
    _dataAvailableCapability: any;
    #private;
}
