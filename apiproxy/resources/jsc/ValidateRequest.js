validateRequest();

function validateRequest() {

    var id = context.getVariable('request.queryparam.id');
    var errorDescription = null;

    if (!id) {
        errorDescription = 'O parâmetro [id] é obrigatório.';
    }

    if (errorDescription) {
        context.setVariable('validatePayloadValues.error', errorDescription);
        context.setVariable('validatePayloadValues.fail', true);
        context.setVariable('errorDescription.error', errorDescription);
    }
}