/**
 * Created by katemrrr on 10.07.17.
 */

document.querySelector('#one-tab').onclick = function(){

    document.getElementById('one-tab').className = 'active-tab';
    document.getElementById('two-tab').className = 'tab';
    document.getElementById('three-tab').className = 'tab';
    document.getElementById('fourth-tab').className = 'tab';

    document.getElementById('content-one').style.display = 'inline-flex';
    document.getElementById('content-two').style.display = 'none';
    document.getElementById('content-three').style.display = 'none';
    document.getElementById('content-fourth').style.display = 'none';
};

document.querySelector('#two-tab').onclick = function(){

    document.getElementById('one-tab').className = 'tab';
    document.getElementById('two-tab').className = 'active-tab';
    document.getElementById('three-tab').className = 'tab';
    document.getElementById('fourth-tab').className = 'tab';

    document.getElementById('content-one').style.display = 'none';
    document.getElementById('content-two').style.display = 'inline-flex';
    document.getElementById('content-three').style.display = 'none';
    document.getElementById('content-fourth').style.display = 'none';
};

document.querySelector('#three-tab').onclick = function(){

    document.getElementById('one-tab').className = 'tab';
    document.getElementById('two-tab').className = 'tab';
    document.getElementById('three-tab').className = 'active-tab';
    document.getElementById('fourth-tab').className = 'tab';

    document.getElementById('content-one').style.display = 'none';
    document.getElementById('content-two').style.display = 'none';
    document.getElementById('content-three').style.display = 'inline-flex';
    document.getElementById('content-fourth').style.display = 'none';
};

document.querySelector('#fourth-tab').onclick = function(){

    document.getElementById('one-tab').className = 'tab';
    document.getElementById('two-tab').className = 'tab';
    document.getElementById('three-tab').className = 'tab';
    document.getElementById('fourth-tab').className = 'active-tab';

    document.getElementById('content-one').style.display = 'none';
    document.getElementById('content-two').style.display = 'none';
    document.getElementById('content-three').style.display = 'none';
    document.getElementById('content-fourth').style.display = 'inline-flex';
};

