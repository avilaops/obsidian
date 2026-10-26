export class ImageAltTextSettings {
    constructor({ dialog, createModelButton, aiModelSettings, learnMore, closeButton, deleteModelButton, downloadModelButton, showAltTextDialogButton, }: {
        dialog: any;
        createModelButton: any;
        aiModelSettings: any;
        learnMore: any;
        closeButton: any;
        deleteModelButton: any;
        downloadModelButton: any;
        showAltTextDialogButton: any;
    }, overlayManager: any, eventBus: any, mlManager: any);
    open({ enableGuessAltText, enableNewAltTextWhenAddingImage }: {
        enableGuessAltText: any;
        enableNewAltTextWhenAddingImage: any;
    }): Promise<void>;
    #private;
}
export class NewAltTextManager {
    constructor({ descriptionContainer, dialog, imagePreview, cancelButton, disclaimer, notNowButton, saveButton, textarea, learnMore, errorCloseButton, createAutomaticallyButton, downloadModel, downloadModelDescription, title, }: {
        descriptionContainer: any;
        dialog: any;
        imagePreview: any;
        cancelButton: any;
        disclaimer: any;
        notNowButton: any;
        saveButton: any;
        textarea: any;
        learnMore: any;
        errorCloseButton: any;
        createAutomaticallyButton: any;
        downloadModel: any;
        downloadModelDescription: any;
        title: any;
    }, overlayManager: any, eventBus: any);
    editAltText(uiManager: any, editor: any, firstTime: any): Promise<void>;
    destroy(): void;
    #private;
}
