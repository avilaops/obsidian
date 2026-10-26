export type EventBus = import("./event_utils.js").EventBus;
export type DownloadManager = import("./download_manager.js").DownloadManager;
export type PDFAttachmentViewerOptions = {
    /**
     * - The viewer element.
     */
    container: HTMLDivElement;
    /**
     * - The application event bus.
     */
    eventBus: EventBus;
    /**
     * - The download manager.
     */
    downloadManager: DownloadManager;
};
export type PDFAttachmentViewerRenderParameters = {
    /**
     * - A lookup table of attachment objects.
     */
    attachments: Object | null;
    keepRenderedCapability?: boolean | undefined;
};
/**
 * @typedef {Object} PDFAttachmentViewerOptions
 * @property {HTMLDivElement} container - The viewer element.
 * @property {EventBus} eventBus - The application event bus.
 * @property {DownloadManager} downloadManager - The download manager.
 */
/**
 * @typedef {Object} PDFAttachmentViewerRenderParameters
 * @property {Object|null} attachments - A lookup table of attachment objects.
 * @property {boolean} [keepRenderedCapability]
 */
export class PDFAttachmentViewer extends BaseTreeViewer {
    /**
     * @param {PDFAttachmentViewerOptions} options
     */
    constructor(options: PDFAttachmentViewerOptions);
    downloadManager: import("./download_manager.js").DownloadManager;
    reset(keepRenderedCapability?: boolean): void;
    _attachments: Object | null | undefined;
    _renderedCapability: any;
    _pendingDispatchEvent: boolean | undefined;
    /**
     * @protected
     */
    protected _dispatchEvent(attachmentsCount: any): Promise<void>;
    /**
     * @protected
     */
    protected _bindLink(element: any, { content, description, filename }: {
        content: any;
        description: any;
        filename: any;
    }): void;
    /**
     * @param {PDFAttachmentViewerRenderParameters} params
     */
    renderTree({ attachments, keepRenderedCapability }: PDFAttachmentViewerRenderParameters): void;
    #private;
}
import { BaseTreeViewer } from "./base_tree_viewer.js";
