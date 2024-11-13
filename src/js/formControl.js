function nextForm(group, step) {
    console.log(group)
    let actualGroup = "group" + group;  // Obtener el ID del grupo actual
    let actualStep = actualGroup +"-"+ step
    let nextGroup = actualGroup
    nextStep = actualGroup +"-"+ (step+1)

    if (group ==1 || group ==2 && step ==4 || group ==3 && step==3) {
        nextGroup = "group" + (group+1); 
        nextStep = nextGroup +"-"+ 1
    }


    
    document.getElementById(actualGroup).classList.add('d-none');
    document.getElementById(actualStep).classList.add('d-none');
    document.getElementById(nextGroup).classList.remove('d-none');
    document.getElementById(nextStep).classList.remove('d-none'); 
    if (group ==1) {


    }
}
function prevForm(group, step) {
    console.log(group);
    let actualGroup = "group" + group;  // Obtener el ID del grupo actual
    let actualStep = actualGroup + "-" + step;
    let prevGroup = actualGroup;
    let prevStep = actualGroup + "-" + (step - 1);

    // Lógica para retroceder al grupo y paso anteriores según los casos
    if (group == 1 && step == 1) {
        // Si estamos en el grupo 1, paso 1, no hay grupo anterior
        prevGroup = null;
        prevStep = null;
    } else if (group == 2 && step == 1) {
        prevGroup = "group" + (group - 1); 
        prevStep = prevGroup + "-1"; // Retrocedemos a 1-1 del grupo 1
    } else if (group == 2 && step > 1) {
        prevGroup = "group" + group;
        prevStep = prevGroup + "-" + (step - 1); // Retrocedemos dentro del grupo 2
    } else if (group == 3 && step == 1) {
        // Si estamos en 3-1, retrocedemos a 2-4
        prevGroup = "group" + (group - 1);
        prevStep = prevGroup + "-4"; // Retrocedemos al paso 4 del grupo 2
    } else if (group == 3 && step > 1) {
        prevGroup = "group" + group;
        prevStep = prevGroup + "-" + (step - 1); // Retrocedemos dentro del grupo 3 (3-3 -> 3-2 -> 3-1)
    } else if (group == 4 && step == 1) {
        // Si estamos en el grupo 4, paso 1, retrocedemos a 3-3
        prevGroup = "group" + (group - 1); 
        prevStep = prevGroup + "-3"; // Retrocedemos al paso 3 del grupo 3
    }

    console.log(actualGroup);
    console.log(actualStep);
    console.log("--------");
    console.log(prevGroup);
    console.log(prevStep);

    if (prevGroup !== null && prevStep !== null) {
        document.getElementById(actualGroup).classList.add('d-none');
        document.getElementById(actualStep).classList.add('d-none');
        document.getElementById(prevGroup).classList.remove('d-none');
        document.getElementById(prevStep).classList.remove('d-none');
    }
}
