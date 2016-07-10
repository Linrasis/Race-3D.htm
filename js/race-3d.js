'use strict';

function draw_logic(){
}

function logic(){
    if(keys[65]['state']){
        group_modify(
          [
            'racer-0',
          ],
          function(entity){
              entities[entity]['rotate']['y'] += 2;
          }
        );
    }
    if(keys[68]['state']){
        group_modify(
          [
            'racer-0',
          ],
          function(entity){
              entities[entity]['rotate']['y'] -= 2;
          }
        );
    }


    if(keys[83]['state']){
        group_modify(
          [
            'racer-0',
          ],
          function(entity){
              entities[entity]['position']['z'] -= .5;
          }
        );
    }
    if(keys[87]['state']){
        group_modify(
          [
            'racer-0',
          ],
          function(entity){
              entities[entity]['position']['z'] += .5;
          }
        );
    }

    camera['x'] = entities['racer-0']['position']['x'];
    camera['z'] = entities['racer-0']['position']['z'];
}

function resize_logic(){
}

window.onload = function(e){
    init_input(
      {
        65: {},
        68: {},
        83: {},
        87: {},
      }
    );
    init_webgl();

    camera['y'] = 5;
    camera['rotate-x'] = 45;

    set_entity(
      'ground',
      {
        'color': [
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
          0.1, 0.4, 0.1, 1,
        ],
        'position': {
          'x': 0,
          'y': -2.1,
          'z': 0,
        },
        'vertices': [
          50, 0, -50,
          -50, 0, -50,
          -50, 0, 50,
          50, 0, 50,
        ],
      }
    );

    set_entity(
      'racer-0',
      {
        'color': [
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1,
          1, 1, 1, 1,
        ],
        'position': {
          'x': 0,
          'y': -2,
          'z': 0,
        },
        'vertices': [
          1, 0, -2,
          -1, 0, -2,
          -1, 0, 2,
          1, 0, 2,
        ],
      }
    );
    group_add(
      'racer-0',
      [
        'racer-0',
      ]
    );
};
