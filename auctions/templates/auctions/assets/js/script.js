$(document).ready(function(){

  var exp_id = 0;
  var educ_id = 0;
  var skill_id = 0;

  $("input[name='full_name']").keyup(function(){
    $("#full_name").html(this.value.toUpperCase());
  });

  $("input[name='profession']").keyup(function(){
    $("#profession").html(this.value.toUpperCase());
  });

  $("input[name='address']").keyup(function(){
    $("#address").html(this.value);
  });

  $("input[name='email']").keyup(function(){
    $("#email").html(this.value);
  });

  $("input[name='phone']").keyup(function(){
    $("#phone").html(this.value.toUpperCase());
  });

  $("textarea[name='summary']").keyup(function(){
    $("#summary").html(this.value.toUpperCase());
  });

  // print
  $('#print').click(function(){
    printDivCSS = new String ('<link rel="stylesheet" href="assets/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"><link href="assets/css/styles.css" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">')
    window.frames["print_frame"].document.body.innerHTML=printDivCSS + $('#preview').html();
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
          

    //window.print();
  });

  function display_data(type, className, me) {
    let curr_id = $(me).parents('.data-group').data('id');
    $(`#${type}-${curr_id}`).find(`.${className}`).html(me.value);
  }

  // EXPERIENCE
  $("#add-experience").click(function(){
    exp_id++;
    $("#experiences-form").append(`
      <div class="data-group" data-id="${exp_id}">
        <hr>
        <div class="row">
          <div class="col-md-6">
            <label>Job Title</label>
            <input type="text" placeholder="Job Title" class="job_title" name="job_title">
          </div>
          <div class="col-md-6">
            <label>Company</label>
            <input type="text" placeholder="Company" class="company">
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6">
            <label>Start Date</label>
            <input type="date" class="start_date">
          </div>
          <div class="col-md-6">
            <label>End Date</label>
            <input type="date" class="end_date">
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <label>Description</label>
            <textarea class="experience_desc" id="" cols="30" rows="3"></textarea>
          </div>
        </div>  
        <div class="row">
          <div class="col-md-12">
            <a class="btn btn-danger pull-right remove-exp">Remove</a>
          </div>  
        </div>  
      </div>`);

    $("#experiences").append(`
      <div id="experience-${exp_id}">
        <strong class="job_title">Title</strong>
        <p>
          <span class="company">Company</span>
          <i>
            <span class="start_date">From</span> - 
            <span class="end_date">To</span> 
          </i>
        </p>
        <p class="experience_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, nemo.</p>
      </div>`);
  });

  $(document).on('keyup', '.job_title', function(){
    display_data('experience', 'job_title', this);
  });
  
  $(document).on('keyup', '.company', function(){
    display_data('experience', 'company', this);
  });
  
  $(document).on('keyup change', '.start_date', function(){
    display_data('experience', 'start_date', this);
  });
  
  $(document).on('keyup change', '.end_date', function(){
    display_data('experience', 'end_date', this);
  });
  
  $(document).on('keyup', '.experience_desc', function(){
    display_data('experience', 'experience_desc', this);
  });

  // remove
  $(document).on('click', '.remove-exp', function(){
    let curr_id = $(this).parents('.data-group').data('id');
    $(this).parents('.data-group').remove();
    $(`#experience-${curr_id}`).remove();
  }); 
  // ./EXPERIENCE

  // EDUCATION
  $('#add-education').click(function(){
    educ_id++;
    $('#education-form').append(`
      <div class="data-group" data-id="${educ_id}">
        <hr>
        <div class="row">
          <div class="col-md-6">
            <label>School</label>
            <input type="text" placeholder="School" class="school">
          </div>
          <div class="col-md-6">
            <label>Graduation Date</label>
            <input type="date" class="grad_date">
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-12">
            <label>Degree</label>
            <input type="text" placeholder="Degree" class="degree">
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <label>Description</label>
            <textarea class="educ_desc" id="" cols="30" rows="3"></textarea>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-12">
            <a class="btn btn-danger pull-right remove-educ">Remove</a>
          </div>  
        </div> 
      </div>`);

    $('#education').append(`
      <div id="education-${educ_id}">
        <strong class="degree">Title</strong>
        <p>
          <span class="school">School</span> 
          <i class="grad_date">Date Graduated</i>
        </p>
        <p class="educ_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, nemo.</p>
      </div>`);
  });

  $(document).on('keyup', '.school', function(){
    display_data('education', 'school', this);
  });

  $(document).on('keyup change', '.grad_date', function(){
    display_data('education', 'grad_date', this);
  });

  $(document).on('keyup', '.degree', function(){
    display_data('education', 'degree', this);
  });

  $(document).on('keyup', '.educ_desc', function(){
    display_data('education', 'educ_desc', this);
  });

  $(document).on('click', '.remove-educ', function(){
    let curr_id = $(this).parents('.data-group').data('id');
    $(this).parents('.data-group').remove();
    $(`#education-${curr_id}`).remove();
  }); 
  // ./EDUCATION

  // SKILLS
  $('#add-skill').click(function(){
    skill_id++;

    $('#skill-form').append(`
      <div class="row data-group" data-id="${skill_id}">
        <div class="col-md-5">
          <label>Skill</label>
          <input type="text" class="skill" name="skills[]">
        </div>
        <div class="col-md-5">
          <label>Level</label>
          <select class="skill_level" name="skill_levels[]">
            <option value="100">Expert</option>
            <option value="85">Experienced</option>
            <option value="75">Skillful</option>
            <option value="50">Beginner</option>
            <option value="30">Novice</option>
          </select>
        </div>
        <div class="col-md-2">
          <label>&nbsp;</label>
          <div class="col-md-12">
            <a class="btn btn-danger btn-sm pull-right remove-skill">Remove</a>
          </div>
        </div>
      </div>`);

    $('#skills').append(`<div id="skill-${skill_id}">
        <span class="skill">SKILL NAME</span>
        <div class="proficiency">
          <div class="skill_level"></div>
        </div>
      </div>`);
  });

  $(document).on('keyup', '.skill', function(){
    display_data('skill', 'skill', this);
  });

  $(document).on('change', '.skill_level', function(){
    let curr_id = $(this).parents('.data-group').data('id');
    $(`#skill-${curr_id}`).find(`.skill_level`).css('width', this.value+'%');
  });

  $(document).on('click', '.remove-skill', function(){
    let curr_id = $(this).parents('.data-group').data('id');
    $(this).parents('.data-group').remove();
    $(`#skill-${curr_id}`).remove();
  }); 
  // ./SKILLS

});