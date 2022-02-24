scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.splash("GOOD JOB! YOU BEAT LEVEL " + level)
    game.splash("LETS MOVE ON TO LEVEL " + (level + 1))
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(false)
})
let level = 0
tiles.setCurrentTilemap(tilemap`level1`)
level = 1
let Monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d 2 d d 2 b e e f f . . . . 
    . c d 4 d d 4 b e e d d f . . . 
    c d e e d d d b e e b d c . . . 
    c d d d d c d b e e b d c . f f 
    c c c c c d d b e e f c . f e f 
    . f b b b b b e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d b f d b b b b f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(Monkey)
scene.cameraFollowSprite(Monkey)
