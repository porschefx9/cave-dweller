namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`10001000040b100b0b0b100b0b0b100b0b0b100a0100001500150015001500090000000901000015000000000015000900000009010000000000000000000009000000090100000000090009000000090000000901000009000900090009000900000009010b100b0b0b100b0b0b100b000b100b0100000000000000000000000000000901000000000000000000000000000009010b00000b0b0b0a000000030303030801000000000000020a000000000000000100000000000000100a00000000000001000e000000000000020a000000000001070c0707070707070709000000000001070c0707070711070709060506050602030303030303030303080506050605`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . 2 . 2 . 2 . 2 . . . 2 
2 . . 2 . . . . . 2 . 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . 2 . 2 . . . . . . . 2 
2 . . 2 . 2 . 2 . 2 . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . . 2 2 2 2 . . . 2 2 2 2 2 
2 . . . . . . 2 2 . . . . . . . 
2 . . . . . . . 2 2 . . . . . . 
2 . . . . . . . . 2 2 . . . . . 
2 . 2 . . . . . . . 2 . . . . . 
2 . 2 . . . . . . . 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.hazardWater,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorLight4,sprites.dungeon.chestClosed,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorth2,sprites.builtin.coral5,sprites.builtin.oceanSand3,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.floorMixed,sprites.dungeon.greenOuterEast2],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
. . . . . . . . . . . c c . . . 
. . . . . . . c c c c 6 3 c . . 
. . . . . . c 6 3 3 3 3 6 c . . 
. . c c . c 6 c c 3 3 3 3 3 c . 
. b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 6 3 3 3 c c 
. b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
. . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
. c c 5 5 5 5 5 b c c 3 3 3 3 c 
c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
b 5 4 b 4 4 4 4 b b 5 c b b . . 
c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
. c c c c c c c c c . . c c c . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
music.playMelody("G E B D F A C C5 ", 120)
game.onUpdateInterval(2000, function () {
    let projectile: Sprite = null
    tiles.placeOnTile(projectile, tiles.getTileLocation(0, 0))
})
