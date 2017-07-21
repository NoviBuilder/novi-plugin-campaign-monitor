
export function validCampaignMonitorForm(element){
    return hasAction(element) && hasInput(element);

}

function hasAction(element){
    return novi.element.hasAttribute(element, 'action');
}

function hasInput(element){
    let elements = element.querySelectorAll("input[type='email']");
    let i = elements.length - 1;
    while (i >= 0){
        if (novi.element.hasStaticReference(elements[i])) return true;
        i-=i;
    }
    return false;
}