import flags from "./model/flags.js";

const div_flag = document.querySelector("#div_flag");

function create_flags(flag) {
    const flag_div = 
    `<div class="flag col-2 my-2 text-center">
        <img src="${flag.image}" alt="${flag.name}">
        <p>${flag.name}</p>
    </div>`;

    return flag_div
}


for (const flag of flags) {
    div_flag.insertAdjacentHTML('beforeend', create_flags(flag));
}
