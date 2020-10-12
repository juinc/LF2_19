define({
  bmp: {
    file: [
      {
        "file(0-11)": "sprite/bat_ball.png", w: 129, h: 34, row: 4, col: 2
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 19, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: 4, w: 98, h: 24, dvx: 15, dvy: -8, fall: 40, vrest: 10, bdefend: 16, injury: 40
    },
    bdy: {
      kind: 0, x: 29, y: 4, w: 98, h: 24
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 999, dvx: 19, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: 4, w: 98, h: 24, dvx: 15, dvy: -8, fall: 40, vrest: 10, bdefend: 16, injury: 40
    },
    bdy: {
      kind: 0, x: 29, y: 4, w: 98, h: 24
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 3, dvx: 19, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: 4, w: 98, h: 24, dvx: 15, dvy: -8, fall: 40, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 29, y: 4, w: 98, h: 24
    }
  },
  3: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 2, dvx: 19, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 29, y: 4, w: 98, h: 24, dvx: 15, dvy: -8, fall: 40, vrest: 10, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 29, y: 4, w: 98, h: 24
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding                                                                                                       ",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 90, centery: 16, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});