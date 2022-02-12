scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Monke.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false)
})
let Monke: Sprite = null
Monke = sprites.create(img`
    . . . . . e e e e . . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . e e f e e f e e . . . . . 
    . . . e e e f f e e e . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . e e e e e e e e e e . . . . 
    . e e . f f e f f e . e e . . . 
    . e . . f e f e f e . . e e . . 
    e e . . f e e e f e . . . e e . 
    e . . . f e e e f e . . . . e e 
    . . . . f e e e f e . . . . . . 
    . . . . e . . . . e . . . . . . 
    . . . e . . . . . . e . . . . . 
    . . . e . . . . . . e . . . . . 
    . . . e . . . . . . e . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Monke, 100, 0)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
game.setDialogFrame(img`
    5 8 5 8 8 8 8 8 8 8 8 8 5 8 5 
    8 8 5 . . . . . . . . . 5 8 8 
    5 5 8 . . . . . . . . . 8 5 5 
    8 . . 5 . . . . . . . 5 . . 8 
    8 . . . . . . . . . . . . . 8 
    8 . . . . . . . . . . . . . 8 
    8 . . . . . . . . . . . . . 8 
    8 . . . . . . . . . . . . . 8 
    8 . . . . . . . . . . . . . 8 
    8 . . . . . . . . . . . . . 8 
    8 . . . . . . . . . . . . . 8 
    8 . . 5 . . . . . . . 5 . . 8 
    5 5 8 . . . . . . . . . 8 5 5 
    8 8 5 . . . . . . . . . 5 8 8 
    5 8 5 8 8 8 8 8 8 8 8 8 5 8 5 
    `)
scene.cameraFollowSprite(Monke)
Monke.ay = 350
music.magicWand.play()
Monke
