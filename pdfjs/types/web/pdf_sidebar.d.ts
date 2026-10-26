export type EventBus = import("./event_utils.js").EventBus;
export type IL10n = import("./interfaces.js").IL10n;
export type PDFSidebarOptions = {
    /**
     * - The DOM elements.
     */
    elements: PDFSidebarElements;
    /**
     * - The application event bus.
     */
    eventBus: EventBus;
    /**
     * - The localization service.
     */
    l10n: IL10n;
};
export type PDFSidebarElements = {
    /**
     * - The outer container
     * (encasing both the viewer and sidebar elements).
     */
    outerContainer: HTMLDivElement;
    /**
     * - The sidebar container
     * (in which the views are placed).
     */
    sidebarContainer: HTMLDivElement;
    /**
     * - The button used for
     * opening/closing the sidebar.
     */
    toggleButton?: HTMLElement | undefined;
    /**
     * - The button used to show
     * the thumbnail view.
     */
    thumbnailButton: HTMLElement;
    /**
     * - The button used to show
     * the outline view.
     */
    outlineButton: HTMLElement;
    /**
     * - The button used to show
     * the attachments view.
     */
    attachmentsButton?: HTMLElement | undefined;
    /**
     * - The button used to show
     * the layers view.
     */
    layersButton?: HTMLElement | undefined;
    /**
     * - The container in which
     * the thumbnails are placed.
     */
    thumbnailView: HTMLDivElement;
    /**
     * - The container in which
     * the outline is placed.
     */
    outlineView: HTMLDivElement;
    /**
     * - The container in which
     * the attachments are placed.
     */
    attachmentsView?: HTMLDivElement | undefined;
    /**
     * - The container in which
     * the layers are placed.
     */
    layersView?: HTMLDivElement | undefined;
    /**
     * - The button used to
     * find the current outline item.
     */
    currentOutlineItemButton: HTMLElement;
};
/**
 * @typedef {Object} PDFSidebarOptions
 * @property {PDFSidebarElements} elements - The DOM elements.
 * @property {EventBus} eventBus - The application event bus.
 * @property {IL10n} l10n - The localization service.
 */
/**
 * @typedef {Object} PDFSidebarElements
 * @property {HTMLDivElement} outerContainer - The outer container
 *   (encasing both the viewer and sidebar elements).
 * @property {HTMLDivElement} sidebarContainer - The sidebar container
 *   (in which the views are placed).
 * @property {HTMLElement} [toggleButton] - The button used for
 *   opening/closing the sidebar.
 * @property {HTMLElement} thumbnailButton - The button used to show
 *   the thumbnail view.
 * @property {HTMLElement} outlineButton - The button used to show
 *   the outline view.
 * @property {HTMLElement} [attachmentsButton] - The button used to show
 *   the attachments view.
 * @property {HTMLElement} [layersButton] - The button used to show
 *   the layers view.
 * @property {HTMLDivElement} thumbnailView - The container in which
 *   the thumbnails are placed.
 * @property {HTMLDivElement} outlineView - The container in which
 *   the outline is placed.
 * @property {HTMLDivElement} [attachmentsView] - The container in which
 *   the attachments are placed.
 * @property {HTMLDivElement} [layersView] - The container in which
 *   the layers are placed.
 * @property {HTMLElement} currentOutlineItemButton - The button used to
 *   find the current outline item.
 */
export class PDFSidebar {
    /**
     * @param {PDFSidebarOptions} options
     */
    constructor({ elements, eventBus, l10n }: PDFSidebarOptions);
    isOpen: boolean;
    active: number;
    isInitialViewSet: boolean;
    isInitialEventDispatched: boolean;
    /**
     * Callback used when the sidebar has been opened/closed, to ensure that
     * the viewers (PDFViewer/PDFThumbnailViewer) are updated correctly.
     */
    onToggled: any;
    onUpdateThumbnails: any;
    outerContainer: HTMLDivElement;
    sidebarContainer: HTMLDivElement;
    toggleButton: HTMLElement | undefined;
    resizer: any;
    thumbnailButton: HTMLElement;
    outlineButton: HTMLElement;
    attachmentsButton: HTMLElement | undefined;
    layersButton: HTMLElement | undefined;
    thumbnailView: HTMLDivElement;
    outlineView: HTMLDivElement;
    attachmentsView: HTMLDivElement | undefined;
    layersView: HTMLDivElement | undefined;
    _currentOutlineItemButton: HTMLElement;
    eventBus: import("./event_utils.js").EventBus;
    reset(): void;
    outlineReady: any;
    haveOutline: boolean | undefined;
    /**
     * @type {number} One of the values in {SidebarView}.
     */
    get visibleView(): number;
    /**
     * @param {number} view - The sidebar view that should become visible,
     *                        must be one of the values in {SidebarView}.
     */
    setInitialView(view?: number): Promise<void>;
    /**
     * @param {number} view - The sidebar view that should be switched to,
     *                        must be one of the values in {SidebarView}.
     * @param {boolean} [forceOpen] - Ensure that the sidebar is open.
     *                                The default value is `false`.
     */
    switchView(view: number, forceOpen?: boolean): void;
    open(): void;
    close(evt?: null): void;
    toggle(evt: null | undefined, open: any): void;
    startX: any;
    startWidth: number | undefined;
    /**
     * @type {number}
     */
    get outerContainerWidth(): number;
    #private;
}
export const SIDEBAR_MIN_WIDTH: 140;
