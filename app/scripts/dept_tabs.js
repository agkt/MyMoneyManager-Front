/**
 * Created by katemrrr on 11.07.17.
 */

document.querySelector('#one-dept-tab').onclick = function(){

    document.getElementById('one-dept-tab').className = 'active-dept-tab';
    document.getElementById('two-dept-tab').className = 'dept-tab';

    document.getElementById('dept-content-one').style.display = 'block';
    document.getElementById('dept-content-two').style.display = 'none';
};

document.querySelector('#two-dept-tab').onclick = function(){

    document.getElementById('one-dept-tab').className = 'dept-tab';
    document.getElementById('two-dept-tab').className = 'active-dept-tab';

    document.getElementById('dept-content-one').style.display = 'none';
    document.getElementById('dept-content-two').style.display = 'block';
};