import flags from './model/flags.js';

const div_flag = document.querySelector('#div_flag')

function create_flags(flag) {
  const flag_div = 
  `<div class="card p-2 col-1 m-1" style="width: 150px;">
        <div class="w-100">
        <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/png100px/${flag.id}.png" class="card-img-top"  alt="...">
        </div>
        <div class="card-body" style="height:80px">
          <p class="card-title text-center fs-6" style="">${flag.name}</p>
        </div>
  `
  div_flag.insertAdjacentHTML('beforeend', flag_div)
}

function initialize(flags) {
  flags.map((flags) => create_flags(flags))
}

initialize(flags)