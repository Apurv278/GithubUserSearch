const github = new Github;

const ui = new UI;

const search = document.getElementById('searchUser');

search.addEventListener('keyup', (e) => {

    const txt = e.target.value;

    if(txt !== '') {
       //console.log(txt);
       github.getUser(txt).then(d => {
           //console.log(d);
           if(d.data.message === 'Not Found') {
                ui.showAlert('User not found', 'alert alert-danger');
           } else {
                ui.showProfile(d.data);
                ui.showRepo(d.data_repo);
           }
       })
   } else {
        ui.clearProfile();
   }
});