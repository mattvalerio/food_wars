namespace SpriteKind {
    export const player1 = SpriteKind.create()
    export const player2 = SpriteKind.create()
    export const p2projectile = SpriteKind.create()
    export const p1projectile = SpriteKind.create()
    export const redFlag = SpriteKind.create()
    export const blueFlag = SpriteKind.create()
    export const oddball = SpriteKind.create()
    export const p1explosion = SpriteKind.create()
    export const vehicle = SpriteKind.create()
    export const p1vehicle = SpriteKind.create()
    export const p2vehicle = SpriteKind.create()
    export const cameraTarget = SpriteKind.create()
    export const door = SpriteKind.create()
    export const sword = SpriteKind.create()
    export const meatballCannon = SpriteKind.create()
    export const peaShooter = SpriteKind.create()
    export const grapeSniper = SpriteKind.create()
    export const orangeShotgun = SpriteKind.create()
    export const sixSeven = SpriteKind.create()
    export const blueberrySMG = SpriteKind.create()
}
namespace StatusBarKind {
    export const weapon = StatusBarKind.create()
}
/**
 * 1=pea shooter
 * 
 * 2=shotgun
 * 
 * 3=sniper
 * 
 * 4=meatball cannon
 * 
 * 5=sword
 * 
 * 6=Laser
 */
scene.onOverlapTile(SpriteKind.p2projectile, assets.tile`myTile10`, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile12`)
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.sword, function (sprite, otherSprite) {
    if (p2weaponPickupCooldown == false) {
        if (controller.player2.isPressed(ControllerButton.B)) {
            if (p2weapon == 1) {
                otherSprite.setKind(SpriteKind.peaShooter)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 1 2 f . . . . . . . . . 
                        . f c f 1 1 2 f . . . . . . . . 
                        f c c c f 1 1 2 f f f f f f f f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 f f f f f f f f 
                        . f c f 1 1 2 f . . . f 1 f . . 
                        . f c f 1 2 f . . . . f 1 f . . 
                        . . f f f f . . . . . f 1 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        f f f f f f f f f f f f f f f f 
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
                        f f f f f f f f f f f f f f f f 
                        . . . . . . . . . . f 7 7 f . . 
                        . . . . . . . . . . . f 7 7 f . 
                        . . . . . . . . . . . . f 7 7 f 
                        . . . . . . . . . . . . . f f . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else if (p2weapon == 2) {
                otherSprite.setKind(SpriteKind.orangeShotgun)
                otherSprite.setImage(assets.image`myImage5`)
            } else if (p2weapon == 3) {
                otherSprite.setKind(SpriteKind.grapeSniper)
                otherSprite.setImage(assets.image`myImage3`)
            } else if (p2weapon == 4) {
                otherSprite.setKind(SpriteKind.meatballCannon)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ..fffff.............
                    .fcfeeef............
                    fcccfeeeffffffffffff
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeffffffffffef
                    .fcfeeef.f.fef...fef
                    ..fffff..fffef...fef
                    ...........fef...fff
                    ...........fff......
                    ....................
                    ....................
                    `)
            } else if (p2weapon == 6) {
                otherSprite.setKind(SpriteKind.blueberrySMG)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ffffffffffffffffffff
                    f888888888888888888f
                    ffffffffffffffffff8f
                    .....f8f.f88f....f8f
                    .....f8f..f88f...f8f
                    .....f8f...f88f..f8f
                    .....fff....fff..fff
                    ....................
                    ....................
                    ....................
                    `)
            }
            p2weapon = 5
            p2_weapon_pickup_cooldown()
        }
    }
})
scene.onOverlapTile(SpriteKind.player2, sprites.dungeon.floorLight2, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player2.moveSprite(player22, 100, 100)
    }
})
function p1_shotgun_behavior () {
    if (p1weaponReload == false) {
        for (let index = 0; index < 10; index++) {
            if (_67map == true) {
                p1projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f . f f f . . . . . 
                    . . . . f . . . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . f . f . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p1projectile)
            } else {
                p1projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . f 4 4 f . . . . . . 
                    . . . . . f 4 4 4 4 f . . . . . 
                    . . . . . f 4 4 4 4 f . . . . . 
                    . . . . . . f 4 4 f . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p1projectile)
            }
            spriteutils.placeAngleFrom(
            p1projectile2,
            0,
            0,
            player12
            )
            if (p1directionFacing == 1) {
                p1projectile2.setVelocity(randint(-50, 50), randint(-250, -300))
            } else if (p1directionFacing == 2) {
                p1projectile2.setVelocity(randint(-250, -300), randint(-50, 50))
            } else if (p1directionFacing == 3) {
                p1projectile2.setVelocity(randint(-50, 50), randint(250, 300))
            } else if (p1directionFacing == 4) {
                p1projectile2.setVelocity(randint(250, 300), randint(-50, 50))
            }
        }
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        p1weaponReload = true
        timer.after(250, function () {
            music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(400, function () {
            music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3745, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(500, function () {
            p1weaponReload = false
        })
    }
}
sprites.onOverlap(SpriteKind.player2, SpriteKind.redFlag, function (sprite, otherSprite) {
    if (p2inVehical == false) {
        redFlag2.follow(player22, 80)
        p2objectHold = true
        controller.player2.moveSprite(player22, 80, 80)
    }
})
scene.onOverlapTile(SpriteKind.player2, assets.tile`myTile0`, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player2.moveSprite(player22, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.player1, assets.tile`myTile`, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player1.moveSprite(player12, 100, 100)
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (loadingScreen == false) {
        if (p2objectHold == false) {
            if (sloppy == true) {
                p2projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . b 8 b . . . . . . 
                    . . . . . . . c 8 c . . . . . . 
                    . . . . . . . c 8 c . . . . . . 
                    . . . . . . c 6 6 6 c . . . . . 
                    . . . b c c 6 9 9 9 6 c c b . . 
                    . . b 8 8 8 6 9 9 9 6 8 8 8 b . 
                    . . . b c c 6 9 9 9 6 c c b . . 
                    . . . . . . c 6 6 6 c . . . . . 
                    . . . . . . . c 8 c . . . . . . 
                    . . . . . . . c 8 c . . . . . . 
                    . . . . . . . b 8 b . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p2projectile)
            } else if (p2inVehical == true) {
                if (p2projectileUpdown == true) {
                    p2projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 8 8 . . . . . . . 
                        . . . . . . 8 9 9 8 . . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . . 8 9 9 8 . . . . . . 
                        . . . . . . . 8 8 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p2projectile)
                } else {
                    p2projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                        . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
                        . 8 9 1 1 1 1 1 1 1 1 1 1 9 8 . 
                        . 8 9 1 1 1 1 1 1 1 1 1 1 9 8 . 
                        . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
                        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p2projectile)
                }
            } else if (rockets == true) {
                p2projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . f f f e e e f f f . . . 
                    . . . . f e e e e e e e f . . . 
                    . . . f f e e e d e e e f f . . 
                    . . f f e e e d d d e e e f f . 
                    . . f f e e d d d d d e e f f . 
                    . . f f e e e d d d e e e f f . 
                    . . . f f e e e d e e e f f . . 
                    . . . . f e e e e e e e f . . . 
                    . . . . f f f e e e f f f . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p2projectile)
            } else if (p2weapon == 2) {
                p2_shotgun_behavior()
            } else if (p2weapon == 3) {
                p2_sniper_behavior()
            } else if (p2weapon == 4) {
                p2_rocket_behavior()
            } else if (p2weapon == 5) {
                p2_sword_behavior()
            } else {
                if (baseballMap == true) {
                    p2projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . f 2 1 f . . . . . . 
                        . . . . . f 2 2 1 1 f . . . . . 
                        . . . . . f 1 1 2 2 f . . . . . 
                        . . . . . . f 1 2 f . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p2projectile)
                } else {
                    p2projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . f 7 7 f . . . . . . 
                        . . . . . . f 7 7 f . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p2projectile)
                }
            }
            if (_67map == true) {
                p2projectile2.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f . f f f . . . . . 
                    . . . . f . . . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . f . f . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
            if (p2weaponReload == false) {
                music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            }
            if (p2weapon == 1 || p2inVehical == true) {
                spriteutils.placeAngleFrom(
                p2projectile2,
                0,
                0,
                player22
                )
                p2projectile2.setVelocity(p2projectileX, p2projectileY)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.blueFlag, assets.tile`myTile4`, function (sprite, location) {
    sprites.destroy(blueFlag2)
    blueFlag2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
        . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
        . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
        . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
        . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
        . . f f f f f f f f f f f f f . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        `, SpriteKind.blueFlag)
    tiles.placeOnRandomTile(blueFlag2, assets.tile`myTile5`)
    controller.player1.moveSprite(player12, 100, 100)
    p1objectHold = false
    info.player1.changeScoreBy(1)
    if (info.player1.score() == scoreToWin) {
        game.gameOver(true)
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.vehicle, function (sprite, otherSprite) {
    if (p2weaponPickupCooldown == false) {
        if (controller.player2.isPressed(ControllerButton.B)) {
            if (p2objectHold == false) {
                if (p2inVehical == false) {
                    sprites.destroy(otherSprite)
                    player2imageArray.push(sprite.image)
                    player22.setImage(img`
                        ..........fffffffffffffffffff....................
                        ........ffccaaaaaaaaaaaaaaaaaf.........ffffff....
                        ......ffcccaaaaaaaaaaaaaaaaaaaf.......fdcf3aaf...
                        .....fcccaa33333333333333333aaf.......fdcf3aaaf..
                        ....fccaa33333333333333333333aaf.....fdbcf3aaaf..
                        ...fcca3333333333333333333333aaf.....fdbccf3aaaf.
                        ..fcca33113333333333333333333aaf.....fdbccf3aaaf.
                        .fcca33311333333333333333333aaf......fdbccf3aaaf.
                        .fca3333333aaaaaaaaaaaaaaaaaaaf.....fdbbccf3aaaaf
                        fcca333aaaaaaaaaaaaaaaaaaaaaaf.....ffdbccf3aaaaaf
                        fcaaaaaaaccffffffaaaaaaaaaaaaffffffbbbbccf3aaaaaf
                        fcaaaaaacffccaaa3faaaaaaaaaaafcccbbbbbbcf3aaaaaaf
                        fcaaaaacfcccaaaa33faaaaaaaaaafcccccccccf3aaaaaacf
                        fcaaaacfccaaaaaa33faaaaaaaaaa3fffffffff3aaaaaacf.
                        fcaaacfccaaaaaaa33faaaaaaaaaaa333333333aaaaaacf..
                        fcaaacfccaaaaaaa33faaaaaaaaaaaaaaaaaaaaaaccccf...
                        fcaaacfccaaaaaa33faaaaaaaccccccccccccccccffff....
                        .faaaafccaaaaa33ffcccccccffffffffffffffff........
                        ..faaafccaaaa33ffffffffff........................
                        ...ffffccaaa33f..................................
                        .......fcaa33f...................................
                        ........fa33f....................................
                        .........fff.....................................
                        `)
                    p2inVehical = true
                    sprite.setKind(SpriteKind.p2vehicle)
                    p2_weapon_pickup_cooldown()
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.player1, SpriteKind.vehicle, function (sprite, otherSprite) {
    if (p1weaponPickupCooldown == false) {
        if (controller.player1.isPressed(ControllerButton.B)) {
            if (p1objectHold == false) {
                if (p1inVehicle == false) {
                    sprites.destroy(otherSprite)
                    player1imageArray.push(sprite.image)
                    player12.setImage(img`
                        ..........fffffffffffffffffff....................
                        ........ffccaaaaaaaaaaaaaaaaaf.........ffffff....
                        ......ffcccaaaaaaaaaaaaaaaaaaaf.......fdcf3aaf...
                        .....fcccaa33333333333333333aaf.......fdcf3aaaf..
                        ....fccaa33333333333333333333aaf.....fdbcf3aaaf..
                        ...fcca3333333333333333333333aaf.....fdbccf3aaaf.
                        ..fcca33113333333333333333333aaf.....fdbccf3aaaf.
                        .fcca33311333333333333333333aaf......fdbccf3aaaf.
                        .fca3333333aaaaaaaaaaaaaaaaaaaf.....fdbbccf3aaaaf
                        fcca333aaaaaaaaaaaaaaaaaaaaaaf.....ffdbccf3aaaaaf
                        fcaaaaaaaccffffffaaaaaaaaaaaaffffffbbbbccf3aaaaaf
                        fcaaaaaacffccaaa3faaaaaaaaaaafcccbbbbbbcf3aaaaaaf
                        fcaaaaacfcccaaaa33faaaaaaaaaafcccccccccf3aaaaaacf
                        fcaaaacfccaaaaaa33faaaaaaaaaa3fffffffff3aaaaaacf.
                        fcaaacfccaaaaaaa33faaaaaaaaaaa333333333aaaaaacf..
                        fcaaacfccaaaaaaa33faaaaaaaaaaaaaaaaaaaaaaccccf...
                        fcaaacfccaaaaaa33faaaaaaaccccccccccccccccffff....
                        .faaaafccaaaaa33ffcccccccffffffffffffffff........
                        ..faaafccaaaa33ffffffffff........................
                        ...ffffccaaa33f..................................
                        .......fcaa33f...................................
                        ........fa33f....................................
                        .........fff.....................................
                        `)
                    p1inVehicle = true
                    sprite.setKind(SpriteKind.p1vehicle)
                    p1_weapon_pickup_cooldown()
                }
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.player1, sprites.castle.tileGrass1, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player1.moveSprite(player12, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.player1, sprites.castle.tileGrass3, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player1.moveSprite(player12, 100, 100)
    }
})
function weapon_spawn () {
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        sword = sprites.create(img`
            . . . . . . . . . . . . . f f f 
            . . . . . . . . . . . . f 9 9 f 
            . . . . . . . . . . . f 9 8 9 f 
            . . . . . . . . . . f 9 8 9 f . 
            . . . . . . . . . f 9 8 9 f . . 
            . . . . . . . . f 9 8 9 f . . . 
            f . . . . . . f 9 8 9 f . . . . 
            f f . . . . f 9 8 9 f . . . . . 
            f e f . . f 9 8 9 f . . . . . . 
            f e e f f 9 8 9 f . . . . . . . 
            . f e e f 8 9 f . . . . . . . . 
            . . f e e f f . . . . . . . . . 
            . . f f e e f . . . . . . . . . 
            . f e f f e e f . . . . . . . . 
            f e f . . f e e f . . . . . . . 
            . f . . . . f f f f . . . . . . 
            `, SpriteKind.sword)
        tiles.placeOnTile(sword, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile31`)) {
        sword = sprites.create(img`
            . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . f d f . . 
            . . . . . . . . . . f d d d f . 
            . . . . . . . . . f d d d d d f 
            . . . . . . . . f d d d d d f . 
            . . . . . . . f d d d d d f . . 
            . . . . . . f d d d d d f . . . 
            . . . . . f d d d d d f . . . . 
            . . . . f d d d d d f . . . . . 
            . . . f d d d d d f . . . . . . 
            . . . f d d d d f . . . . . . . 
            . . . f d d d f . . . . . . . . 
            . . f f f f f . . . . . . . . . 
            . f e f . . . . . . . . . . . . 
            f e f . . . . . . . . . . . . . 
            . f . . . . . . . . . . . . . . 
            `, SpriteKind.sword)
        tiles.placeOnTile(sword, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        meatballCannon = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ..fffff.............
            .fcfeeef............
            fcccfeeeffffffffffff
            fcccfeeeeeeeeeeeeeef
            fcccfeeeeeeeeeeeeeef
            fcccfeeeffffffffffef
            .fcfeeef.f.fef...fef
            ..fffff..fffef...fef
            ...........fef...fff
            ...........fff......
            ....................
            ....................
            `, SpriteKind.meatballCannon)
        tiles.placeOnTile(meatballCannon, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile25`)) {
        peaShooter = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . f c f 1 2 f . . . . . . . . . 
            . f c f 1 1 2 f . . . . . . . . 
            f c c c f 1 1 2 f f f f f f f f 
            f c c c f 1 1 2 2 1 1 1 1 1 1 f 
            f c c c f 1 1 2 2 1 1 1 1 1 1 f 
            f c c c f 1 1 2 f f f f f f f f 
            . f c f 1 1 2 f . . . f 1 f . . 
            . f c f 1 2 f . . . . f 1 f . . 
            . . f f f f . . . . . f 1 f . . 
            . . . . . . . . . . . f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.peaShooter)
        tiles.placeOnTile(peaShooter, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        peaShooter = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f f f f f f f f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f f f f f f f f f f f f f f f f 
            . . . . . . . . . . f 7 7 f . . 
            . . . . . . . . . . . f 7 7 f . 
            . . . . . . . . . . . . f 7 7 f 
            . . . . . . . . . . . . . f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.peaShooter)
        tiles.placeOnTile(peaShooter, value)
        if (baseballMap == true) {
            peaShooter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . f c f 1 2 f . . . . . . . . . 
                . f c f 1 1 2 f . . . . . . . . 
                f c c c f 1 1 2 f f f f f f f f 
                f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                f c c c f 1 1 2 f f f f f f f f 
                . f c f 1 1 2 f . . . f 1 f . . 
                . f c f 1 2 f . . . . f 1 f . . 
                . . f f f f . . . . . f 1 f . . 
                . . . . . . . . . . . f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
        grapeSniper = sprites.create(assets.image`myImage3`, SpriteKind.grapeSniper)
        tiles.placeOnTile(grapeSniper, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        orangeShotgun = sprites.create(assets.image`myImage5`, SpriteKind.orangeShotgun)
        tiles.placeOnTile(orangeShotgun, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile47`)) {
        grapeSMG = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ffffffffffffffffffff
            f888888888888888888f
            ffffffffffffffffff8f
            .....f8f.f88f....f8f
            .....f8f..f88f...f8f
            .....f8f...f88f..f8f
            .....fff....fff..fff
            ....................
            ....................
            ....................
            `, SpriteKind.blueberrySMG)
        tiles.placeOnTile(grapeSMG, value)
    }
}
sprites.onOverlap(SpriteKind.player1, SpriteKind.blueberrySMG, function (sprite, otherSprite) {
    if (p1weaponPickupCooldown == false) {
        if (controller.player1.isPressed(ControllerButton.B)) {
            if (p1weapon == 1) {
                otherSprite.setKind(SpriteKind.peaShooter)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 1 2 f . . . . . . . . . 
                        . f c f 1 1 2 f . . . . . . . . 
                        f c c c f 1 1 2 f f f f f f f f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 f f f f f f f f 
                        . f c f 1 1 2 f . . . f 1 f . . 
                        . f c f 1 2 f . . . . f 1 f . . 
                        . . f f f f . . . . . f 1 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 7 7 f . . . . . . . . . 
                        . f c f 7 7 7 f . . . . . . . . 
                        f c c c f 7 7 7 f f f f f f f f 
                        f c c c f 7 7 7 7 7 7 7 7 7 7 f 
                        f c c c f 7 7 7 7 7 7 7 7 7 7 f 
                        f c c c f 7 7 7 f f f f f f f f 
                        . f c f 7 7 7 f . . . f 7 f . . 
                        . f c f 7 7 f . . . . f 7 f . . 
                        . . f f f f . . . . . f 7 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else if (p1weapon == 2) {
                otherSprite.setKind(SpriteKind.orangeShotgun)
                otherSprite.setImage(assets.image`myImage5`)
            } else if (p1weapon == 3) {
                otherSprite.setKind(SpriteKind.grapeSniper)
                otherSprite.setImage(assets.image`myImage3`)
            } else if (p1weapon == 4) {
                otherSprite.setKind(SpriteKind.meatballCannon)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ..fffff.............
                    .fcfeeef............
                    fcccfeeeffffffffffff
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeffffffffffef
                    .fcfeeef.f.fef...fef
                    ..fffff..fffef...fef
                    ...........fef...fff
                    ...........fff......
                    ....................
                    ....................
                    `)
            } else if (p1weapon == 5) {
                otherSprite.setKind(SpriteKind.sword)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . f . . . 
                        . . . . . . . . . . . f d f . . 
                        . . . . . . . . . . f d d d f . 
                        . . . . . . . . . f d d d d d f 
                        . . . . . . . . f d d d d d f . 
                        . . . . . . . f d d d d d f . . 
                        . . . . . . f d d d d d f . . . 
                        . . . . . f d d d d d f . . . . 
                        . . . . f d d d d d f . . . . . 
                        . . . f d d d d d f . . . . . . 
                        . . . f d d d d f . . . . . . . 
                        . . . f d d d f . . . . . . . . 
                        . . f f f f f . . . . . . . . . 
                        . f e f . . . . . . . . . . . . 
                        f e f . . . . . . . . . . . . . 
                        . f . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . f f f 
                        . . . . . . . . . . . . f 9 9 f 
                        . . . . . . . . . . . f 9 8 9 f 
                        . . . . . . . . . . f 9 8 9 f . 
                        . . . . . . . . . f 9 8 9 f . . 
                        . . . . . . . . f 9 8 9 f . . . 
                        f . . . . . . f 9 8 9 f . . . . 
                        f f . . . . f 9 8 9 f . . . . . 
                        f e f . . f 9 8 9 f . . . . . . 
                        f e e f f 9 8 9 f . . . . . . . 
                        . f e e f 8 9 f . . . . . . . . 
                        . . f e e f f . . . . . . . . . 
                        . . f f e e f . . . . . . . . . 
                        . f e f f e e f . . . . . . . . 
                        f e f . . f e e f . . . . . . . 
                        . f . . . . f f f f . . . . . . 
                        `)
                }
            }
            p1weapon = 6
            p1_weapon_pickup_cooldown()
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (rockets == true) {
        p1projectileX = 0
        p1projectileY = -100
    } else {
        p1projectileX = 0
        p1projectileY = -200
    }
    p1projectileUpdown = true
    p1directionFacing = 1
})
sprites.onOverlap(SpriteKind.player1, SpriteKind.sword, function (sprite, otherSprite) {
    if (p1weaponPickupCooldown == false) {
        if (controller.player1.isPressed(ControllerButton.B)) {
            if (p1weapon == 1) {
                otherSprite.setKind(SpriteKind.peaShooter)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 1 2 f . . . . . . . . . 
                        . f c f 1 1 2 f . . . . . . . . 
                        f c c c f 1 1 2 f f f f f f f f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 f f f f f f f f 
                        . f c f 1 1 2 f . . . f 1 f . . 
                        . f c f 1 2 f . . . . f 1 f . . 
                        . . f f f f . . . . . f 1 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 7 7 f . . . . . . . . . 
                        . f c f 7 7 7 f . . . . . . . . 
                        f c c c f 7 7 7 f f f f f f f f 
                        f c c c f 7 7 7 7 7 7 7 7 7 7 f 
                        f c c c f 7 7 7 7 7 7 7 7 7 7 f 
                        f c c c f 7 7 7 f f f f f f f f 
                        . f c f 7 7 7 f . . . f 7 f . . 
                        . f c f 7 7 f . . . . f 7 f . . 
                        . . f f f f . . . . . f 7 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else if (p1weapon == 2) {
                otherSprite.setKind(SpriteKind.orangeShotgun)
                otherSprite.setImage(assets.image`myImage5`)
            } else if (p1weapon == 3) {
                otherSprite.setKind(SpriteKind.grapeSniper)
                otherSprite.setImage(assets.image`myImage3`)
            } else if (p1weapon == 4) {
                otherSprite.setKind(SpriteKind.meatballCannon)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ..fffff.............
                    .fcfeeef............
                    fcccfeeeffffffffffff
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeffffffffffef
                    .fcfeeef.f.fef...fef
                    ..fffff..fffef...fef
                    ...........fef...fff
                    ...........fff......
                    ....................
                    ....................
                    `)
            } else if (p1weapon == 6) {
                otherSprite.setKind(SpriteKind.blueberrySMG)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ffffffffffffffffffff
                    f888888888888888888f
                    ffffffffffffffffff8f
                    .....f8f.f88f....f8f
                    .....f8f..f88f...f8f
                    .....f8f...f88f..f8f
                    .....fff....fff..fff
                    ....................
                    ....................
                    ....................
                    `)
            }
            p1weapon = 5
            p1_weapon_pickup_cooldown()
        }
    }
})
function p1_weapon_setup () {
    p1weapon = 1
}
scene.onOverlapTile(SpriteKind.p2projectile, assets.tile`myTile7`, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
})
scene.onOverlapTile(SpriteKind.p1projectile, assets.tile`myTile12`, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (loadingScreen == false) {
        if (p2objectHold == false) {
            if (sloppy == true) {
                p2projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . b 8 b . . . . . . 
                    . . . . . . . c 8 c . . . . . . 
                    . . . . . . . c 8 c . . . . . . 
                    . . . . . . c 6 6 6 c . . . . . 
                    . . . b c c 6 9 9 9 6 c c b . . 
                    . . b 8 8 8 6 9 9 9 6 8 8 8 b . 
                    . . . b c c 6 9 9 9 6 c c b . . 
                    . . . . . . c 6 6 6 c . . . . . 
                    . . . . . . . c 8 c . . . . . . 
                    . . . . . . . c 8 c . . . . . . 
                    . . . . . . . b 8 b . . . . . . 
                    . . . . . . . . b . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p2projectile)
            } else if (p2inVehical == true) {
                if (p2projectileUpdown == true) {
                    p2projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 8 8 . . . . . . . 
                        . . . . . . 8 9 9 8 . . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . . 8 9 9 8 . . . . . . 
                        . . . . . . . 8 8 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p2projectile)
                } else {
                    p2projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                        . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
                        . 8 9 1 1 1 1 1 1 1 1 1 1 9 8 . 
                        . 8 9 1 1 1 1 1 1 1 1 1 1 9 8 . 
                        . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
                        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p2projectile)
                }
            } else if (rockets == true) {
                p2projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . f f f e e e f f f . . . 
                    . . . . f e e e e e e e f . . . 
                    . . . f f e e e d e e e f f . . 
                    . . f f e e e d d d e e e f f . 
                    . . f f e e d d d d d e e f f . 
                    . . f f e e e d d d e e e f f . 
                    . . . f f e e e d e e e f f . . 
                    . . . . f e e e e e e e f . . . 
                    . . . . f f f e e e f f f . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p2projectile)
            } else if (p2weapon == 2) {
                p2_shotgun_behavior()
            } else if (p2weapon == 3) {
                p2_sniper_behavior()
            } else if (p2weapon == 4) {
                p2_rocket_behavior()
            } else if (p2weapon == 5) {
                p2_sword_behavior()
            } else {
                if (baseballMap == true) {
                    p2projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . f 2 1 f . . . . . . 
                        . . . . . f 2 2 1 1 f . . . . . 
                        . . . . . f 1 1 2 2 f . . . . . 
                        . . . . . . f 1 2 f . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p2projectile)
                } else {
                    p2projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . f 7 7 f . . . . . . 
                        . . . . . . f 7 7 f . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p2projectile)
                }
            }
            if (_67map == true) {
                p2projectile2.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f . f f f . . . . . 
                    . . . . f . . . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . f . f . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
            if (p2weaponReload == false) {
                music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            }
            if (p2weapon == 1 || p2inVehical == true) {
                spriteutils.placeAngleFrom(
                p2projectile2,
                0,
                0,
                player22
                )
                p2projectile2.setVelocity(p2projectileX, p2projectileY)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.p1projectile, sprites.castle.tileGrass3, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile10`)
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.peaShooter, function (sprite, otherSprite) {
    if (p2weaponPickupCooldown == false) {
        if (controller.player2.isPressed(ControllerButton.B)) {
            if (p2weapon == 2) {
                otherSprite.setKind(SpriteKind.orangeShotgun)
                otherSprite.setImage(assets.image`myImage5`)
            } else if (p2weapon == 3) {
                otherSprite.setKind(SpriteKind.grapeSniper)
                otherSprite.setImage(assets.image`myImage3`)
            } else if (p2weapon == 4) {
                otherSprite.setKind(SpriteKind.meatballCannon)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ..fffff.............
                    .fcfeeef............
                    fcccfeeeffffffffffff
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeffffffffffef
                    .fcfeeef.f.fef...fef
                    ..fffff..fffef...fef
                    ...........fef...fff
                    ...........fff......
                    ....................
                    ....................
                    `)
            } else if (p2weapon == 5) {
                otherSprite.setKind(SpriteKind.sword)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . f . . . 
                        . . . . . . . . . . . f d f . . 
                        . . . . . . . . . . f d d d f . 
                        . . . . . . . . . f d d d d d f 
                        . . . . . . . . f d d d d d f . 
                        . . . . . . . f d d d d d f . . 
                        . . . . . . f d d d d d f . . . 
                        . . . . . f d d d d d f . . . . 
                        . . . . f d d d d d f . . . . . 
                        . . . f d d d d d f . . . . . . 
                        . . . f d d d d f . . . . . . . 
                        . . . f d d d f . . . . . . . . 
                        . . f f f f f . . . . . . . . . 
                        . f e f . . . . . . . . . . . . 
                        f e f . . . . . . . . . . . . . 
                        . f . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . f f f 
                        . . . . . . . . . . . . f 9 9 f 
                        . . . . . . . . . . . f 9 8 9 f 
                        . . . . . . . . . . f 9 8 9 f . 
                        . . . . . . . . . f 9 8 9 f . . 
                        . . . . . . . . f 9 8 9 f . . . 
                        f . . . . . . f 9 8 9 f . . . . 
                        f f . . . . f 9 8 9 f . . . . . 
                        f e f . . f 9 8 9 f . . . . . . 
                        f e e f f 9 8 9 f . . . . . . . 
                        . f e e f 8 9 f . . . . . . . . 
                        . . f e e f f . . . . . . . . . 
                        . . f f e e f . . . . . . . . . 
                        . f e f f e e f . . . . . . . . 
                        f e f . . f e e f . . . . . . . 
                        . f . . . . f f f f . . . . . . 
                        `)
                }
            } else if (p2weapon == 6) {
                otherSprite.setKind(SpriteKind.blueberrySMG)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ffffffffffffffffffff
                    f888888888888888888f
                    ffffffffffffffffff8f
                    .....f8f.f88f....f8f
                    .....f8f..f88f...f8f
                    .....f8f...f88f..f8f
                    .....fff....fff..fff
                    ....................
                    ....................
                    ....................
                    `)
            }
            p2weapon = 1
            p2_weapon_pickup_cooldown()
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (rockets == true) {
        p2projectileX = 0
        p2projectileY = 100
    } else {
        p2projectileX = 0
        p2projectileY = 200
    }
    p2projectileUpdown = true
    p2directionFacing = 3
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.grapeSniper, function (sprite, otherSprite) {
    if (p2weaponPickupCooldown == false) {
        if (controller.player2.isPressed(ControllerButton.B)) {
            if (p2weapon == 1) {
                otherSprite.setKind(SpriteKind.peaShooter)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 1 2 f . . . . . . . . . 
                        . f c f 1 1 2 f . . . . . . . . 
                        f c c c f 1 1 2 f f f f f f f f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 f f f f f f f f 
                        . f c f 1 1 2 f . . . f 1 f . . 
                        . f c f 1 2 f . . . . f 1 f . . 
                        . . f f f f . . . . . f 1 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        f f f f f f f f f f f f f f f f 
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
                        f f f f f f f f f f f f f f f f 
                        . . . . . . . . . . f 7 7 f . . 
                        . . . . . . . . . . . f 7 7 f . 
                        . . . . . . . . . . . . f 7 7 f 
                        . . . . . . . . . . . . . f f . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else if (p2weapon == 2) {
                otherSprite.setKind(SpriteKind.orangeShotgun)
                otherSprite.setImage(assets.image`myImage5`)
            } else if (p2weapon == 4) {
                otherSprite.setKind(SpriteKind.meatballCannon)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ..fffff.............
                    .fcfeeef............
                    fcccfeeeffffffffffff
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeffffffffffef
                    .fcfeeef.f.fef...fef
                    ..fffff..fffef...fef
                    ...........fef...fff
                    ...........fff......
                    ....................
                    ....................
                    `)
            } else if (p2weapon == 5) {
                otherSprite.setKind(SpriteKind.sword)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . f . . . 
                        . . . . . . . . . . . f d f . . 
                        . . . . . . . . . . f d d d f . 
                        . . . . . . . . . f d d d d d f 
                        . . . . . . . . f d d d d d f . 
                        . . . . . . . f d d d d d f . . 
                        . . . . . . f d d d d d f . . . 
                        . . . . . f d d d d d f . . . . 
                        . . . . f d d d d d f . . . . . 
                        . . . f d d d d d f . . . . . . 
                        . . . f d d d d f . . . . . . . 
                        . . . f d d d f . . . . . . . . 
                        . . f f f f f . . . . . . . . . 
                        . f e f . . . . . . . . . . . . 
                        f e f . . . . . . . . . . . . . 
                        . f . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . f f f 
                        . . . . . . . . . . . . f 9 9 f 
                        . . . . . . . . . . . f 9 8 9 f 
                        . . . . . . . . . . f 9 8 9 f . 
                        . . . . . . . . . f 9 8 9 f . . 
                        . . . . . . . . f 9 8 9 f . . . 
                        f . . . . . . f 9 8 9 f . . . . 
                        f f . . . . f 9 8 9 f . . . . . 
                        f e f . . f 9 8 9 f . . . . . . 
                        f e e f f 9 8 9 f . . . . . . . 
                        . f e e f 8 9 f . . . . . . . . 
                        . . f e e f f . . . . . . . . . 
                        . . f f e e f . . . . . . . . . 
                        . f e f f e e f . . . . . . . . 
                        f e f . . f e e f . . . . . . . 
                        . f . . . . f f f f . . . . . . 
                        `)
                }
            } else if (p2weapon == 6) {
                otherSprite.setKind(SpriteKind.blueberrySMG)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ffffffffffffffffffff
                    f888888888888888888f
                    ffffffffffffffffff8f
                    .....f8f.f88f....f8f
                    .....f8f..f88f...f8f
                    .....f8f...f88f..f8f
                    .....fff....fff..fff
                    ....................
                    ....................
                    ....................
                    `)
            }
            p2weapon = 3
            p2_weapon_pickup_cooldown()
        }
    }
})
sprites.onOverlap(SpriteKind.player1, SpriteKind.orangeShotgun, function (sprite, otherSprite) {
    if (p1weaponPickupCooldown == false) {
        if (controller.player1.isPressed(ControllerButton.B)) {
            if (p1weapon == 1) {
                otherSprite.setKind(SpriteKind.peaShooter)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 1 2 f . . . . . . . . . 
                        . f c f 1 1 2 f . . . . . . . . 
                        f c c c f 1 1 2 f f f f f f f f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 f f f f f f f f 
                        . f c f 1 1 2 f . . . f 1 f . . 
                        . f c f 1 2 f . . . . f 1 f . . 
                        . . f f f f . . . . . f 1 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        f f f f f f f f f f f f f f f f 
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
                        f f f f f f f f f f f f f f f f 
                        . . . . . . . . . . f 7 7 f . . 
                        . . . . . . . . . . . f 7 7 f . 
                        . . . . . . . . . . . . f 7 7 f 
                        . . . . . . . . . . . . . f f . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else if (p1weapon == 3) {
                otherSprite.setKind(SpriteKind.grapeSniper)
                otherSprite.setImage(assets.image`myImage3`)
            } else if (p1weapon == 4) {
                otherSprite.setKind(SpriteKind.meatballCannon)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ..fffff.............
                    .fcfeeef............
                    fcccfeeeffffffffffff
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeffffffffffef
                    .fcfeeef.f.fef...fef
                    ..fffff..fffef...fef
                    ...........fef...fff
                    ...........fff......
                    ....................
                    ....................
                    `)
            } else if (p1weapon == 5) {
                otherSprite.setKind(SpriteKind.sword)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . f . . . 
                        . . . . . . . . . . . f d f . . 
                        . . . . . . . . . . f d d d f . 
                        . . . . . . . . . f d d d d d f 
                        . . . . . . . . f d d d d d f . 
                        . . . . . . . f d d d d d f . . 
                        . . . . . . f d d d d d f . . . 
                        . . . . . f d d d d d f . . . . 
                        . . . . f d d d d d f . . . . . 
                        . . . f d d d d d f . . . . . . 
                        . . . f d d d d f . . . . . . . 
                        . . . f d d d f . . . . . . . . 
                        . . f f f f f . . . . . . . . . 
                        . f e f . . . . . . . . . . . . 
                        f e f . . . . . . . . . . . . . 
                        . f . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . f f f 
                        . . . . . . . . . . . . f 9 9 f 
                        . . . . . . . . . . . f 9 8 9 f 
                        . . . . . . . . . . f 9 8 9 f . 
                        . . . . . . . . . f 9 8 9 f . . 
                        . . . . . . . . f 9 8 9 f . . . 
                        f . . . . . . f 9 8 9 f . . . . 
                        f f . . . . f 9 8 9 f . . . . . 
                        f e f . . f 9 8 9 f . . . . . . 
                        f e e f f 9 8 9 f . . . . . . . 
                        . f e e f 8 9 f . . . . . . . . 
                        . . f e e f f . . . . . . . . . 
                        . . f f e e f . . . . . . . . . 
                        . f e f f e e f . . . . . . . . 
                        f e f . . f e e f . . . . . . . 
                        . f . . . . f f f f . . . . . . 
                        `)
                }
            } else if (p1weapon == 6) {
                otherSprite.setKind(SpriteKind.blueberrySMG)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ffffffffffffffffffff
                    f888888888888888888f
                    ffffffffffffffffff8f
                    .....f8f.f88f....f8f
                    .....f8f..f88f...f8f
                    .....f8f...f88f..f8f
                    .....fff....fff..fff
                    ....................
                    ....................
                    ....................
                    `)
            }
            p1weapon = 2
            p1_weapon_pickup_cooldown()
        }
    }
})
scene.onOverlapTile(SpriteKind.p1projectile, sprites.dungeon.floorDark2, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
})
sprites.onOverlap(SpriteKind.p1projectile, SpriteKind.p2projectile, function (sprite, otherSprite) {
    if (p1weapon == 5 && p2weapon == 1) {
        if (otherSprite.vx == 200) {
            otherSprite.vx = -200
            otherSprite.setKind(SpriteKind.p1projectile)
        } else if (otherSprite.vx == -200) {
            otherSprite.vx = 200
            otherSprite.setKind(SpriteKind.p1projectile)
        } else if (otherSprite.vy == 200) {
            otherSprite.vy = -200
            otherSprite.setKind(SpriteKind.p1projectile)
        } else if (otherSprite.vy == -200) {
            otherSprite.vy = 200
            otherSprite.setKind(SpriteKind.p1projectile)
        }
    }
    if (p1weapon == 1 && p2weapon == 5) {
        if (sprite.vx == 200) {
            sprite.vx = -200
            sprite.setKind(SpriteKind.p2projectile)
        } else if (sprite.vx == 0) {
            sprite.vx = 200
            sprite.setKind(SpriteKind.p2projectile)
        } else if (sprite.vy == 200) {
            sprite.vy = -200
            sprite.setKind(SpriteKind.p2projectile)
        } else if (sprite.vy == -200) {
            sprite.vy = 200
            sprite.setKind(SpriteKind.p2projectile)
        }
    }
})
sprites.onOverlap(SpriteKind.p2projectile, SpriteKind.p1vehicle, function (sprite, otherSprite) {
    if (p2respawning == false) {
        if (rockets == true) {
            info.player1.changeLifeBy(-5)
            sprite.setVelocity(0, 0)
            sprite.setScale(3, ScaleAnchor.Middle)
            animation.runImageAnimation(
            sprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . 3 . . . . . . . . . . . 4 . . 
                . 3 3 . . . . . . . . . 4 4 . . 
                . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
                . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
                . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
                . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
                . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
                . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
                . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
                . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
                . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
                . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
                . 4 4 d d 4 d d d 4 3 d d 4 . . 
                . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
                . 4 5 4 . . 4 4 4 . . . 4 4 . . 
                . 4 4 . . . . . . . . . . 4 4 . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b . b b b . . . . . 
                . . . . b 1 1 b 1 1 1 b . . . . 
                . . b b 3 1 1 d d 1 d d b b . . 
                . b 1 1 d d b b b b b 1 1 b . . 
                . b 1 1 1 b . . . . . b d d b . 
                . . 3 d d b . . . . . b d 1 1 b 
                . b 1 d 3 . . . . . . . b 1 1 b 
                . b 1 1 b . . . . . . b b 1 d b 
                . b 1 d b . . . . . . b d 3 d b 
                . b b d d b . . . . b d d d b . 
                . b d d d d b . b b 3 d d 3 b . 
                . . b d d 3 3 b d 3 3 b b b . . 
                . . . b b b d d d d d b . . . . 
                . . . . . . b b b b b . . . . . 
                `],
            100,
            false
            )
            timer.after(500, function () {
                sprites.destroy(sprite)
            })
        } else {
            info.player1.changeLifeBy(-1)
            player12.setFlag(SpriteFlag.GhostThroughSprites, true)
            sprites.destroy(sprite)
            timer.after(500, function () {
                player12.setFlag(SpriteFlag.GhostThroughSprites, false)
            })
        }
    }
})
sprites.onOverlap(SpriteKind.player1, SpriteKind.peaShooter, function (sprite, otherSprite) {
    if (p1weaponPickupCooldown == false) {
        if (controller.player1.isPressed(ControllerButton.B)) {
            if (p1weapon == 2) {
                otherSprite.setKind(SpriteKind.orangeShotgun)
                otherSprite.setImage(assets.image`myImage5`)
            } else if (p1weapon == 3) {
                otherSprite.setKind(SpriteKind.grapeSniper)
                otherSprite.setImage(assets.image`myImage3`)
            } else if (p1weapon == 4) {
                otherSprite.setKind(SpriteKind.meatballCannon)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ..fffff.............
                    .fcfeeef............
                    fcccfeeeffffffffffff
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeffffffffffef
                    .fcfeeef.f.fef...fef
                    ..fffff..fffef...fef
                    ...........fef...fff
                    ...........fff......
                    ....................
                    ....................
                    `)
            } else if (p1weapon == 5) {
                otherSprite.setKind(SpriteKind.sword)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . f . . . 
                        . . . . . . . . . . . f d f . . 
                        . . . . . . . . . . f d d d f . 
                        . . . . . . . . . f d d d d d f 
                        . . . . . . . . f d d d d d f . 
                        . . . . . . . f d d d d d f . . 
                        . . . . . . f d d d d d f . . . 
                        . . . . . f d d d d d f . . . . 
                        . . . . f d d d d d f . . . . . 
                        . . . f d d d d d f . . . . . . 
                        . . . f d d d d f . . . . . . . 
                        . . . f d d d f . . . . . . . . 
                        . . f f f f f . . . . . . . . . 
                        . f e f . . . . . . . . . . . . 
                        f e f . . . . . . . . . . . . . 
                        . f . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . f f f 
                        . . . . . . . . . . . . f 9 9 f 
                        . . . . . . . . . . . f 9 8 9 f 
                        . . . . . . . . . . f 9 8 9 f . 
                        . . . . . . . . . f 9 8 9 f . . 
                        . . . . . . . . f 9 8 9 f . . . 
                        f . . . . . . f 9 8 9 f . . . . 
                        f f . . . . f 9 8 9 f . . . . . 
                        f e f . . f 9 8 9 f . . . . . . 
                        f e e f f 9 8 9 f . . . . . . . 
                        . f e e f 8 9 f . . . . . . . . 
                        . . f e e f f . . . . . . . . . 
                        . . f f e e f . . . . . . . . . 
                        . f e f f e e f . . . . . . . . 
                        f e f . . f e e f . . . . . . . 
                        . f . . . . f f f f . . . . . . 
                        `)
                }
            } else if (p1weapon == 6) {
                otherSprite.setKind(SpriteKind.blueberrySMG)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ffffffffffffffffffff
                    f888888888888888888f
                    ffffffffffffffffff8f
                    .....f8f.f88f....f8f
                    .....f8f..f88f...f8f
                    .....f8f...f88f..f8f
                    .....fff....fff..fff
                    ....................
                    ....................
                    ....................
                    `)
            }
            p1weapon = 1
            p1_weapon_pickup_cooldown()
        }
    }
})
scene.onOverlapTile(SpriteKind.p1projectile, assets.tile`myTile11`, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
})
sprites.onOverlap(SpriteKind.player1, SpriteKind.blueFlag, function (sprite, otherSprite) {
    if (p1inVehicle == false) {
        blueFlag2.follow(player12, 80)
        p1objectHold = true
        controller.player1.moveSprite(player12, 80, 80)
    }
})
scene.onOverlapTile(SpriteKind.p1projectile, sprites.dungeon.floorLight2, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
})
scene.onOverlapTile(SpriteKind.player1, sprites.castle.tilePath8, function (sprite, location) {
    tiles.placeOnRandomTile(player12, sprites.castle.tilePath2)
    player12.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        player12.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
scene.onHitWall(SpriteKind.p2projectile, function (sprite, location) {
    if (rockets == true || p2weapon == 4) {
        sprite.setScale(3, ScaleAnchor.Middle)
        sprite.setVelocity(0, 0)
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        100,
        false
        )
        splitScreen.cameraShake(splitScreen.Camera.Camera2, 4, 500)
        timer.after(500, function () {
            sprites.destroy(sprite)
        })
    } else {
        sprites.destroy(sprite)
    }
})
sprites.onOverlap(SpriteKind.p1projectile, SpriteKind.door, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.player2, sprites.castle.tileGrass3, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player2.moveSprite(player22, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.player1, sprites.castle.tilePath2, function (sprite, location) {
    tiles.placeOnRandomTile(player12, sprites.castle.tilePath8)
    player12.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        player12.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
scene.onOverlapTile(SpriteKind.p2projectile, sprites.castle.tileGrass1, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
})
scene.onOverlapTile(SpriteKind.p1projectile, assets.tile`myTile8`, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile7`)
    }
})
scene.onOverlapTile(SpriteKind.player1, assets.tile`myTile8`, function (sprite, location) {
    controller.player1.moveSprite(player12, 70, 70)
})
scene.onOverlapTile(SpriteKind.player2, assets.tile`myTile`, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player2.moveSprite(player22, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.player1, sprites.dungeon.floorDark2, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player1.moveSprite(player12, 100, 100)
    }
})
function p2_shotgun_behavior () {
    if (p2weaponReload == false) {
        for (let index = 0; index < 10; index++) {
            if (_67map == true) {
                p2projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f . f f f . . . . . 
                    . . . . f . . . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . f . f . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p2projectile)
            } else {
                p2projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . f 4 4 f . . . . . . 
                    . . . . . f 4 4 4 4 f . . . . . 
                    . . . . . f 4 4 4 4 f . . . . . 
                    . . . . . . f 4 4 f . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p2projectile)
            }
            spriteutils.placeAngleFrom(
            p2projectile2,
            0,
            0,
            player22
            )
            if (p2directionFacing == 1) {
                p2projectile2.setVelocity(randint(-50, 50), randint(-250, -300))
            } else if (p2directionFacing == 2) {
                p2projectile2.setVelocity(randint(-250, -300), randint(-50, 50))
            } else if (p2directionFacing == 3) {
                p2projectile2.setVelocity(randint(-50, 50), randint(250, 300))
            } else if (p2directionFacing == 4) {
                p2projectile2.setVelocity(randint(250, 300), randint(-50, 50))
            }
        }
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        p2weaponReload = true
        timer.after(250, function () {
            music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(400, function () {
            music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3745, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(500, function () {
            p2weaponReload = false
        })
    }
}
scene.onOverlapTile(SpriteKind.player2, assets.tile`myTile11`, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player2.moveSprite(player22, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.blueFlag, sprites.castle.tilePath2, function (sprite, location) {
    tiles.placeOnRandomTile(blueFlag2, sprites.castle.tilePath8)
    blueFlag2.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        blueFlag2.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (rockets == true) {
        p2projectileX = 0
        p2projectileY = -100
    } else {
        p2projectileX = 0
        p2projectileY = -200
    }
    p2projectileUpdown = true
    p2directionFacing = 1
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.p1vehicle, function (sprite, otherSprite) {
    if (otherSprite.vx != 0) {
        info.player2.changeLifeBy(-5)
    } else if (otherSprite.vy != 0) {
        info.player2.changeLifeBy(-5)
    }
})
scene.onOverlapTile(SpriteKind.player2, sprites.dungeon.hazardLava1, function (sprite, location) {
    if (p2respawning == false) {
        info.player2.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.p1projectile, SpriteKind.p2vehicle, function (sprite, otherSprite) {
    if (p2respawning == false) {
        if (rockets == true) {
            info.player2.changeLifeBy(-5)
            sprite.setVelocity(0, 0)
            sprite.setScale(3, ScaleAnchor.Middle)
            animation.runImageAnimation(
            sprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . 3 . . . . . . . . . . . 4 . . 
                . 3 3 . . . . . . . . . 4 4 . . 
                . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
                . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
                . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
                . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
                . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
                . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
                . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
                . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
                . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
                . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
                . 4 4 d d 4 d d d 4 3 d d 4 . . 
                . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
                . 4 5 4 . . 4 4 4 . . . 4 4 . . 
                . 4 4 . . . . . . . . . . 4 4 . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b . b b b . . . . . 
                . . . . b 1 1 b 1 1 1 b . . . . 
                . . b b 3 1 1 d d 1 d d b b . . 
                . b 1 1 d d b b b b b 1 1 b . . 
                . b 1 1 1 b . . . . . b d d b . 
                . . 3 d d b . . . . . b d 1 1 b 
                . b 1 d 3 . . . . . . . b 1 1 b 
                . b 1 1 b . . . . . . b b 1 d b 
                . b 1 d b . . . . . . b d 3 d b 
                . b b d d b . . . . b d d d b . 
                . b d d d d b . b b 3 d d 3 b . 
                . . b d d 3 3 b d 3 3 b b b . . 
                . . . b b b d d d d d b . . . . 
                . . . . . . b b b b b . . . . . 
                `],
            100,
            false
            )
            timer.after(500, function () {
                sprites.destroy(sprite)
            })
        } else {
            info.player2.changeLifeBy(-1)
            player22.setFlag(SpriteFlag.GhostThroughSprites, true)
            sprites.destroy(sprite)
            timer.after(500, function () {
                player22.setFlag(SpriteFlag.GhostThroughSprites, false)
            })
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (rockets == true) {
        p2projectileX = 100
        p2projectileY = 0
    } else {
        p2projectileX = 200
        p2projectileY = 0
    }
    if (p2inVehical == true) {
        player22.setImage(img`
            ....................fffffffffffffffffff..........
            ....ffffff.........faaaaaaaaaaaaaaaaaccff........
            ...faa3fcdf.......faaaaaaaaaaaaaaaaaaacccff......
            ..faaa3fcdf.......faa33333333333333333aacccf.....
            ..faa3ffcbdf.....faa33333333333333333333aaccf....
            .faaa3fccbdf.....faa3333333333333333333333accf...
            .faaa3fccbdf.....faa33333333333333333331133accf..
            .faaa3fccbdf......faa33333333333333333311333accf.
            faaaa3fccbbdf.....faaaaaaaaaaaaaaaaaaa3333333acf.
            faaaaa3fccbdff.....faaaaaaaaaaaaaaaaaaaaaa333accf
            faaaaa3fccbbbbffffffaaaaaaaaaaaaffffffccaaaaaaacf
            faaaaa33fcbbbbbbcccfaaaaaaaaaaaf3aaaccffcaaaaaacf
            fcaaaaaa3fcccccccccfaaaaaaaaaaf33aaaacccfcaaaaacf
            .fcaaaaaa3fffffffff3aaaaaaaaaaf33aaaaaaccfcaaaacf
            ..fcaaaaaa333333333aaaaaaaaaaaf33aaaaaaaccfcaaacf
            ...fccccaaaaaaaaaaaaaaaaaaaaaaf33aaaaaaaccfcaaacf
            ....ffffccccccccccccccccaaaaaaaf33aaaaaaccfcaaacf
            ........ffffffffffffffffcccccccff33aaaaaccfaaaaf.
            ........................ffffffffff33aaaaccfaaaf..
            ..................................f33aaaccffff...
            ...................................f33aacf.......
            ....................................f33af........
            .....................................fff.........
            `)
    }
    p2projectileUpdown = false
    p2directionFacing = 4
})
scene.onOverlapTile(SpriteKind.player2, assets.tile`myTile9`, function (sprite, location) {
    controller.player2.moveSprite(player22, 70, 70)
})
scene.onOverlapTile(SpriteKind.player2, assets.tile`myTile8`, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player2.moveSprite(player22, 100, 100)
    }
})
function p1_rocket_behavior () {
    if (p1weaponReload == false) {
        if (_67map == true) {
            p1projectile2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f . f f f . . . . . 
                . . . . f . . . . . f . . . . . 
                . . . . f f f . . . f . . . . . 
                . . . . f . f . . . f . . . . . 
                . . . . f f f . . . f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.p1projectile)
        } else {
            p1projectile2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . f f f f f . . . . . 
                . . . . f f f e e e f f f . . . 
                . . . . f e e e e e e e f . . . 
                . . . f f e e e d e e e f f . . 
                . . f f e e e d d d e e e f f . 
                . . f f e e d d d d d e e f f . 
                . . f f e e e d d d e e e f f . 
                . . . f f e e e d e e e f f . . 
                . . . . f e e e e e e e f . . . 
                . . . . f f f e e e f f f . . . 
                . . . . . . f f f f f . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.p1projectile)
        }
        spriteutils.placeAngleFrom(
        p1projectile2,
        0,
        0,
        player12
        )
        if (p1directionFacing == 1) {
            p1projectile2.setVelocity(0, -100)
        } else if (p1directionFacing == 2) {
            p1projectile2.setVelocity(-100, 0)
        } else if (p1directionFacing == 3) {
            p1projectile2.setVelocity(0, 100)
        } else if (p1directionFacing == 4) {
            p1projectile2.setVelocity(100, 0)
        }
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        p1weaponReload = true
        timer.after(1000, function () {
            p1weaponReload = false
        })
    }
}
scene.onOverlapTile(SpriteKind.redFlag, assets.tile`myTile5`, function (sprite, location) {
    sprites.destroy(redFlag2)
    redFlag2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
        . . f f f f f f f f f f f f f . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        `, SpriteKind.redFlag)
    tiles.placeOnRandomTile(redFlag2, assets.tile`myTile4`)
    controller.player2.moveSprite(player22, 100, 100)
    p2objectHold = false
    info.player2.changeScoreBy(1)
    if (info.player2.score() == scoreToWin) {
        game.gameOver(true)
    }
})
function p1_weapon_pickup_cooldown () {
    p1weaponPickupCooldown = true
    timer.after(1000, function () {
        p1weaponPickupCooldown = false
    })
}
scene.onOverlapTile(SpriteKind.p2projectile, sprites.castle.tilePath2, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, sprites.castle.tilePath8)
    sprite.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        sprite.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
scene.onOverlapTile(SpriteKind.player1, assets.tile`myTile7`, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player1.moveSprite(player12, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.redFlag, sprites.castle.tilePath2, function (sprite, location) {
    tiles.placeOnRandomTile(redFlag2, sprites.castle.tilePath8)
    redFlag2.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        redFlag2.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.orangeShotgun, function (sprite, otherSprite) {
    if (p2weaponPickupCooldown == false) {
        if (controller.player2.isPressed(ControllerButton.B)) {
            if (p2weapon == 1) {
                otherSprite.setKind(SpriteKind.peaShooter)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 1 2 f . . . . . . . . . 
                        . f c f 1 1 2 f . . . . . . . . 
                        f c c c f 1 1 2 f f f f f f f f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 f f f f f f f f 
                        . f c f 1 1 2 f . . . f 1 f . . 
                        . f c f 1 2 f . . . . f 1 f . . 
                        . . f f f f . . . . . f 1 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        f f f f f f f f f f f f f f f f 
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
                        f f f f f f f f f f f f f f f f 
                        . . . . . . . . . . f 7 7 f . . 
                        . . . . . . . . . . . f 7 7 f . 
                        . . . . . . . . . . . . f 7 7 f 
                        . . . . . . . . . . . . . f f . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else if (p2weapon == 3) {
                otherSprite.setKind(SpriteKind.grapeSniper)
                otherSprite.setImage(assets.image`myImage3`)
            } else if (p2weapon == 4) {
                otherSprite.setKind(SpriteKind.meatballCannon)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ..fffff.............
                    .fcfeeef............
                    fcccfeeeffffffffffff
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeffffffffffef
                    .fcfeeef.f.fef...fef
                    ..fffff..fffef...fef
                    ...........fef...fff
                    ...........fff......
                    ....................
                    ....................
                    `)
            } else if (p2weapon == 5) {
                otherSprite.setKind(SpriteKind.sword)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . f . . . 
                        . . . . . . . . . . . f d f . . 
                        . . . . . . . . . . f d d d f . 
                        . . . . . . . . . f d d d d d f 
                        . . . . . . . . f d d d d d f . 
                        . . . . . . . f d d d d d f . . 
                        . . . . . . f d d d d d f . . . 
                        . . . . . f d d d d d f . . . . 
                        . . . . f d d d d d f . . . . . 
                        . . . f d d d d d f . . . . . . 
                        . . . f d d d d f . . . . . . . 
                        . . . f d d d f . . . . . . . . 
                        . . f f f f f . . . . . . . . . 
                        . f e f . . . . . . . . . . . . 
                        f e f . . . . . . . . . . . . . 
                        . f . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . f f f 
                        . . . . . . . . . . . . f 9 9 f 
                        . . . . . . . . . . . f 9 8 9 f 
                        . . . . . . . . . . f 9 8 9 f . 
                        . . . . . . . . . f 9 8 9 f . . 
                        . . . . . . . . f 9 8 9 f . . . 
                        f . . . . . . f 9 8 9 f . . . . 
                        f f . . . . f 9 8 9 f . . . . . 
                        f e f . . f 9 8 9 f . . . . . . 
                        f e e f f 9 8 9 f . . . . . . . 
                        . f e e f 8 9 f . . . . . . . . 
                        . . f e e f f . . . . . . . . . 
                        . . f f e e f . . . . . . . . . 
                        . f e f f e e f . . . . . . . . 
                        f e f . . f e e f . . . . . . . 
                        . f . . . . f f f f . . . . . . 
                        `)
                }
            } else if (p2weapon == 6) {
                otherSprite.setKind(SpriteKind.blueberrySMG)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ffffffffffffffffffff
                    f888888888888888888f
                    ffffffffffffffffff8f
                    .....f8f.f88f....f8f
                    .....f8f..f88f...f8f
                    .....f8f...f88f..f8f
                    .....fff....fff..fff
                    ....................
                    ....................
                    ....................
                    `)
            }
            p2weapon = 2
            p2_weapon_pickup_cooldown()
        }
    }
})
scene.onOverlapTile(SpriteKind.p2projectile, assets.tile`myTile9`, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile11`)
    }
})
scene.onOverlapTile(SpriteKind.p1projectile, sprites.castle.tilePath8, function (sprite, location) {
    tiles.placeOnRandomTile(p1projectile2, sprites.castle.tilePath2)
    p1projectile2.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        p1projectile2.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
scene.onOverlapTile(SpriteKind.p1projectile, sprites.castle.tileGrass1, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile9`)
    }
})
scene.onOverlapTile(SpriteKind.player1, assets.tile`myTile9`, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player1.moveSprite(player12, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.player1, assets.tile`myTile0`, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player1.moveSprite(player12, 100, 100)
    }
})
scene.onHitWall(SpriteKind.p1projectile, function (sprite, location) {
    if (rockets == true || p1weapon == 4) {
        sprite.setScale(3, ScaleAnchor.Middle)
        sprite.setVelocity(0, 0)
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        100,
        false
        )
        splitScreen.cameraShake(splitScreen.Camera.Camera1, 4, 500)
        timer.after(500, function () {
            sprites.destroy(sprite)
        })
    } else {
        sprites.destroy(sprite)
    }
})
scene.onOverlapTile(SpriteKind.p1projectile, sprites.castle.tilePath2, function (sprite, location) {
    tiles.placeOnRandomTile(p1projectile2, sprites.castle.tilePath8)
    p1projectile2.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        p1projectile2.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
function p1_sniper_behavior () {
    if (p1weaponReload == false) {
        if (_67map == true) {
            p1projectile2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f . f f f . . . . . 
                . . . . f . . . . . f . . . . . 
                . . . . f f f . . . f . . . . . 
                . . . . f . f . . . f . . . . . 
                . . . . f f f . . . f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.p1projectile)
        } else {
            p1projectile2 = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . 
                . . . . . . f a f . . . . . . 
                . . . . . . . f . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `, SpriteKind.p1projectile)
        }
        p1projectile2.setFlag(SpriteFlag.GhostThroughWalls, true)
        spriteutils.placeAngleFrom(
        p1projectile2,
        0,
        0,
        player12
        )
        if (p1directionFacing == 1) {
            p1projectile2.setVelocity(0, -300)
        } else if (p1directionFacing == 2) {
            p1projectile2.setVelocity(-300, 0)
        } else if (p1directionFacing == 3) {
            p1projectile2.setVelocity(0, 300)
        } else if (p1directionFacing == 4) {
            p1projectile2.setVelocity(300, 0)
        }
        p1weaponReload = true
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        timer.after(3000, function () {
            sprites.destroy(p1projectile2)
            p1weaponReload = false
        })
    }
}
scene.onOverlapTile(SpriteKind.player2, sprites.castle.tilePath2, function (sprite, location) {
    tiles.placeOnRandomTile(player22, sprites.castle.tilePath8)
    player22.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        player22.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
function p2_weapon_setup () {
    p2weapon = 1
}
scene.onOverlapTile(SpriteKind.player1, sprites.dungeon.hazardLava0, function (sprite, location) {
    if (p1respawning == false) {
        info.player1.changeLifeBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.player2, sprites.castle.tileGrass1, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player2.moveSprite(player22, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.redFlag, sprites.castle.tilePath8, function (sprite, location) {
    tiles.placeOnRandomTile(redFlag2, sprites.castle.tilePath2)
    redFlag2.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        redFlag2.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
scene.onOverlapTile(SpriteKind.player1, sprites.dungeon.floorLight2, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player1.moveSprite(player12, 100, 100)
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.meatballCannon, function (sprite, otherSprite) {
    if (p2weaponPickupCooldown == false) {
        if (controller.player2.isPressed(ControllerButton.B)) {
            if (p2weapon == 1) {
                otherSprite.setKind(SpriteKind.peaShooter)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 1 2 f . . . . . . . . . 
                        . f c f 1 1 2 f . . . . . . . . 
                        f c c c f 1 1 2 f f f f f f f f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 f f f f f f f f 
                        . f c f 1 1 2 f . . . f 1 f . . 
                        . f c f 1 2 f . . . . f 1 f . . 
                        . . f f f f . . . . . f 1 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 7 7 f . . . . . . . . . 
                        . f c f 7 7 7 f . . . . . . . . 
                        f c c c f 7 7 7 f f f f f f f f 
                        f c c c f 7 7 7 7 7 7 7 7 7 7 f 
                        f c c c f 7 7 7 7 7 7 7 7 7 7 f 
                        f c c c f 7 7 7 f f f f f f f f 
                        . f c f 7 7 7 f . . . f 7 f . . 
                        . f c f 7 7 f . . . . f 7 f . . 
                        . . f f f f . . . . . f 7 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else if (p2weapon == 2) {
                otherSprite.setKind(SpriteKind.orangeShotgun)
                otherSprite.setImage(assets.image`myImage5`)
            } else if (p2weapon == 3) {
                otherSprite.setKind(SpriteKind.grapeSniper)
                otherSprite.setImage(assets.image`myImage3`)
            } else if (p2weapon == 5) {
                otherSprite.setKind(SpriteKind.sword)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . f . . . 
                        . . . . . . . . . . . f d f . . 
                        . . . . . . . . . . f d d d f . 
                        . . . . . . . . . f d d d d d f 
                        . . . . . . . . f d d d d d f . 
                        . . . . . . . f d d d d d f . . 
                        . . . . . . f d d d d d f . . . 
                        . . . . . f d d d d d f . . . . 
                        . . . . f d d d d d f . . . . . 
                        . . . f d d d d d f . . . . . . 
                        . . . f d d d d f . . . . . . . 
                        . . . f d d d f . . . . . . . . 
                        . . f f f f f . . . . . . . . . 
                        . f e f . . . . . . . . . . . . 
                        f e f . . . . . . . . . . . . . 
                        . f . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . f f f 
                        . . . . . . . . . . . . f 9 9 f 
                        . . . . . . . . . . . f 9 8 9 f 
                        . . . . . . . . . . f 9 8 9 f . 
                        . . . . . . . . . f 9 8 9 f . . 
                        . . . . . . . . f 9 8 9 f . . . 
                        f . . . . . . f 9 8 9 f . . . . 
                        f f . . . . f 9 8 9 f . . . . . 
                        f e f . . f 9 8 9 f . . . . . . 
                        f e e f f 9 8 9 f . . . . . . . 
                        . f e e f 8 9 f . . . . . . . . 
                        . . f e e f f . . . . . . . . . 
                        . . f f e e f . . . . . . . . . 
                        . f e f f e e f . . . . . . . . 
                        f e f . . f e e f . . . . . . . 
                        . f . . . . f f f f . . . . . . 
                        `)
                }
            } else if (p2weapon == 6) {
                otherSprite.setKind(SpriteKind.blueberrySMG)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ffffffffffffffffffff
                    f888888888888888888f
                    ffffffffffffffffff8f
                    .....f8f.f88f....f8f
                    .....f8f..f88f...f8f
                    .....f8f...f88f..f8f
                    .....fff....fff..fff
                    ....................
                    ....................
                    ....................
                    `)
            }
            p2weapon = 4
            p2_weapon_pickup_cooldown()
        }
    }
})
function p2_sniper_behavior () {
    if (p2weaponReload == false) {
        if (_67map == true) {
            p2projectile2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f . f f f . . . . . 
                . . . . f . . . . . f . . . . . 
                . . . . f f f . . . f . . . . . 
                . . . . f . f . . . f . . . . . 
                . . . . f f f . . . f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.p2projectile)
        } else {
            p2projectile2 = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . 
                . . . . . . f a f . . . . . . 
                . . . . . . . f . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `, SpriteKind.p2projectile)
        }
        p2projectile2.setFlag(SpriteFlag.GhostThroughWalls, true)
        spriteutils.placeAngleFrom(
        p2projectile2,
        0,
        0,
        player22
        )
        if (p2directionFacing == 1) {
            p2projectile2.setVelocity(0, -300)
        } else if (p2directionFacing == 2) {
            p2projectile2.setVelocity(-300, 0)
        } else if (p2directionFacing == 3) {
            p2projectile2.setVelocity(0, 300)
        } else if (p2directionFacing == 4) {
            p2projectile2.setVelocity(300, 0)
        }
        p2weaponReload = true
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        timer.after(3000, function () {
            sprites.destroy(p2projectile2)
            p2weaponReload = false
        })
    }
}
sprites.onOverlap(SpriteKind.p2projectile, SpriteKind.player1, function (sprite, otherSprite) {
    if (p1respawning == false) {
        if (rockets == true || p2weapon == 4) {
            info.player1.changeLifeBy(-5)
            sprite.setVelocity(0, 0)
            sprite.setScale(3, ScaleAnchor.Middle)
            animation.runImageAnimation(
            sprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . 3 . . . . . . . . . . . 4 . . 
                . 3 3 . . . . . . . . . 4 4 . . 
                . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
                . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
                . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
                . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
                . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
                . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
                . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
                . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
                . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
                . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
                . 4 4 d d 4 d d d 4 3 d d 4 . . 
                . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
                . 4 5 4 . . 4 4 4 . . . 4 4 . . 
                . 4 4 . . . . . . . . . . 4 4 . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b . b b b . . . . . 
                . . . . b 1 1 b 1 1 1 b . . . . 
                . . b b 3 1 1 d d 1 d d b b . . 
                . b 1 1 d d b b b b b 1 1 b . . 
                . b 1 1 1 b . . . . . b d d b . 
                . . 3 d d b . . . . . b d 1 1 b 
                . b 1 d 3 . . . . . . . b 1 1 b 
                . b 1 1 b . . . . . . b b 1 d b 
                . b 1 d b . . . . . . b d 3 d b 
                . b b d d b . . . . b d d d b . 
                . b d d d d b . b b 3 d d 3 b . 
                . . b d d 3 3 b d 3 3 b b b . . 
                . . . b b b d d d d d b . . . . 
                . . . . . . b b b b b . . . . . 
                `],
            100,
            false
            )
            splitScreen.cameraShake(splitScreen.Camera.Camera2, 4, 500)
            timer.after(500, function () {
                sprites.destroy(sprite)
            })
        } else if (p2weapon == 3 || p2weapon == 5) {
            info.player1.changeLifeBy(-5)
            sprites.destroy(sprite)
        } else {
            info.player1.changeLifeBy(-1)
            player12.setFlag(SpriteFlag.GhostThroughSprites, true)
            sprites.destroy(sprite)
            timer.after(500, function () {
                player12.setFlag(SpriteFlag.GhostThroughSprites, false)
            })
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (rockets == true) {
        p2projectileX = -100
        p2projectileY = 0
    } else {
        p2projectileX = -200
        p2projectileY = 0
    }
    if (p2inVehical == true) {
        player22.setImage(img`
            ..........fffffffffffffffffff....................
            ........ffccaaaaaaaaaaaaaaaaaf.........ffffff....
            ......ffcccaaaaaaaaaaaaaaaaaaaf.......fdcf3aaf...
            .....fcccaa33333333333333333aaf.......fdcf3aaaf..
            ....fccaa33333333333333333333aaf.....fdbcf3aaaf..
            ...fcca3333333333333333333333aaf.....fdbccf3aaaf.
            ..fcca33113333333333333333333aaf.....fdbccf3aaaf.
            .fcca33311333333333333333333aaf......fdbccf3aaaf.
            .fca3333333aaaaaaaaaaaaaaaaaaaf.....fdbbccf3aaaaf
            fcca333aaaaaaaaaaaaaaaaaaaaaaf.....ffdbccf3aaaaaf
            fcaaaaaaaccffffffaaaaaaaaaaaaffffffbbbbccf3aaaaaf
            fcaaaaaacffccaaa3faaaaaaaaaaafcccbbbbbbcf3aaaaaaf
            fcaaaaacfcccaaaa33faaaaaaaaaafcccccccccf3aaaaaacf
            fcaaaacfccaaaaaa33faaaaaaaaaa3fffffffff3aaaaaacf.
            fcaaacfccaaaaaaa33faaaaaaaaaaa333333333aaaaaacf..
            fcaaacfccaaaaaaa33faaaaaaaaaaaaaaaaaaaaaaccccf...
            fcaaacfccaaaaaa33faaaaaaaccccccccccccccccffff....
            .faaaafccaaaaa33ffcccccccffffffffffffffff........
            ..faaafccaaaa33ffffffffff........................
            ...ffffccaaa33f..................................
            .......fcaa33f...................................
            ........fa33f....................................
            .........fff.....................................
            `)
    }
    p2projectileUpdown = false
    p2directionFacing = 2
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (rockets == true) {
        p1projectileX = 100
        p1projectileY = 0
    } else {
        p1projectileX = 200
        p1projectileY = 0
    }
    if (p1inVehicle == true) {
        player12.setImage(img`
            ....................fffffffffffffffffff..........
            ....ffffff.........faaaaaaaaaaaaaaaaaccff........
            ...faa3fcdf.......faaaaaaaaaaaaaaaaaaacccff......
            ..faaa3fcdf.......faa33333333333333333aacccf.....
            ..faaa3fcbdf.....faa33333333333333333333aaccf....
            .faaa3fccbdf.....faa3333333333333333333333accf...
            .faaa3fccbdf.....faa33333333333333333331133accf..
            .faaa3fccbdf......faa33333333333333333311333accf.
            faaaa3fccbbdf.....faaaaaaaaaaaaaaaaaaa3333333acf.
            faaaaa3fccbdff.....faaaaaaaaaaaaaaaaaaaaaa333accf
            faaaaa3fccbbbbffffffaaaaaaaaaaaaffffffccaaaaaaacf
            faaaaaa3fcbbbbbbcccfaaaaaaaaaaaf3aaaccffcaaaaaacf
            fcaaaaaa3fcccccccccfaaaaaaaaaaf33aaaacccfcaaaaacf
            .fcaaaaaa3fffffffff3aaaaaaaaaaf33aaaaaaccfcaaaacf
            ..fcaaaaaa333333333aaaaaaaaaaaf33aaaaaaaccfcaaacf
            ...fccccaaaaaaaaaaaaaaaaaaaaaaf33aaaaaaaccfcaaacf
            ....ffffccccccccccccccccaaaaaaaf33aaaaaaccfcaaacf
            ........ffffffffffffffffcccccccff33aaaaaccfaaaaf.
            ........................ffffffffff33aaaaccfaaaf..
            ..................................f33aaaccffff...
            ...................................f33aacf.......
            ....................................f33af........
            .....................................fff.........
            `)
    }
    p1projectileUpdown = false
    p1directionFacing = 4
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (loadingScreen == false) {
        if (p1objectHold == false) {
            if (sloppy == true) {
                p1projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . b d b c . . . . . 
                    . . . . b b c 2 2 2 c b b . . . 
                    . . . . b 2 2 2 4 2 2 2 b . . . 
                    . . . c c 2 2 2 4 2 2 2 c c . . 
                    . . b b 2 2 2 4 5 4 2 2 2 b b . 
                    . . d d 2 4 4 5 5 5 4 4 2 d d . 
                    . . b b 2 2 2 4 5 4 2 2 2 b b . 
                    . . . c c 2 2 2 4 2 2 2 c c . . 
                    . . . . b 2 2 2 4 2 2 2 b . . . 
                    . . . . b b c 2 2 2 c b b . . . 
                    . . . . . . c b d b c . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p1projectile)
            } else if (p1inVehicle == true) {
                if (p1projectileUpdown == true) {
                    p1projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 8 8 . . . . . . . 
                        . . . . . . 8 9 9 8 . . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . . 8 9 9 8 . . . . . . 
                        . . . . . . . 8 8 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p1projectile)
                } else {
                    p1projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                        . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
                        . 8 9 1 1 1 1 1 1 1 1 1 1 9 8 . 
                        . 8 9 1 1 1 1 1 1 1 1 1 1 9 8 . 
                        . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
                        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p1projectile)
                }
            } else if (rockets == true) {
                p1projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . f f f e e e f f f . . . 
                    . . . . f e e e e e e e f . . . 
                    . . . f f e e e d e e e f f . . 
                    . . f f e e e d d d e e e f f . 
                    . . f f e e d d d d d e e f f . 
                    . . f f e e e d d d e e e f f . 
                    . . . f f e e e d e e e f f . . 
                    . . . . f e e e e e e e f . . . 
                    . . . . f f f e e e f f f . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p1projectile)
            } else if (p1weapon == 2) {
                p1_shotgun_behavior()
            } else if (p1weapon == 3) {
                p1_sniper_behavior()
            } else if (p1weapon == 4) {
                p1_rocket_behavior()
            } else if (p1weapon == 5) {
                p1_sword_behavior()
            } else if (p1weapon == 6) {
            	
            } else {
                if (baseballMap == true) {
                    p1projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . f 2 1 f . . . . . . 
                        . . . . . f 2 2 1 1 f . . . . . 
                        . . . . . f 1 1 2 2 f . . . . . 
                        . . . . . . f 1 2 f . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p1projectile)
                } else {
                    p1projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . f 7 7 f . . . . . . 
                        . . . . . . f 7 7 f . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p1projectile)
                }
            }
            if (_67map == true) {
                p1projectile2.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f . f f f . . . . . 
                    . . . . f . . . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . f . f . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
            if (p1weaponReload == false) {
                music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            }
            if (p1weapon == 1 || p1inVehicle == true) {
                spriteutils.placeAngleFrom(
                p1projectile2,
                0,
                0,
                player12
                )
                p1projectile2.setVelocity(p1projectileX, p1projectileY)
            }
        }
    }
})
function p1_sword_behavior () {
    if (p1weaponReload == false) {
        if (p1directionFacing == 1) {
            p1projectile2 = sprites.create(img`
                . . . . f f f f f f f f . . . . 
                . . . f 1 1 1 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 1 1 1 f . . 
                . f 1 1 1 f f f f f f 1 1 1 f . 
                f 1 1 1 f . . . . . . f 1 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                . f f . . . . . . . . . . f f . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.p1projectile)
            spriteutils.placeAngleFrom(
            p1projectile2,
            190,
            -16,
            player12
            )
        } else if (p1directionFacing == 2) {
            p1projectile2 = sprites.create(assets.image`myImage4`, SpriteKind.p1projectile)
            spriteutils.placeAngleFrom(
            p1projectile2,
            110,
            16,
            player12
            )
        } else if (p1directionFacing == 3) {
            p1projectile2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . . . . . . f f . 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 1 f . . . . . . f 1 1 1 f 
                . f 1 1 1 f f f f f f 1 1 1 f . 
                . . f 1 1 1 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 1 1 1 f . . . 
                . . . . f f f f f f f f . . . . 
                `, SpriteKind.p1projectile)
            spriteutils.placeAngleFrom(
            p1projectile2,
            190,
            16,
            player12
            )
        } else if (p1directionFacing == 4) {
            p1projectile2 = sprites.create(img`
                . . . . f f f f f f f f . . . . 
                . . . f 1 1 1 1 1 1 1 1 f . . . 
                . . . f 1 1 1 1 1 1 1 1 1 f . . 
                . . . . f f f f f f f 1 1 1 f . 
                . . . . . . . . . . . f 1 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . f 1 1 1 f 
                . . . . f f f f f f f 1 1 1 f . 
                . . . f 1 1 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 1 1 1 f . . . 
                . . . . f f f f f f f f . . . . 
                `, SpriteKind.p1projectile)
            spriteutils.placeAngleFrom(
            p1projectile2,
            110,
            -16,
            player12
            )
        }
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        p1weaponReload = true
        timer.after(250, function () {
            sprites.destroy(p1projectile2)
            p1weaponReload = false
        })
    }
}
scene.onOverlapTile(SpriteKind.player1, assets.tile`myTile10`, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player1.moveSprite(player12, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.player2, assets.tile`myTile12`, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player2.moveSprite(player22, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.blueFlag, sprites.castle.tilePath8, function (sprite, location) {
    tiles.placeOnRandomTile(blueFlag2, sprites.castle.tilePath2)
    blueFlag2.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        blueFlag2.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
scene.onOverlapTile(SpriteKind.player2, sprites.dungeon.floorDark2, function (sprite, location) {
    if (p1objectHold == false) {
        controller.player2.moveSprite(player22, 100, 100)
    }
})
sprites.onOverlap(SpriteKind.p1projectile, SpriteKind.player2, function (sprite, otherSprite) {
    if (p2respawning == false) {
        if (rockets == true || p1weapon == 4) {
            info.player2.changeLifeBy(-5)
            sprite.setVelocity(0, 0)
            sprite.setScale(3, ScaleAnchor.Middle)
            animation.runImageAnimation(
            sprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . 3 . . . . . . . . . . . 4 . . 
                . 3 3 . . . . . . . . . 4 4 . . 
                . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
                . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
                . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
                . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
                . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
                . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
                . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
                . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
                . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
                . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
                . 4 4 d d 4 d d d 4 3 d d 4 . . 
                . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
                . 4 5 4 . . 4 4 4 . . . 4 4 . . 
                . 4 4 . . . . . . . . . . 4 4 . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b . b b b . . . . . 
                . . . . b 1 1 b 1 1 1 b . . . . 
                . . b b 3 1 1 d d 1 d d b b . . 
                . b 1 1 d d b b b b b 1 1 b . . 
                . b 1 1 1 b . . . . . b d d b . 
                . . 3 d d b . . . . . b d 1 1 b 
                . b 1 d 3 . . . . . . . b 1 1 b 
                . b 1 1 b . . . . . . b b 1 d b 
                . b 1 d b . . . . . . b d 3 d b 
                . b b d d b . . . . b d d d b . 
                . b d d d d b . b b 3 d d 3 b . 
                . . b d d 3 3 b d 3 3 b b b . . 
                . . . b b b d d d d d b . . . . 
                . . . . . . b b b b b . . . . . 
                `],
            100,
            false
            )
            splitScreen.cameraShake(splitScreen.Camera.Camera1, 4, 500)
            timer.after(500, function () {
                sprites.destroy(sprite)
            })
        } else if (p1weapon == 3 || p1weapon == 5) {
            info.player2.changeLifeBy(-5)
            sprites.destroy(sprite)
        } else {
            info.player2.changeLifeBy(-1)
            player22.setFlag(SpriteFlag.GhostThroughSprites, true)
            sprites.destroy(sprite)
            timer.after(500, function () {
                player22.setFlag(SpriteFlag.GhostThroughSprites, false)
            })
        }
    }
})
scene.onOverlapTile(SpriteKind.player2, sprites.dungeon.hazardLava0, function (sprite, location) {
    if (p2respawning == false) {
        info.player2.changeLifeBy(-1)
    }
})
function p2_sword_behavior () {
    if (p2weaponReload == false) {
        if (p2directionFacing == 1) {
            p2projectile2 = sprites.create(img`
                . . . . f f f f f f f f . . . . 
                . . . f 1 1 1 1 1 1 1 1 f . . . 
                . . f 1 1 1 1 1 1 1 1 1 1 f . . 
                . f 1 1 1 f f f f f f 1 1 1 f . 
                f 1 1 1 f . . . . . . f 1 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                . f f . . . . . . . . . . f f . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.p2projectile)
            spriteutils.placeAngleFrom(
            p2projectile2,
            190,
            -16,
            player22
            )
        } else if (p2directionFacing == 2) {
            p2projectile2 = sprites.create(assets.image`myImage4`, SpriteKind.p2projectile)
            spriteutils.placeAngleFrom(
            p2projectile2,
            110,
            16,
            player22
            )
        } else if (p2directionFacing == 3) {
            p2projectile2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . . . . . . f f . 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 f . . . . . . . . f 1 1 f 
                f 1 1 1 f . . . . . . f 1 1 1 f 
                . f 1 1 1 f f f f f f 1 1 1 f . 
                . . f 1 1 1 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 1 1 1 f . . . 
                . . . . f f f f f f f f . . . . 
                `, SpriteKind.p2projectile)
            spriteutils.placeAngleFrom(
            p2projectile2,
            190,
            16,
            player22
            )
        } else if (p2directionFacing == 4) {
            p2projectile2 = sprites.create(img`
                . . . . f f f f f f f f . . . . 
                . . . f 1 1 1 1 1 1 1 1 f . . . 
                . . . f 1 1 1 1 1 1 1 1 1 f . . 
                . . . . f f f f f f f 1 1 1 f . 
                . . . . . . . . . . . f 1 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . . f 1 1 f 
                . . . . . . . . . . . f 1 1 1 f 
                . . . . f f f f f f f 1 1 1 f . 
                . . . f 1 1 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 1 1 1 f . . . 
                . . . . f f f f f f f f . . . . 
                `, SpriteKind.p2projectile)
            spriteutils.placeAngleFrom(
            p2projectile2,
            110,
            -16,
            player22
            )
        }
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        p2weaponReload = true
        timer.after(250, function () {
            sprites.destroy(p2projectile2)
            p2weaponReload = false
        })
    }
}
scene.onOverlapTile(SpriteKind.player2, assets.tile`myTile10`, function (sprite, location) {
    controller.player2.moveSprite(player22, 70, 70)
})
info.player1.onLifeZero(function () {
    p1respawning = true
    p1inVehicle = false
    splitScreen.cameraShake(splitScreen.Camera.Camera2, 4, 500)
    if (CTF == false) {
        if ((0 as any) == (false as any)) {
            info.player2.changeScoreBy(1)
        }
    }
    if (p1objectHold == true) {
        if (Oddball == false) {
            sprites.destroy(blueFlag2)
            blueFlag2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f f f f . 
                . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                . . f f f f f f f f f f f f f . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                `, SpriteKind.blueFlag)
            tiles.placeOnRandomTile(blueFlag2, assets.tile`myTile5`)
        }
        p1objectHold = false
    }
    if (info.player2.score() == scoreToWin) {
        if (CTF == false) {
            if (Oddball == false) {
                game.gameOver(true)
            }
        }
    } else {
        sprites.destroy(player12)
        timer.after(2000, function () {
            music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 5000, 133, 133, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(3000, function () {
            music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 5000, 133, 133, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(4000, function () {
            music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 5000, 133, 133, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(5000, function () {
            music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            if (p1character == 0) {
                player12 = sprites.create(img`
                    . . . . c c c b b b b b . . . . 
                    . . c c b 4 4 4 4 4 4 b b b . . 
                    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
                    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
                    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
                    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
                    e b b 1 1 4 4 4 4 4 4 1 1 4 b e 
                    . e b 1 f 4 4 4 5 4 4 1 f b e . 
                    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
                    8 7 2 e e e e e e e e e e 2 7 8 
                    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
                    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
                    e b e 8 8 c c 8 8 c c c 8 e b e 
                    e e b e c c e e e e e c e b e e 
                    . e e b b 4 4 4 4 4 4 4 4 e e . 
                    . . . c c c c c e e e e e . . . 
                    `, SpriteKind.player1)
            } else if (p1character == 1) {
                player12 = sprites.create(img`
                    . . . . . . b b b b a a . . . . 
                    . . . . b b d d d 3 3 3 a a . . 
                    . . . b d d d 3 3 3 3 3 3 a a . 
                    . . b d 1 1 3 3 3 3 3 1 1 3 a . 
                    . b 3 d 1 f 3 3 3 b 3 1 f 3 a b 
                    . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
                    b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
                    b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
                    b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
                    a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
                    a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
                    a a 3 3 3 d d d a a 4 4 4 e e . 
                    . e a a a a a a 4 4 4 4 e e . . 
                    . . e e b b 4 4 4 4 b e e . . . 
                    . . . e e e e e e e e . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.player1)
            } else if (p1character == 2) {
                player12 = sprites.create(img`
                    . . . . . . . e c 7 . . . . . . 
                    . . . . e e e c 7 7 e e . . . . 
                    . . c e e e e c 7 e 2 2 e e . . 
                    . c e e e e e c 6 e e 2 2 2 e . 
                    . c e 1 1 2 e c c 2 4 1 1 2 e . 
                    c e e 1 f 2 2 2 2 2 4 1 f 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
                    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
                    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
                    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
                    . . . 2 2 e e 4 4 4 2 e e . . . 
                    . . . . . 2 2 e e e e . . . . . 
                    `, SpriteKind.player1)
            } else if (p1character == 3) {
                player12 = sprites.create(img`
                    4 4 4 . . 4 4 4 4 4 . . . . . . 
                    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
                    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
                    . b 5 5 5 5 1 1 5 5 5 5 5 4 . . 
                    . b d 1 1 5 5 5 5 5 5 1 1 5 4 . 
                    b 4 5 1 f 5 5 5 5 5 5 1 f 5 4 . 
                    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
                    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
                    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
                    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
                    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
                    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
                    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
                    . . . . c c b 4 4 4 b b 4 5 4 4 
                    . . . . . . c c c c c c b b 4 . 
                    `, SpriteKind.player1)
            } else if (p1character == 4) {
                player12 = sprites.create(img`
                    . . 2 2 b b b b b . . . . . . . 
                    . 2 b 4 4 4 4 4 4 b . . . . . . 
                    2 2 1 1 4 4 d d 1 1 b . . . . . 
                    2 b 1 f 4 4 4 4 1 f b . . . . . 
                    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
                    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
                    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
                    2 2 b 4 4 4 4 4 4 4 b e . . . . 
                    . 2 b b b 4 4 4 b b b e . . . . 
                    . . e b b b b b b b e e . . . . 
                    . . . e e b 4 4 b e e e b . . . 
                    . . . . . e e e e e e b d b b . 
                    . . . . . . . . . . . b 1 1 1 b 
                    . . . . . . . . . . . c 1 d d b 
                    . . . . . . . . . . . c 1 b c . 
                    . . . . . . . . . . . . c c . . 
                    `, SpriteKind.player1)
            } else if (p1character == 5) {
                player12 = sprites.create(img`
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . 2 2 3 3 3 3 2 e . . . . 
                    . . . 2 3 d 1 1 d d 3 2 e . . . 
                    . . 2 3 1 1 3 3 3 1 1 3 e . . . 
                    . 2 3 3 1 f 3 3 3 1 f 3 b e . . 
                    . 2 1 d 3 3 3 3 d 3 3 3 3 b b . 
                    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
                    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
                    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
                    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
                    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
                    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
                    e 3 d 3 3 1 d d 3 d 1 b b e e . 
                    . e 3 1 1 d d 1 1 1 b b e e e . 
                    . . e 3 3 3 3 3 3 b e e e e . . 
                    . . . e e e e e e e e e e . . . 
                    `, SpriteKind.player1)
            } else if (p1character == 6) {
                player12 = sprites.create(img`
                    . . . . . . b b b b . . . . . . 
                    . . . . . . b 4 4 4 b . . . . . 
                    . . . . . . b b 4 4 4 b . . . . 
                    . . . . . b 4 b b b 4 4 b . . . 
                    . . . . b d 1 1 5 4 b 1 1 b . . 
                    . . . . b 3 1 f 5 5 4 1 f 4 b . 
                    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                    . . . b 5 3 2 3 5 5 5 5 e e e e 
                    . . b d 7 5 5 5 3 2 3 5 5 e e e 
                    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                    b d 3 2 d 5 5 5 d d d 4 4 . . . 
                    b 5 5 5 5 d d 4 4 4 4 . . . . . 
                    4 d d d 4 4 4 . . . . . . . . . 
                    4 4 4 4 . . . . . . . . . . . . 
                    `, SpriteKind.player1)
            } else if (p1character == 7) {
                player12 = sprites.create(img`
                    . . . . . . . . . . b b b . . . 
                    . . . . . . . . b e e 3 3 b . . 
                    . . . . . . b b e 3 2 e 3 a . . 
                    . . . . b b 1 1 e 2 2 e 1 1 a . 
                    . . b b 3 3 1 f 3 e e 3 1 f a . 
                    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                    b 3 3 3 d d d d 3 3 3 3 3 d d a 
                    b b b b b b b 3 d d d d d d 3 a 
                    b d 5 5 5 5 d b b b a a a a a a 
                    b 3 d d 5 5 5 5 5 5 5 d d d d a 
                    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                    b b b 3 d 5 5 5 5 5 5 5 d d b a 
                    . . . b b b 3 d 5 5 5 5 d d 3 a 
                    . . . . . . b b b b 3 d d d b a 
                    . . . . . . . . . . b b b a a . 
                    `, SpriteKind.player1)
            } else if (p1character == 8) {
                player12 = sprites.create(img`
                    . . . . . 3 3 b 3 3 d d 3 3 . . 
                    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
                    . . . 3 d d d 1 d 1 1 d d 3 1 3 
                    . . 3 d d 1 1 d d d d 1 1 3 3 3 
                    . 3 1 1 d 1 f d 1 d d 1 f b . . 
                    . 3 1 1 1 d d 1 1 1 1 d d 1 3 . 
                    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
                    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
                    . 4 4 d 1 1 1 1 1 1 d d d b b . 
                    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
                    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
                    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
                    4 5 5 d 5 5 d b b b d d 3 . . . 
                    4 5 5 5 d d d d 4 4 b 3 . . . . 
                    . 4 5 5 5 4 4 4 . . . . . . . . 
                    . . 4 4 4 . . . . . . . . . . . 
                    `, SpriteKind.player1)
            } else if (p1character == 9) {
                player12 = sprites.create(img`
                    . . . . . . . 6 . . . . . . . . 
                    . . . . . . 8 6 6 . . . 6 8 . . 
                    . . . e e e 8 8 6 6 . 6 7 8 . . 
                    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
                    . e 2 2 1 1 2 7 7 7 1 1 8 6 . . 
                    . e 2 4 1 f 6 7 7 7 1 f 6 8 8 . 
                    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
                    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
                    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
                    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
                    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
                    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
                    e e 2 e 2 2 4 2 2 e e e c . . . 
                    e e e e 2 e 2 2 e e e c . . . . 
                    e e e 2 e e c e c c c . . . . . 
                    . c c c c c c c . . . . . . . . 
                    `, SpriteKind.player1)
            } else if (p1character == 10) {
                player12 = sprites.create(img`
                    . . . . . . . . . . . 6 6 6 6 6 
                    . . . . . . . . . 6 6 7 7 7 7 8 
                    . . . . . . 8 8 8 7 7 8 8 6 8 8 
                    . . e e e e c 6 6 8 8 . 8 7 8 . 
                    . e 1 1 4 2 1 1 8 . . . 6 7 8 . 
                    e 2 1 f 2 2 1 f c . . . 6 7 8 . 
                    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
                    e 2 e e 2 2 2 2 e e e e c 6 8 . 
                    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
                    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
                    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
                    . . . e c c e c 2 2 2 2 2 2 2 e 
                    . . . . . . . c 2 e e 2 2 e 2 c 
                    . . . . . . . c e e e e e e 2 c 
                    . . . . . . . . c e 2 2 2 2 c . 
                    . . . . . . . . . c c c c c . . 
                    `, SpriteKind.player1)
            } else if (p1character == 11) {
                player12 = sprites.create(img`
                    . . . . . . . e e e e . . . . . 
                    . . . . . e e 4 5 5 5 e e . . . 
                    . . . . e 4 5 6 2 2 7 6 6 e . . 
                    . . . e 5 1 1 7 2 2 6 1 1 4 e . 
                    . . e 5 2 1 f 6 6 4 5 1 f 5 4 . 
                    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                    e 5 e c 5 4 5 4 5 5 5 e e . . . 
                    e 5 e e 5 5 5 5 5 4 e . . . . . 
                    4 5 4 e 5 5 5 5 e e . . . . . . 
                    . 4 5 4 5 5 4 e . . . . . . . . 
                    . . 4 4 e e e . . . . . . . . . 
                    `, SpriteKind.player1)
            }
            if (CTF == false) {
                if (Math.percentChance(50)) {
                    tiles.placeOnRandomTile(player12, sprites.dungeon.floorMixed)
                } else {
                    tiles.placeOnRandomTile(player12, assets.tile`myTile6`)
                }
            } else {
                tiles.placeOnRandomTile(player12, sprites.dungeon.floorMixed)
            }
            info.player1.setLife(5)
            splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, player12)
            controller.player1.moveSprite(player12)
            p1title.attachToSprite(player12)
            p2title.setLabel(player1name, 15)
            p1respawning = false
        })
    }
})
scene.onOverlapTile(SpriteKind.player2, assets.tile`myTile7`, function (sprite, location) {
    controller.player2.moveSprite(player22, 70, 70)
})
info.player2.onLifeZero(function () {
    p2respawning = true
    p2inVehical = false
    splitScreen.cameraShake(splitScreen.Camera.Camera2, 4, 500)
    if (CTF == false) {
        if (Oddball == false) {
            info.player1.changeScoreBy(1)
        }
    }
    if (p2objectHold == true) {
        if (Oddball == false) {
            sprites.destroy(redFlag2)
            redFlag2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f f f f . 
                . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                . . f f f f f f f f f f f f f . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                `, SpriteKind.redFlag)
            tiles.placeOnRandomTile(redFlag2, assets.tile`myTile5`)
        }
        p2objectHold = false
    }
    if (info.player1.score() == scoreToWin) {
        if (CTF == false) {
            if (Oddball == false) {
                game.gameOver(true)
            }
        }
    } else {
        sprites.destroy(player22)
        timer.after(2000, function () {
            music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 5000, 133, 133, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(3000, function () {
            music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 5000, 133, 133, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(4000, function () {
            music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 5000, 133, 133, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(5000, function () {
            music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            if (p2character == 0) {
                player22 = sprites.create(img`
                    . . . . c c c b b b b b . . . . 
                    . . c c b 4 4 4 4 4 4 b b b . . 
                    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
                    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
                    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
                    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
                    e b b 1 1 4 4 4 4 4 4 1 1 4 b e 
                    . e b 1 f 4 4 4 5 4 4 1 f b e . 
                    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
                    8 7 2 e e e e e e e e e e 2 7 8 
                    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
                    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
                    e b e 8 8 c c 8 8 c c c 8 e b e 
                    e e b e c c e e e e e c e b e e 
                    . e e b b 4 4 4 4 4 4 4 4 e e . 
                    . . . c c c c c e e e e e . . . 
                    `, SpriteKind.player2)
            } else if (p2character == 1) {
                player22 = sprites.create(img`
                    . . . . . . b b b b a a . . . . 
                    . . . . b b d d d 3 3 3 a a . . 
                    . . . b d d d 3 3 3 3 3 3 a a . 
                    . . b d 1 1 3 3 3 3 3 1 1 3 a . 
                    . b 3 d 1 f 3 3 3 b 3 1 f 3 a b 
                    . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
                    b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
                    b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
                    b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
                    a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
                    a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
                    a a 3 3 3 d d d a a 4 4 4 e e . 
                    . e a a a a a a 4 4 4 4 e e . . 
                    . . e e b b 4 4 4 4 b e e . . . 
                    . . . e e e e e e e e . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.player2)
            } else if (p2character == 2) {
                player22 = sprites.create(img`
                    . . . . . . . e c 7 . . . . . . 
                    . . . . e e e c 7 7 e e . . . . 
                    . . c e e e e c 7 e 2 2 e e . . 
                    . c e e e e e c 6 e e 2 2 2 e . 
                    . c e 1 1 2 e c c 2 4 1 1 2 e . 
                    c e e 1 f 2 2 2 2 2 4 1 f 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
                    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
                    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
                    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
                    . . . 2 2 e e 4 4 4 2 e e . . . 
                    . . . . . 2 2 e e e e . . . . . 
                    `, SpriteKind.player2)
            } else if (p2character == 3) {
                player22 = sprites.create(img`
                    4 4 4 . . 4 4 4 4 4 . . . . . . 
                    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
                    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
                    . b 5 5 5 5 1 1 5 5 5 5 5 4 . . 
                    . b d 1 1 5 5 5 5 5 5 1 1 5 4 . 
                    b 4 5 1 f 5 5 5 5 5 5 1 f 5 4 . 
                    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
                    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
                    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
                    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
                    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
                    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
                    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
                    . . . . c c b 4 4 4 b b 4 5 4 4 
                    . . . . . . c c c c c c b b 4 . 
                    `, SpriteKind.player2)
            } else if (p2character == 4) {
                player22 = sprites.create(img`
                    . . 2 2 b b b b b . . . . . . . 
                    . 2 b 4 4 4 4 4 4 b . . . . . . 
                    2 2 1 1 4 4 d d 1 1 b . . . . . 
                    2 b 1 f 4 4 4 4 1 f b . . . . . 
                    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
                    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
                    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
                    2 2 b 4 4 4 4 4 4 4 b e . . . . 
                    . 2 b b b 4 4 4 b b b e . . . . 
                    . . e b b b b b b b e e . . . . 
                    . . . e e b 4 4 b e e e b . . . 
                    . . . . . e e e e e e b d b b . 
                    . . . . . . . . . . . b 1 1 1 b 
                    . . . . . . . . . . . c 1 d d b 
                    . . . . . . . . . . . c 1 b c . 
                    . . . . . . . . . . . . c c . . 
                    `, SpriteKind.player2)
            } else if (p2character == 5) {
                player22 = sprites.create(img`
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . 2 2 3 3 3 3 2 e . . . . 
                    . . . 2 3 d 1 1 d d 3 2 e . . . 
                    . . 2 3 1 1 3 3 3 1 1 3 e . . . 
                    . 2 3 3 1 f 3 3 3 1 f 3 b e . . 
                    . 2 1 d 3 3 3 3 d 3 3 3 3 b b . 
                    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
                    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
                    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
                    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
                    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
                    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
                    e 3 d 3 3 1 d d 3 d 1 b b e e . 
                    . e 3 1 1 d d 1 1 1 b b e e e . 
                    . . e 3 3 3 3 3 3 b e e e e . . 
                    . . . e e e e e e e e e e . . . 
                    `, SpriteKind.player2)
            } else if (p2character == 6) {
                player22 = sprites.create(img`
                    . . . . . . b b b b . . . . . . 
                    . . . . . . b 4 4 4 b . . . . . 
                    . . . . . . b b 4 4 4 b . . . . 
                    . . . . . b 4 b b b 4 4 b . . . 
                    . . . . b d 1 1 5 4 b 1 1 b . . 
                    . . . . b 3 1 f 5 5 4 1 f 4 b . 
                    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                    . . . b 5 3 2 3 5 5 5 5 e e e e 
                    . . b d 7 5 5 5 3 2 3 5 5 e e e 
                    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                    b d 3 2 d 5 5 5 d d d 4 4 . . . 
                    b 5 5 5 5 d d 4 4 4 4 . . . . . 
                    4 d d d 4 4 4 . . . . . . . . . 
                    4 4 4 4 . . . . . . . . . . . . 
                    `, SpriteKind.player2)
            } else if (p2character == 7) {
                player22 = sprites.create(img`
                    . . . . . . . . . . b b b . . . 
                    . . . . . . . . b e e 3 3 b . . 
                    . . . . . . b b e 3 2 e 3 a . . 
                    . . . . b b 1 1 e 2 2 e 1 1 a . 
                    . . b b 3 3 1 f 3 e e 3 1 f a . 
                    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                    b 3 3 3 d d d d 3 3 3 3 3 d d a 
                    b b b b b b b 3 d d d d d d 3 a 
                    b d 5 5 5 5 d b b b a a a a a a 
                    b 3 d d 5 5 5 5 5 5 5 d d d d a 
                    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                    b b b 3 d 5 5 5 5 5 5 5 d d b a 
                    . . . b b b 3 d 5 5 5 5 d d 3 a 
                    . . . . . . b b b b 3 d d d b a 
                    . . . . . . . . . . b b b a a . 
                    `, SpriteKind.player2)
            } else if (p2character == 8) {
                player22 = sprites.create(img`
                    . . . . . 3 3 b 3 3 d d 3 3 . . 
                    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
                    . . . 3 d d d 1 d 1 1 d d 3 1 3 
                    . . 3 d d 1 1 d d d d 1 1 3 3 3 
                    . 3 1 1 d 1 f d 1 d d 1 f b . . 
                    . 3 1 1 1 d d 1 1 1 1 d d 1 3 . 
                    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
                    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
                    . 4 4 d 1 1 1 1 1 1 d d d b b . 
                    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
                    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
                    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
                    4 5 5 d 5 5 d b b b d d 3 . . . 
                    4 5 5 5 d d d d 4 4 b 3 . . . . 
                    . 4 5 5 5 4 4 4 . . . . . . . . 
                    . . 4 4 4 . . . . . . . . . . . 
                    `, SpriteKind.player2)
            } else if (p2character == 9) {
                player22 = sprites.create(img`
                    . . . . . . . 6 . . . . . . . . 
                    . . . . . . 8 6 6 . . . 6 8 . . 
                    . . . e e e 8 8 6 6 . 6 7 8 . . 
                    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
                    . e 2 2 1 1 2 7 7 7 1 1 8 6 . . 
                    . e 2 4 1 f 6 7 7 7 1 f 6 8 8 . 
                    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
                    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
                    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
                    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
                    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
                    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
                    e e 2 e 2 2 4 2 2 e e e c . . . 
                    e e e e 2 e 2 2 e e e c . . . . 
                    e e e 2 e e c e c c c . . . . . 
                    . c c c c c c c . . . . . . . . 
                    `, SpriteKind.player2)
            } else if (p2character == 10) {
                player22 = sprites.create(img`
                    . . . . . . . . . . . 6 6 6 6 6 
                    . . . . . . . . . 6 6 7 7 7 7 8 
                    . . . . . . 8 8 8 7 7 8 8 6 8 8 
                    . . e e e e c 6 6 8 8 . 8 7 8 . 
                    . e 1 1 4 2 1 1 8 . . . 6 7 8 . 
                    e 2 1 f 2 2 1 f c . . . 6 7 8 . 
                    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
                    e 2 e e 2 2 2 2 e e e e c 6 8 . 
                    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
                    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
                    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
                    . . . e c c e c 2 2 2 2 2 2 2 e 
                    . . . . . . . c 2 e e 2 2 e 2 c 
                    . . . . . . . c e e e e e e 2 c 
                    . . . . . . . . c e 2 2 2 2 c . 
                    . . . . . . . . . c c c c c . . 
                    `, SpriteKind.player2)
            } else if (p2character == 11) {
                player22 = sprites.create(img`
                    . . . . . . . e e e e . . . . . 
                    . . . . . e e 4 5 5 5 e e . . . 
                    . . . . e 4 5 6 2 2 7 6 6 e . . 
                    . . . e 5 1 1 7 2 2 6 1 1 4 e . 
                    . . e 5 2 1 f 6 6 4 5 1 f 5 4 . 
                    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                    e 5 e c 5 4 5 4 5 5 5 e e . . . 
                    e 5 e e 5 5 5 5 5 4 e . . . . . 
                    4 5 4 e 5 5 5 5 e e . . . . . . 
                    . 4 5 4 5 5 4 e . . . . . . . . 
                    . . 4 4 e e e . . . . . . . . . 
                    `, SpriteKind.player2)
            }
            if (CTF == false) {
                if (Math.percentChance(50)) {
                    tiles.placeOnRandomTile(player22, sprites.dungeon.floorMixed)
                } else {
                    tiles.placeOnRandomTile(player22, assets.tile`myTile6`)
                }
            } else {
                tiles.placeOnRandomTile(player22, assets.tile`myTile6`)
            }
            info.player2.setLife(5)
            splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, player22)
            controller.player2.moveSprite(player22)
            p2title.attachToSprite(player22)
            p2title.setLabel(player2name, 15)
            p2respawning = false
        })
    }
})
sprites.onOverlap(SpriteKind.player1, SpriteKind.grapeSniper, function (sprite, otherSprite) {
    if (p1weaponPickupCooldown == false) {
        if (controller.player1.isPressed(ControllerButton.B)) {
            if (p1weapon == 1) {
                otherSprite.setKind(SpriteKind.peaShooter)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 1 2 f . . . . . . . . . 
                        . f c f 1 1 2 f . . . . . . . . 
                        f c c c f 1 1 2 f f f f f f f f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 f f f f f f f f 
                        . f c f 1 1 2 f . . . f 1 f . . 
                        . f c f 1 2 f . . . . f 1 f . . 
                        . . f f f f . . . . . f 1 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        f f f f f f f f f f f f f f f f 
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
                        f f f f f f f f f f f f f f f f 
                        . . . . . . . . . . f 7 7 f . . 
                        . . . . . . . . . . . f 7 7 f . 
                        . . . . . . . . . . . . f 7 7 f 
                        . . . . . . . . . . . . . f f . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else if (p1weapon == 2) {
                otherSprite.setKind(SpriteKind.orangeShotgun)
                otherSprite.setImage(assets.image`myImage5`)
            } else if (p1weapon == 4) {
                otherSprite.setKind(SpriteKind.meatballCannon)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ..fffff.............
                    .fcfeeef............
                    fcccfeeeffffffffffff
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeffffffffffef
                    .fcfeeef.f.fef...fef
                    ..fffff..fffef...fef
                    ...........fef...fff
                    ...........fff......
                    ....................
                    ....................
                    `)
            } else if (p1weapon == 5) {
                otherSprite.setKind(SpriteKind.sword)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . f . . . 
                        . . . . . . . . . . . f d f . . 
                        . . . . . . . . . . f d d d f . 
                        . . . . . . . . . f d d d d d f 
                        . . . . . . . . f d d d d d f . 
                        . . . . . . . f d d d d d f . . 
                        . . . . . . f d d d d d f . . . 
                        . . . . . f d d d d d f . . . . 
                        . . . . f d d d d d f . . . . . 
                        . . . f d d d d d f . . . . . . 
                        . . . f d d d d f . . . . . . . 
                        . . . f d d d f . . . . . . . . 
                        . . f f f f f . . . . . . . . . 
                        . f e f . . . . . . . . . . . . 
                        f e f . . . . . . . . . . . . . 
                        . f . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . f f f 
                        . . . . . . . . . . . . f 9 9 f 
                        . . . . . . . . . . . f 9 8 9 f 
                        . . . . . . . . . . f 9 8 9 f . 
                        . . . . . . . . . f 9 8 9 f . . 
                        . . . . . . . . f 9 8 9 f . . . 
                        f . . . . . . f 9 8 9 f . . . . 
                        f f . . . . f 9 8 9 f . . . . . 
                        f e f . . f 9 8 9 f . . . . . . 
                        f e e f f 9 8 9 f . . . . . . . 
                        . f e e f 8 9 f . . . . . . . . 
                        . . f e e f f . . . . . . . . . 
                        . . f f e e f . . . . . . . . . 
                        . f e f f e e f . . . . . . . . 
                        f e f . . f e e f . . . . . . . 
                        . f . . . . f f f f . . . . . . 
                        `)
                }
            } else if (p1weapon == 6) {
                otherSprite.setKind(SpriteKind.blueberrySMG)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ffffffffffffffffffff
                    f888888888888888888f
                    ffffffffffffffffff8f
                    .....f8f.f88f....f8f
                    .....f8f..f88f...f8f
                    .....f8f...f88f..f8f
                    .....fff....fff..fff
                    ....................
                    ....................
                    ....................
                    `)
            }
            p1weapon = 3
            p1_weapon_pickup_cooldown()
        }
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.blueberrySMG, function (sprite, otherSprite) {
    if (p2weaponPickupCooldown == false) {
        if (controller.player2.isPressed(ControllerButton.B)) {
            if (p2weapon == 1) {
                otherSprite.setKind(SpriteKind.peaShooter)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 1 2 f . . . . . . . . . 
                        . f c f 1 1 2 f . . . . . . . . 
                        f c c c f 1 1 2 f f f f f f f f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 f f f f f f f f 
                        . f c f 1 1 2 f . . . f 1 f . . 
                        . f c f 1 2 f . . . . f 1 f . . 
                        . . f f f f . . . . . f 1 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        f f f f f f f f f f f f f f f f 
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
                        f f f f f f f f f f f f f f f f 
                        . . . . . . . . . . f 7 7 f . . 
                        . . . . . . . . . . . f 7 7 f . 
                        . . . . . . . . . . . . f 7 7 f 
                        . . . . . . . . . . . . . f f . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else if (p2weapon == 2) {
                otherSprite.setKind(SpriteKind.orangeShotgun)
                otherSprite.setImage(assets.image`myImage5`)
            } else if (p2weapon == 3) {
                otherSprite.setKind(SpriteKind.grapeSniper)
                otherSprite.setImage(assets.image`myImage3`)
            } else if (p2weapon == 4) {
                otherSprite.setKind(SpriteKind.meatballCannon)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ..fffff.............
                    .fcfeeef............
                    fcccfeeeffffffffffff
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeeeeeeeeeeeef
                    fcccfeeeffffffffffef
                    .fcfeeef.f.fef...fef
                    ..fffff..fffef...fef
                    ...........fef...fff
                    ...........fff......
                    ....................
                    ....................
                    `)
            } else if (p2weapon == 5) {
                otherSprite.setKind(SpriteKind.sword)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . f . . . 
                        . . . . . . . . . . . f d f . . 
                        . . . . . . . . . . f d d d f . 
                        . . . . . . . . . f d d d d d f 
                        . . . . . . . . f d d d d d f . 
                        . . . . . . . f d d d d d f . . 
                        . . . . . . f d d d d d f . . . 
                        . . . . . f d d d d d f . . . . 
                        . . . . f d d d d d f . . . . . 
                        . . . f d d d d d f . . . . . . 
                        . . . f d d d d f . . . . . . . 
                        . . . f d d d f . . . . . . . . 
                        . . f f f f f . . . . . . . . . 
                        . f e f . . . . . . . . . . . . 
                        f e f . . . . . . . . . . . . . 
                        . f . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . f f f 
                        . . . . . . . . . . . . f 9 9 f 
                        . . . . . . . . . . . f 9 8 9 f 
                        . . . . . . . . . . f 9 8 9 f . 
                        . . . . . . . . . f 9 8 9 f . . 
                        . . . . . . . . f 9 8 9 f . . . 
                        f . . . . . . f 9 8 9 f . . . . 
                        f f . . . . f 9 8 9 f . . . . . 
                        f e f . . f 9 8 9 f . . . . . . 
                        f e e f f 9 8 9 f . . . . . . . 
                        . f e e f 8 9 f . . . . . . . . 
                        . . f e e f f . . . . . . . . . 
                        . . f f e e f . . . . . . . . . 
                        . f e f f e e f . . . . . . . . 
                        f e f . . f e e f . . . . . . . 
                        . f . . . . f f f f . . . . . . 
                        `)
                }
            }
            p2weapon = 6
            p2_weapon_pickup_cooldown()
        }
    }
})
sprites.onOverlap(SpriteKind.player1, SpriteKind.meatballCannon, function (sprite, otherSprite) {
    if (p1weaponPickupCooldown == false) {
        if (controller.player1.isPressed(ControllerButton.B)) {
            if (p1weapon == 1) {
                otherSprite.setKind(SpriteKind.peaShooter)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . f f f f . . . . . . . . . . 
                        . f c f 1 2 f . . . . . . . . . 
                        . f c f 1 1 2 f . . . . . . . . 
                        f c c c f 1 1 2 f f f f f f f f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 2 1 1 1 1 1 1 f 
                        f c c c f 1 1 2 f f f f f f f f 
                        . f c f 1 1 2 f . . . f 1 f . . 
                        . f c f 1 2 f . . . . f 1 f . . 
                        . . f f f f . . . . . f 1 f . . 
                        . . . . . . . . . . . f f f . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        f f f f f f f f f f f f f f f f 
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
                        f f f f f f f f f f f f f f f f 
                        . . . . . . . . . . f 7 7 f . . 
                        . . . . . . . . . . . f 7 7 f . 
                        . . . . . . . . . . . . f 7 7 f 
                        . . . . . . . . . . . . . f f . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            } else if (p1weapon == 2) {
                otherSprite.setKind(SpriteKind.orangeShotgun)
                otherSprite.setImage(assets.image`myImage5`)
            } else if (p1weapon == 3) {
                otherSprite.setKind(SpriteKind.grapeSniper)
                otherSprite.setImage(assets.image`myImage3`)
            } else if (p1weapon == 5) {
                otherSprite.setKind(SpriteKind.sword)
                if (baseballMap == true) {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . f . . . 
                        . . . . . . . . . . . f d f . . 
                        . . . . . . . . . . f d d d f . 
                        . . . . . . . . . f d d d d d f 
                        . . . . . . . . f d d d d d f . 
                        . . . . . . . f d d d d d f . . 
                        . . . . . . f d d d d d f . . . 
                        . . . . . f d d d d d f . . . . 
                        . . . . f d d d d d f . . . . . 
                        . . . f d d d d d f . . . . . . 
                        . . . f d d d d f . . . . . . . 
                        . . . f d d d f . . . . . . . . 
                        . . f f f f f . . . . . . . . . 
                        . f e f . . . . . . . . . . . . 
                        f e f . . . . . . . . . . . . . 
                        . f . . . . . . . . . . . . . . 
                        `)
                } else {
                    otherSprite.setImage(img`
                        . . . . . . . . . . . . . f f f 
                        . . . . . . . . . . . . f 9 9 f 
                        . . . . . . . . . . . f 9 8 9 f 
                        . . . . . . . . . . f 9 8 9 f . 
                        . . . . . . . . . f 9 8 9 f . . 
                        . . . . . . . . f 9 8 9 f . . . 
                        f . . . . . . f 9 8 9 f . . . . 
                        f f . . . . f 9 8 9 f . . . . . 
                        f e f . . f 9 8 9 f . . . . . . 
                        f e e f f 9 8 9 f . . . . . . . 
                        . f e e f 8 9 f . . . . . . . . 
                        . . f e e f f . . . . . . . . . 
                        . . f f e e f . . . . . . . . . 
                        . f e f f e e f . . . . . . . . 
                        f e f . . f e e f . . . . . . . 
                        . f . . . . f f f f . . . . . . 
                        `)
                }
            } else if (p1weapon == 6) {
                otherSprite.setKind(SpriteKind.blueberrySMG)
                otherSprite.setImage(img`
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ffffffffffffffffffff
                    f888888888888888888f
                    ffffffffffffffffff8f
                    .....f8f.f88f....f8f
                    .....f8f..f88f...f8f
                    .....f8f...f88f..f8f
                    .....fff....fff..fff
                    ....................
                    ....................
                    ....................
                    `)
            }
            p1weapon = 4
            p1_weapon_pickup_cooldown()
        }
    }
})
scene.onOverlapTile(SpriteKind.p2projectile, sprites.dungeon.floorDark2, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (loadingScreen == false) {
        if (p1objectHold == false) {
            if (sloppy == true) {
                p1projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . b d b c . . . . . 
                    . . . . b b c 2 2 2 c b b . . . 
                    . . . . b 2 2 2 4 2 2 2 b . . . 
                    . . . c c 2 2 2 4 2 2 2 c c . . 
                    . . b b 2 2 2 4 5 4 2 2 2 b b . 
                    . . d d 2 4 4 5 5 5 4 4 2 d d . 
                    . . b b 2 2 2 4 5 4 2 2 2 b b . 
                    . . . c c 2 2 2 4 2 2 2 c c . . 
                    . . . . b 2 2 2 4 2 2 2 b . . . 
                    . . . . b b c 2 2 2 c b b . . . 
                    . . . . . . c b d b c . . . . . 
                    . . . . . . . b d b . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p1projectile)
            } else if (p1inVehicle == true) {
                if (p1projectileUpdown == true) {
                    p1projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 8 8 . . . . . . . 
                        . . . . . . 8 9 9 8 . . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . 8 9 1 1 9 8 . . . . . 
                        . . . . . . 8 9 9 8 . . . . . . 
                        . . . . . . . 8 8 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p1projectile)
                } else {
                    p1projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                        . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
                        . 8 9 1 1 1 1 1 1 1 1 1 1 9 8 . 
                        . 8 9 1 1 1 1 1 1 1 1 1 1 9 8 . 
                        . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
                        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p1projectile)
                }
            } else if (rockets == true) {
                p1projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . f f f e e e f f f . . . 
                    . . . . f e e e e e e e f . . . 
                    . . . f f e e e d e e e f f . . 
                    . . f f e e e d d d e e e f f . 
                    . . f f e e d d d d d e e f f . 
                    . . f f e e e d d d e e e f f . 
                    . . . f f e e e d e e e f f . . 
                    . . . . f e e e e e e e f . . . 
                    . . . . f f f e e e f f f . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p1projectile)
            } else if (p1weapon == 2) {
                p1_shotgun_behavior()
            } else if (p1weapon == 3) {
                p1_sniper_behavior()
            } else if (p1weapon == 4) {
                p1_rocket_behavior()
            } else if (p1weapon == 5) {
                p1_sword_behavior()
            } else if (p1weapon == 6) {
            	
            } else {
                if (baseballMap == true) {
                    p1projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . f 2 1 f . . . . . . 
                        . . . . . f 2 2 1 1 f . . . . . 
                        . . . . . f 1 1 2 2 f . . . . . 
                        . . . . . . f 1 2 f . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p1projectile)
                } else {
                    p1projectile2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . f 7 7 f . . . . . . 
                        . . . . . . f 7 7 f . . . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.p1projectile)
                }
            }
            if (_67map == true) {
                p1projectile2.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f . f f f . . . . . 
                    . . . . f . . . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . f . f . . . f . . . . . 
                    . . . . f f f . . . f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
            if (p1weapon == 1 || p1inVehicle == true) {
                spriteutils.placeAngleFrom(
                p1projectile2,
                0,
                0,
                player12
                )
                p1projectile2.setVelocity(p1projectileX, p1projectileY)
            }
            if (p1weaponReload == false) {
                music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.player1, SpriteKind.p2vehicle, function (sprite, otherSprite) {
    if (otherSprite.vx != 0) {
        info.player1.changeLifeBy(-5)
    } else if (otherSprite.vy != 0) {
        info.player1.changeLifeBy(-5)
    }
})
scene.onOverlapTile(SpriteKind.player1, sprites.dungeon.hazardLava1, function (sprite, location) {
    if (p1respawning == false) {
        info.player1.changeLifeBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.p2projectile, sprites.dungeon.floorLight2, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
})
scene.onOverlapTile(SpriteKind.player2, sprites.castle.tilePath8, function (sprite, location) {
    tiles.placeOnRandomTile(player22, sprites.castle.tilePath2)
    player22.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        player22.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
scene.onOverlapTile(SpriteKind.p2projectile, sprites.castle.tileGrass3, function (sprite, location) {
    if (sloppy == true) {
        tiles.setTileAt(location, assets.tile`myTile12`)
    }
})
scene.onOverlapTile(SpriteKind.player1, assets.tile`myTile11`, function (sprite, location) {
    controller.player1.moveSprite(player12, 70, 80)
})
scene.onOverlapTile(SpriteKind.p2projectile, sprites.castle.tilePath8, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, sprites.castle.tilePath2)
    sprite.setFlag(SpriteFlag.GhostThroughTiles, true)
    timer.after(1000, function () {
        sprite.setFlag(SpriteFlag.GhostThroughTiles, false)
    })
})
sprites.onOverlap(SpriteKind.p2projectile, SpriteKind.door, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
function p2_weapon_pickup_cooldown () {
    p2weaponPickupCooldown = true
    timer.after(1000, function () {
        p2weaponPickupCooldown = false
    })
}
sprites.onOverlap(SpriteKind.player2, SpriteKind.oddball, function (sprite, otherSprite) {
    if (p2inVehical == false) {
        if (p1objectHold == false) {
            theOddball.follow(player22, 80)
            p2objectHold = true
            controller.player2.moveSprite(player22, 80, 80)
        }
    }
})
sprites.onOverlap(SpriteKind.player1, SpriteKind.oddball, function (sprite, otherSprite) {
    if (p1inVehicle == false) {
        if (p2objectHold == false) {
            theOddball.follow(player12, 80)
            p1objectHold = true
            controller.player1.moveSprite(player12, 80, 80)
        }
    }
})
function p2_rocket_behavior () {
    if (p2weaponReload == false) {
        if (_67map == true) {
            p2projectile2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f . f f f . . . . . 
                . . . . f . . . . . f . . . . . 
                . . . . f f f . . . f . . . . . 
                . . . . f . f . . . f . . . . . 
                . . . . f f f . . . f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.p2projectile)
        } else {
            p2projectile2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . f f f f f . . . . . 
                . . . . f f f e e e f f f . . . 
                . . . . f e e e e e e e f . . . 
                . . . f f e e e d e e e f f . . 
                . . f f e e e d d d e e e f f . 
                . . f f e e d d d d d e e f f . 
                . . f f e e e d d d e e e f f . 
                . . . f f e e e d e e e f f . . 
                . . . . f e e e e e e e f . . . 
                . . . . f f f e e e f f f . . . 
                . . . . . . f f f f f . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.p2projectile)
        }
        spriteutils.placeAngleFrom(
        p2projectile2,
        0,
        0,
        player22
        )
        if (p2directionFacing == 1) {
            p2projectile2.setVelocity(0, -100)
        } else if (p2directionFacing == 2) {
            p2projectile2.setVelocity(-100, 0)
        } else if (p2directionFacing == 3) {
            p2projectile2.setVelocity(0, 100)
        } else if (p2directionFacing == 4) {
            p2projectile2.setVelocity(100, 0)
        }
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        p2weaponReload = true
        timer.after(1000, function () {
            p2weaponReload = false
        })
    }
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (rockets == true) {
        p1projectileX = -100
        p1projectileY = 0
    } else {
        p1projectileX = -200
        p1projectileY = 0
    }
    if (p1inVehicle == true) {
        player12.setImage(img`
            ..........fffffffffffffffffff....................
            ........ffccaaaaaaaaaaaaaaaaaf.........ffffff....
            ......ffcccaaaaaaaaaaaaaaaaaaaf.......fdcf3aaf...
            .....fcccaa33333333333333333aaf.......fdcf3aaaf..
            ....fccaa33333333333333333333aaf.....fdbcf3aaaf..
            ...fcca3333333333333333333333aaf.....fdbccf3aaaf.
            ..fcca33113333333333333333333aaf.....fdbccf3aaaf.
            .fcca33311333333333333333333aaf......fdbccf3aaaf.
            .fca3333333aaaaaaaaaaaaaaaaaaaf.....fdbbccf3aaaaf
            fcca333aaaaaaaaaaaaaaaaaaaaaaf.....ffdbccf3aaaaaf
            fcaaaaaaaccffffffaaaaaaaaaaaaffffffbbbbccf3aaaaaf
            fcaaaaaacffccaaa3faaaaaaaaaaafcccbbbbbbcf3aaaaaaf
            fcaaaaacfcccaaaa33faaaaaaaaaafcccccccccf3aaaaaacf
            fcaaaacfccaaaaaa33faaaaaaaaaa3fffffffff3aaaaaacf.
            fcaaacfccaaaaaaa33faaaaaaaaaaa333333333aaaaaacf..
            fcaaacfccaaaaaaa33faaaaaaaaaaaaaaaaaaaaaaccccf...
            fcaaacfccaaaaaa33faaaaaaaccccccccccccccccffff....
            .faaaafccaaaaa33ffcccccccffffffffffffffff........
            ..faaafccaaaa33ffffffffff........................
            ...ffffccaaa33f..................................
            .......fcaa33f...................................
            ........fa33f....................................
            .........fff.....................................
            `)
    }
    p1projectileUpdown = false
    p1directionFacing = 2
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (rockets == true) {
        p1projectileX = 0
        p1projectileY = 100
    } else {
        p1projectileX = 0
        p1projectileY = 200
    }
    p1projectileUpdown = true
    p1directionFacing = 3
})
scene.onOverlapTile(SpriteKind.player1, assets.tile`myTile12`, function (sprite, location) {
    controller.player1.moveSprite(player12, 70, 70)
})
/**
 * 1=pea shooter
 * 
 * 2=shotgun
 * 
 * 3=sniper
 * 
 * 4=meatball launcher
 * 
 * 5=sword
 */
let p1respawning = false
let p2respawning = false
let p2directionFacing = 0
let p1projectileUpdown = false
let p1projectileY = 0
let p1projectileX = 0
let p1weapon = 0
let grapeSMG: Sprite = null
let orangeShotgun: Sprite = null
let grapeSniper: Sprite = null
let peaShooter: Sprite = null
let meatballCannon: Sprite = null
let sword: Sprite = null
let p1inVehicle = false
let p1weaponPickupCooldown = false
let p2projectileY = 0
let p2projectileX = 0
let p2weaponReload = false
let p2projectileUpdown = false
let p2projectile2: Sprite = null
let p2inVehical = false
let p1directionFacing = 0
let p1projectile2: Sprite = null
let p1weaponReload = false
let p1objectHold = false
let p2weapon = 0
let p2weaponPickupCooldown = false
let theOddball: Sprite = null
let blueFlag2: Sprite = null
let redFlag2: Sprite = null
let door: Sprite = null
let p2objectHold = false
let p1flagHol = false
let p2title: StatusBarSprite = null
let p1title: StatusBarSprite = null
let player2name = ""
let player1name = ""
let scoreToWin = 0
let p2character = 0
let player22: Sprite = null
let p2playerSelect: miniMenu.MenuSprite = null
let p1character = 0
let player12: Sprite = null
let cameraTarget: Sprite = null
let p1playerSelect: miniMenu.MenuSprite = null
let ghost: Sprite = null
let baseballMap = false
let _67map = false
let mapSelect: miniMenu.MenuSprite = null
let rockets = false
let Oddball = false
let sloppy = false
let CTF = false
let slayer = false
let modeSelect: miniMenu.MenuSprite = null
let loadingScreen = false
let player2imageArray: Image[] = []
let player1imageArray: Image[] = []
let _67: Sprite = null
namespace userconfig {
export const ARCADE_SCREEN_WIDTH=200
export const ARCADE_SCREEN_HEIGHT=150
}
player1imageArray = []
player2imageArray = []
game.setDialogTextColor(15)
loadingScreen = true
let mainMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Start Game")
)
mainMenu.setFrame(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b411144444444b444441115b44e.
    .e6bb41ff444444444444441ffbb44e.
    eb66b41ff4bb444444444441ff4444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `)
mainMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    mainMenu.close()
    modeSelect = miniMenu.createMenu(
    miniMenu.createMenuItem("Slayer"),
    miniMenu.createMenuItem("CTF"),
    miniMenu.createMenuItem("Sloppy CTF"),
    miniMenu.createMenuItem("Oddball"),
    miniMenu.createMenuItem("Classic Rockets"),
    miniMenu.createMenuItem("CTF Rockets"),
    miniMenu.createMenuItem("Oddball Rockets")
    )
    modeSelect.setFrame(img`
        ...........ccccc66666...........
        ........ccc4444444444666........
        ......cc444444444bb4444466......
        .....cb4444bb4444b5b444444b.....
        ....eb4444b5b44444b44444444b....
        ...ebb44444b4444444444b444446...
        ..eb6bb444444444bb444b5b444446..
        ..e6bb5b44444444b5b444b44bb44e..
        .e66b411144444444b444441115b44e.
        .e6bb41ff444444444444441ffbb44e.
        eb66b41ff4bb444444444441ff4444be
        eb66bb444b5b44444444bb44444444be
        fb666b444bb444444444b5b4444444bf
        fcb666b44444444444444bb444444bcf
        .fbb6666b44444444444444444444bf.
        .efbb66666bb4444444444444444bfe.
        .86fcbb66666bbb44444444444bcc688
        8772effcbbbbbbbbbbbbbbbbcfc22778
        87722222cccccccccccccccc22226678
        f866622222222222222222222276686f
        fef866677766667777776667777fffef
        fbff877768f86777777666776fffffbf
        fbeffeefffeff7766688effeeeefeb6f
        f6bfffeffeeeeeeeeeeeeefeeeeebb6e
        f66ddfffffeeeffeffeeeeeffeedb46e
        .c66ddd4effffffeeeeeffff4ddb46e.
        .fc6b4dddddddddddddddddddb444ee.
        ..ff6bb444444444444444444444ee..
        ....ffbbbb4444444444444444ee....
        ......ffebbbbbb44444444eee......
        .........fffffffcccccee.........
        ................................
        `)
    modeSelect.onButtonPressed(controller.A, function (selection, selectedIndex) {
        modeSelect.close()
        slayer = false
        CTF = false
        sloppy = false
        Oddball = false
        if (selectedIndex == 0) {
            slayer = true
        } else if (selectedIndex == 1) {
            CTF = true
        } else if (selectedIndex == 2) {
            sloppy = true
            CTF = true
        } else if (selectedIndex == 3) {
            Oddball = true
        } else if (selectedIndex == 4) {
            rockets = true
            slayer = true
        } else if (selectedIndex == 5) {
            rockets = true
            CTF = true
        } else if (selectedIndex == 6) {
            rockets = true
            Oddball = true
        }
        mapSelect = miniMenu.createMenu(
        miniMenu.createMenuItem("Pyramid (small)"),
        miniMenu.createMenuItem("Pyramid (large)"),
        miniMenu.createMenuItem("Battle Creek"),
        miniMenu.createMenuItem("50/50"),
        miniMenu.createMenuItem("Sword VS. Sword"),
        miniMenu.createMenuItem("Blood Gulch"),
        miniMenu.createMenuItem("4 Corners"),
        miniMenu.createMenuItem("Snipers Canyon"),
        miniMenu.createMenuItem("67"),
        miniMenu.createMenuItem("Baseball Field")
        )
        mapSelect.setFrame(img`
            ...........ccccc66666...........
            ........ccc4444444444666........
            ......cc444444444bb4444466......
            .....cb4444bb4444b5b444444b.....
            ....eb4444b5b44444b44444444b....
            ...ebb44444b4444444444b444446...
            ..eb6bb444444444bb444b5b444446..
            ..e6bb5b44444444b5b444b44bb44e..
            .e66b411144444444b444441115b44e.
            .e6bb41ff444444444444441ffbb44e.
            eb66b41ff4bb444444444441ff4444be
            eb66bb444b5b44444444bb44444444be
            fb666b444bb444444444b5b4444444bf
            fcb666b44444444444444bb444444bcf
            .fbb6666b44444444444444444444bf.
            .efbb66666bb4444444444444444bfe.
            .86fcbb66666bbb44444444444bcc688
            8772effcbbbbbbbbbbbbbbbbcfc22778
            87722222cccccccccccccccc22226678
            f866622222222222222222222276686f
            fef866677766667777776667777fffef
            fbff877768f86777777666776fffffbf
            fbeffeefffeff7766688effeeeefeb6f
            f6bfffeffeeeeeeeeeeeeefeeeeebb6e
            f66ddfffffeeeffeffeeeeeffeedb46e
            .c66ddd4effffffeeeeeffff4ddb46e.
            .fc6b4dddddddddddddddddddb444ee.
            ..ff6bb444444444444444444444ee..
            ....ffbbbb4444444444444444ee....
            ......ffebbbbbb44444444eee......
            .........fffffffcccccee.........
            ................................
            `)
        mapSelect.onButtonPressed(controller.A, function (selection, selectedIndex) {
            mapSelect.close()
            if (selectedIndex == 0) {
                tiles.setCurrentTilemap(tilemap`level0`)
            } else if (selectedIndex == 1) {
                tiles.setCurrentTilemap(tilemap`level4`)
            } else if (selectedIndex == 2) {
                tiles.setCurrentTilemap(tilemap`level7`)
                music.play(music.createSong(hex`003c000408100200001c00010a006400f401640000040000000000000000000000000005000004d40100004000021118400060000211187000b000021118b000b400021118b400b800021118b800bc00021118bc00c000021118c000c400021118c400c800021118c800cc00021118cc00d000021118d000d200021118d200d400021118d400e000021118e000e200021118e200e400021118e400f000021118f000f200021118f200f400021118f400000102111800010201021118020104010211180401080102111808010a010211180a010c010211180c01100102111810011201021118120114010211181401200102111820012201021118220124010211182401300102111830013201021118320134010211183401400102111840014201021118420144010211184401480102111848014a010211184a014c010211184c01500102111850015201021118520154010211185401580102111858015a010211185a015c010211185c01600102111860016201021118620164010211186401680102111868016a010211186a016c010211186c01700102111870017201021118720174010211187401780102111878017a010211187a017c010211187c01800102111880018201021118820184010211188401880102111888018a010211188a018c010211188c0190010211189001e001021118e001e801010503001c0001dc00690000045e0100040000000000000000000005640001040003780100000c00011d0c001000019f10001400012014001800019f18001c0001221c002000012020002800019f28003800011d38003c0001243c00400001a64000480001274800500001a65000540001225400580001a658006200012464006800011868007000011b70007400011d74007800012078007c0001227c008800019f88008c00011d8c009400012094009800019f9800a000011da000a800011ba800d000011dd800e000011de800f000019ff800000101200401080101220a010c0101220c010e0101200e011001019f12012001011d28013001019f3801400101204401480101224a014c0101224c014e0101204e015001019f52015801011d5c015e01021d9f64016601021d206a016c0101226c016e0101206e017001019f72017801011d7c017e01021d9f84018601021d208a018c0101228c018e0101208e019001019f92019801011db401b801011bb801bc01011dbc01c0010120c001c4010122c401cc01019fcc01d401011dd401d801011bd801e801011d`), music.PlaybackMode.LoopingInBackground)
            } else if (selectedIndex == 3) {
                tiles.setCurrentTilemap(tilemap`level8`)
            } else if (selectedIndex == 4) {
                tiles.setCurrentTilemap(tilemap`level9`)
            } else if (selectedIndex == 5) {
                tiles.setCurrentTilemap(tilemap`level10`)
                music.play(music.createSong(hex`003c000408100200001c00010a006400f401640000040000000000000000000000000005000004d40100004000021118400060000211187000b000021118b000b400021118b400b800021118b800bc00021118bc00c000021118c000c400021118c400c800021118c800cc00021118cc00d000021118d000d200021118d200d400021118d400e000021118e000e200021118e200e400021118e400f000021118f000f200021118f200f400021118f400000102111800010201021118020104010211180401080102111808010a010211180a010c010211180c01100102111810011201021118120114010211181401200102111820012201021118220124010211182401300102111830013201021118320134010211183401400102111840014201021118420144010211184401480102111848014a010211184a014c010211184c01500102111850015201021118520154010211185401580102111858015a010211185a015c010211185c01600102111860016201021118620164010211186401680102111868016a010211186a016c010211186c01700102111870017201021118720174010211187401780102111878017a010211187a017c010211187c01800102111880018201021118820184010211188401880102111888018a010211188a018c010211188c0190010211189001e001021118e001e801010503001c0001dc00690000045e0100040000000000000000000005640001040003780100000c00011d0c001000019f10001400012014001800019f18001c0001221c002000012020002800019f28003800011d38003c0001243c00400001a64000480001274800500001a65000540001225400580001a658006200012464006800011868007000011b70007400011d74007800012078007c0001227c008800019f88008c00011d8c009400012094009800019f9800a000011da000a800011ba800d000011dd800e000011de800f000019ff800000101200401080101220a010c0101220c010e0101200e011001019f12012001011d28013001019f3801400101204401480101224a014c0101224c014e0101204e015001019f52015801011d5c015e01021d9f64016601021d206a016c0101226c016e0101206e017001019f72017801011d7c017e01021d9f84018601021d208a018c0101228c018e0101208e019001019f92019801011db401b801011bb801bc01011dbc01c0010120c001c4010122c401cc01019fcc01d401011dd401d801011bd801e801011d`), music.PlaybackMode.LoopingInBackground)
            } else if (selectedIndex == 6) {
                tiles.setCurrentTilemap(tilemap`level11`)
            } else if (selectedIndex == 7) {
                tiles.setCurrentTilemap(tilemap`level12`)
            } else if (selectedIndex == 8) {
                _67map = true
                tiles.setCurrentTilemap(tilemap`level13`)
                for (let index = 0; index < 20; index++) {
                    _67 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . f f f . f f f . . . . . 
                        . . . . f . . . . . f . . . . . 
                        . . . . f f f . . . f . . . . . 
                        . . . . f . f . . . f . . . . . 
                        . . . . f f f . . . f . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.sixSeven)
                    if (Math.percentChance(50)) {
                        tiles.placeOnRandomTile(_67, assets.tile`myTile23`)
                    } else {
                        tiles.placeOnRandomTile(_67, assets.tile`myTile24`)
                    }
                    _67.setVelocity(50, 50)
                    _67.setBounceOnWall(true)
                }
            } else if (selectedIndex == 9) {
                tiles.setCurrentTilemap(tilemap`level14`)
                baseballMap = true
            }
            if (sloppy == false) {
                if (rockets == false) {
                    weapon_spawn()
                }
            }
            for (let value of tiles.getTilesByType(sprites.dungeon.floorDarkDiamond)) {
                ghost = sprites.create(img`
                    ..........fffffffffffffffffff....................
                    ........ffccaaaaaaaaaaaaaaaaaf.........ffffff....
                    ......ffcccaaaaaaaaaaaaaaaaaaaf.......fdcf3aaf...
                    .....fcccaa33333333333333333aaf.......fdcf3aaaf..
                    ....fccaa33333333333333333333aaf.....fdbcff3aaf..
                    ...fcca3333333333333333333333aaf.....fdbccf3aaaf.
                    ..fcca33113333333333333333333aaf.....fdbccf3aaaf.
                    .fcca33311333333333333333333aaf......fdbccf3aaaf.
                    .fca3333333aaaaaaaaaaaaaaaaaaaf.....fdbbccf3aaaaf
                    fcca333aaaaaaaaaaaaaaaaaaaaaaf.....ffdbccf3aaaaaf
                    fcaaaaaaaccffffffaaaaaaaaaaaaffffffbbbbccf3aaaaaf
                    fcaaaaaacffccaaa3faaaaaaaaaaafcccbbbbbbcf3aaaaaaf
                    fcaaaaacfcccaaaa33faaaaaaaaaafcccccccccf3aaaaaacf
                    fcaaaacfccaaaaaa33faaaaaaaaaa3fffffffff3aaaaaacf.
                    fcaaacfccaaaaaaa33faaaaaaaaaaa333333333aaaaaacf..
                    fcaaacfccaaaaaaa33faaaaaaaaaaaaaaaaaaaaaaccccf...
                    fcaaacfccaaaaaa33faaaaaaaccccccccccccccccffff....
                    .faaaafccaaaaa33ffcccccccffffffffffffffff........
                    ..faaafccaaaa33ffffffffff........................
                    ...ffffccaaa33f..................................
                    .......fcaa33f...................................
                    ........fa33f....................................
                    .........fff.....................................
                    `, SpriteKind.vehicle)
                tiles.placeOnTile(ghost, value)
                tiles.setTileAt(value, assets.tile`myTile13`)
            }
            p1playerSelect = miniMenu.createMenu(
            miniMenu.createMenuItem("", img`
                . . . . c c c b b b b b . . . . 
                . . c c b 4 4 4 4 4 4 b b b . . 
                . c c 4 4 4 4 4 5 4 4 4 4 b c . 
                . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
                e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
                e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
                e b b 1 1 4 4 4 4 4 4 1 1 4 b e 
                . e b 1 f 4 4 4 5 4 4 1 f b e . 
                8 7 e e b 4 4 4 4 4 4 b e e 6 8 
                8 7 2 e e e e e e e e e e 2 7 8 
                e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
                e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
                e b e 8 8 c c 8 8 c c c 8 e b e 
                e e b e c c e e e e e c e b e e 
                . e e b b 4 4 4 4 4 4 4 4 e e . 
                . . . c c c c c e e e e e . . . 
                `),
            miniMenu.createMenuItem("", img`
                . . . . . . b b b b a a . . . . 
                . . . . b b d d d 3 3 3 a a . . 
                . . . b d d d 3 3 3 3 3 3 a a . 
                . . b d 1 1 3 3 3 3 3 1 1 3 a . 
                . b 3 d 1 f 3 3 3 b 3 1 f 3 a b 
                . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
                b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
                b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
                b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
                a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
                a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
                a a 3 3 3 d d d a a 4 4 4 e e . 
                . e a a a a a a 4 4 4 4 e e . . 
                . . e e b b 4 4 4 4 b e e . . . 
                . . . e e e e e e e e . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("", img`
                . . . . . . . e c 7 . . . . . . 
                . . . . e e e c 7 7 e e . . . . 
                . . c e e e e c 7 e 2 2 e e . . 
                . c e e e e e c 6 e e 2 2 2 e . 
                . c e 1 1 2 e c c 2 4 1 1 2 e . 
                c e e 1 f 2 2 2 2 2 4 1 f 2 2 e 
                c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
                . e e e 2 2 2 2 2 2 2 2 2 4 e . 
                . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
                . . 2 e e 2 2 2 2 2 4 4 2 e . . 
                . . . 2 2 e e 4 4 4 2 e e . . . 
                . . . . . 2 2 e e e e . . . . . 
                `),
            miniMenu.createMenuItem("", img`
                4 4 4 . . 4 4 4 4 4 . . . . . . 
                4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
                b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
                . b 5 5 5 5 1 1 5 5 5 5 5 4 . . 
                . b d 1 1 5 5 5 5 5 5 1 1 5 4 . 
                b 4 5 1 f 5 5 5 5 5 5 1 f 5 4 . 
                c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
                c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
                c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
                . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
                . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
                . . c 4 4 d 4 4 4 4 4 d d 5 d c 
                . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
                . . . . c c b 4 4 4 b b 4 5 4 4 
                . . . . . . c c c c c c b b 4 . 
                `),
            miniMenu.createMenuItem("", img`
                . . 2 2 b b b b b . . . . . . . 
                . 2 b 4 4 4 4 4 4 b . . . . . . 
                2 2 1 1 4 4 d d 1 1 b . . . . . 
                2 b 1 f 4 4 4 4 1 f b . . . . . 
                2 b 4 4 4 4 4 4 4 d 4 b . . . . 
                2 b 4 4 4 4 4 4 4 4 4 b . . . . 
                2 b 4 4 4 4 4 4 4 4 4 e . . . . 
                2 2 b 4 4 4 4 4 4 4 b e . . . . 
                . 2 b b b 4 4 4 b b b e . . . . 
                . . e b b b b b b b e e . . . . 
                . . . e e b 4 4 b e e e b . . . 
                . . . . . e e e e e e b d b b . 
                . . . . . . . . . . . b 1 1 1 b 
                . . . . . . . . . . . c 1 d d b 
                . . . . . . . . . . . c 1 b c . 
                . . . . . . . . . . . . c c . . 
                `),
            miniMenu.createMenuItem("", img`
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . 2 2 3 3 3 3 2 e . . . . 
                . . . 2 3 d 1 1 d d 3 2 e . . . 
                . . 2 3 1 1 3 3 3 1 1 3 e . . . 
                . 2 3 3 1 f 3 3 3 1 f 3 b e . . 
                . 2 1 d 3 3 3 3 d 3 3 3 3 b b . 
                2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
                2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
                2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
                2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
                e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
                e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
                e 3 d 3 3 1 d d 3 d 1 b b e e . 
                . e 3 1 1 d d 1 1 1 b b e e e . 
                . . e 3 3 3 3 3 3 b e e e e . . 
                . . . e e e e e e e e e e . . . 
                `),
            miniMenu.createMenuItem("", img`
                . . . . . . b b b b . . . . . . 
                . . . . . . b 4 4 4 b . . . . . 
                . . . . . . b b 4 4 4 b . . . . 
                . . . . . b 4 b b b 4 4 b . . . 
                . . . . b d 1 1 5 4 b 1 1 b . . 
                . . . . b 3 1 f 5 5 4 1 f 4 b . 
                . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                . . . b 5 3 2 3 5 5 5 5 e e e e 
                . . b d 7 5 5 5 3 2 3 5 5 e e e 
                . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                b d 3 2 d 5 5 5 d d d 4 4 . . . 
                b 5 5 5 5 d d 4 4 4 4 . . . . . 
                4 d d d 4 4 4 . . . . . . . . . 
                4 4 4 4 . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("", img`
                . . . . . . . . . . b b b . . . 
                . . . . . . . . b e e 3 3 b . . 
                . . . . . . b b e 3 2 e 3 a . . 
                . . . . b b 1 1 e 2 2 e 1 1 a . 
                . . b b 3 3 1 f 3 e e 3 1 f a . 
                b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                b 3 3 3 d d d d 3 3 3 3 3 d d a 
                b b b b b b b 3 d d d d d d 3 a 
                b d 5 5 5 5 d b b b a a a a a a 
                b 3 d d 5 5 5 5 5 5 5 d d d d a 
                b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                b b b 3 d 5 5 5 5 5 5 5 d d b a 
                . . . b b b 3 d 5 5 5 5 d d 3 a 
                . . . . . . b b b b 3 d d d b a 
                . . . . . . . . . . b b b a a . 
                `),
            miniMenu.createMenuItem("", img`
                . . . . . 3 3 b 3 3 d d 3 3 . . 
                . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
                . . . 3 d d d 1 d 1 1 d d 3 1 3 
                . . 3 d d 1 1 d d d d 1 1 3 3 3 
                . 3 1 1 d 1 f d 1 d d 1 f b . . 
                . 3 1 1 1 d d 1 1 1 1 d d 1 3 . 
                . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
                . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
                . 4 4 d 1 1 1 1 1 1 d d d b b . 
                . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
                4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
                4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
                4 5 5 d 5 5 d b b b d d 3 . . . 
                4 5 5 5 d d d d 4 4 b 3 . . . . 
                . 4 5 5 5 4 4 4 . . . . . . . . 
                . . 4 4 4 . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("", img`
                . . . . . . . 6 . . . . . . . . 
                . . . . . . 8 6 6 . . . 6 8 . . 
                . . . e e e 8 8 6 6 . 6 7 8 . . 
                . . e 2 2 2 2 e 8 6 6 7 6 . . . 
                . e 2 2 1 1 2 7 7 7 1 1 8 6 . . 
                . e 2 4 1 f 6 7 7 7 1 f 6 8 8 . 
                e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
                e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
                e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
                e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
                e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
                e 2 2 2 2 2 2 2 4 e 2 e e c . . 
                e e 2 e 2 2 4 2 2 e e e c . . . 
                e e e e 2 e 2 2 e e e c . . . . 
                e e e 2 e e c e c c c . . . . . 
                . c c c c c c c . . . . . . . . 
                `),
            miniMenu.createMenuItem("", img`
                . . . . . . . . . . . 6 6 6 6 6 
                . . . . . . . . . 6 6 7 7 7 7 8 
                . . . . . . 8 8 8 7 7 8 8 6 8 8 
                . . e e e e c 6 6 8 8 . 8 7 8 . 
                . e 1 1 4 2 1 1 8 . . . 6 7 8 . 
                e 2 1 f 2 2 1 f c . . . 6 7 8 . 
                e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
                e 2 e e 2 2 2 2 e e e e c 6 8 . 
                c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
                . c 2 e e e 2 e 2 4 2 2 2 2 c . 
                . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
                . . . e c c e c 2 2 2 2 2 2 2 e 
                . . . . . . . c 2 e e 2 2 e 2 c 
                . . . . . . . c e e e e e e 2 c 
                . . . . . . . . c e 2 2 2 2 c . 
                . . . . . . . . . c c c c c . . 
                `),
            miniMenu.createMenuItem("", img`
                . . . . . . . e e e e . . . . . 
                . . . . . e e 4 5 5 5 e e . . . 
                . . . . e 4 5 6 2 2 7 6 6 e . . 
                . . . e 5 1 1 7 2 2 6 1 1 4 e . 
                . . e 5 2 1 f 6 6 4 5 1 f 5 4 . 
                . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                e 5 e c 5 4 5 4 5 5 5 e e . . . 
                e 5 e e 5 5 5 5 5 4 e . . . . . 
                4 5 4 e 5 5 5 5 e e . . . . . . 
                . 4 5 4 5 5 4 e . . . . . . . . 
                . . 4 4 e e e . . . . . . . . . 
                `)
            )
            p1playerSelect.setTitle("Player 1, please select a character.")
            p1playerSelect.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 3)
            p1playerSelect.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 5)
            p1playerSelect.setFlag(SpriteFlag.RelativeToCamera, true)
            p1playerSelect.setPosition(80, 60)
            cameraTarget = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.cameraTarget)
            scene.cameraFollowSprite(cameraTarget)
            cameraTarget.setVelocity(100, 100)
            cameraTarget.setBounceOnWall(true)
            cameraTarget.setFlag(SpriteFlag.Invisible, true)
            p1playerSelect.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Border, 1)
            p1playerSelect.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 15)
            p1playerSelect.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.IconOnly, 1)
            p1playerSelect.onButtonPressed(controller.A, function (selection, selectedIndex) {
                p1playerSelect.close()
                if (selectedIndex == 0) {
                    player12 = sprites.create(img`
                        . . . . c c c b b b b b . . . . 
                        . . c c b 4 4 4 4 4 4 b b b . . 
                        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
                        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
                        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
                        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
                        e b b 1 1 4 4 4 4 4 4 1 1 4 b e 
                        . e b 1 f 4 4 4 5 4 4 1 f b e . 
                        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
                        8 7 2 e e e e e e e e e e 2 7 8 
                        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
                        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
                        e b e 8 8 c c 8 8 c c c 8 e b e 
                        e e b e c c e e e e e c e b e e 
                        . e e b b 4 4 4 4 4 4 4 4 e e . 
                        . . . c c c c c e e e e e . . . 
                        `, SpriteKind.player1)
                    p1character = 0
                } else if (selectedIndex == 1) {
                    player12 = sprites.create(img`
                        . . . . . . b b b b a a . . . . 
                        . . . . b b d d d 3 3 3 a a . . 
                        . . . b d d d 3 3 3 3 3 3 a a . 
                        . . b d 1 1 3 3 3 3 3 1 1 3 a . 
                        . b 3 d 1 f 3 3 3 b 3 1 f 3 a b 
                        . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
                        b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
                        b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
                        b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
                        a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
                        a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
                        a a 3 3 3 d d d a a 4 4 4 e e . 
                        . e a a a a a a 4 4 4 4 e e . . 
                        . . e e b b 4 4 4 4 b e e . . . 
                        . . . e e e e e e e e . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.player1)
                    p1character = 1
                } else if (selectedIndex == 2) {
                    player12 = sprites.create(img`
                        . . . . . . . e c 7 . . . . . . 
                        . . . . e e e c 7 7 e e . . . . 
                        . . c e e e e c 7 e 2 2 e e . . 
                        . c e e e e e c 6 e e 2 2 2 e . 
                        . c e 1 1 2 e c c 2 4 1 1 2 e . 
                        c e e 1 f 2 2 2 2 2 4 1 f 2 2 e 
                        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
                        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
                        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
                        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
                        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
                        . . . 2 2 e e 4 4 4 2 e e . . . 
                        . . . . . 2 2 e e e e . . . . . 
                        `, SpriteKind.player1)
                    p1character = 2
                } else if (selectedIndex == 3) {
                    player12 = sprites.create(img`
                        4 4 4 . . 4 4 4 4 4 . . . . . . 
                        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
                        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
                        . b 5 5 5 5 1 1 5 5 5 5 5 4 . . 
                        . b d 1 1 5 5 5 5 5 5 1 1 5 4 . 
                        b 4 5 1 f 5 5 5 5 5 5 1 f 5 4 . 
                        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
                        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
                        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
                        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
                        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
                        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
                        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
                        . . . . c c b 4 4 4 b b 4 5 4 4 
                        . . . . . . c c c c c c b b 4 . 
                        `, SpriteKind.player1)
                    p1character = 3
                } else if (selectedIndex == 4) {
                    player12 = sprites.create(img`
                        . . 2 2 b b b b b . . . . . . . 
                        . 2 b 4 4 4 4 4 4 b . . . . . . 
                        2 2 1 1 4 4 d d 1 1 b . . . . . 
                        2 b 1 f 4 4 4 4 1 f b . . . . . 
                        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
                        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
                        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
                        2 2 b 4 4 4 4 4 4 4 b e . . . . 
                        . 2 b b b 4 4 4 b b b e . . . . 
                        . . e b b b b b b b e e . . . . 
                        . . . e e b 4 4 b e e e b . . . 
                        . . . . . e e e e e e b d b b . 
                        . . . . . . . . . . . b 1 1 1 b 
                        . . . . . . . . . . . c 1 d d b 
                        . . . . . . . . . . . c 1 b c . 
                        . . . . . . . . . . . . c c . . 
                        `, SpriteKind.player1)
                    p1character = 4
                } else if (selectedIndex == 5) {
                    player12 = sprites.create(img`
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . 2 2 3 3 3 3 2 e . . . . 
                        . . . 2 3 d 1 1 d d 3 2 e . . . 
                        . . 2 3 1 1 3 3 3 1 1 3 e . . . 
                        . 2 3 3 1 f 3 3 3 1 f 3 b e . . 
                        . 2 1 d 3 3 3 3 d 3 3 3 3 b b . 
                        2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
                        2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
                        2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
                        2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
                        e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
                        e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
                        e 3 d 3 3 1 d d 3 d 1 b b e e . 
                        . e 3 1 1 d d 1 1 1 b b e e e . 
                        . . e 3 3 3 3 3 3 b e e e e . . 
                        . . . e e e e e e e e e e . . . 
                        `, SpriteKind.player1)
                    p1character = 5
                } else if (selectedIndex == 6) {
                    player12 = sprites.create(img`
                        . . . . . . b b b b . . . . . . 
                        . . . . . . b 4 4 4 b . . . . . 
                        . . . . . . b b 4 4 4 b . . . . 
                        . . . . . b 4 b b b 4 4 b . . . 
                        . . . . b d 1 1 5 4 b 1 1 b . . 
                        . . . . b 3 1 f 5 5 4 1 f 4 b . 
                        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                        . . . b 5 3 2 3 5 5 5 5 e e e e 
                        . . b d 7 5 5 5 3 2 3 5 5 e e e 
                        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                        b d 3 2 d 5 5 5 d d d 4 4 . . . 
                        b 5 5 5 5 d d 4 4 4 4 . . . . . 
                        4 d d d 4 4 4 . . . . . . . . . 
                        4 4 4 4 . . . . . . . . . . . . 
                        `, SpriteKind.player1)
                    p1character = 6
                } else if (selectedIndex == 7) {
                    player12 = sprites.create(img`
                        . . . . . . . . . . b b b . . . 
                        . . . . . . . . b e e 3 3 b . . 
                        . . . . . . b b e 3 2 e 3 a . . 
                        . . . . b b 1 1 e 2 2 e 1 1 a . 
                        . . b b 3 3 1 f 3 e e 3 1 f a . 
                        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                        b 3 3 3 d d d d 3 3 3 3 3 d d a 
                        b b b b b b b 3 d d d d d d 3 a 
                        b d 5 5 5 5 d b b b a a a a a a 
                        b 3 d d 5 5 5 5 5 5 5 d d d d a 
                        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                        b b b 3 d 5 5 5 5 5 5 5 d d b a 
                        . . . b b b 3 d 5 5 5 5 d d 3 a 
                        . . . . . . b b b b 3 d d d b a 
                        . . . . . . . . . . b b b a a . 
                        `, SpriteKind.player1)
                    p1character = 7
                } else if (selectedIndex == 8) {
                    player12 = sprites.create(img`
                        . . . . . 3 3 b 3 3 d d 3 3 . . 
                        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
                        . . . 3 d d d 1 d 1 1 d d 3 1 3 
                        . . 3 d d 1 1 d d d d 1 1 3 3 3 
                        . 3 1 1 d 1 f d 1 d d 1 f b . . 
                        . 3 1 1 1 d d 1 1 1 1 d d 1 3 . 
                        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
                        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
                        . 4 4 d 1 1 1 1 1 1 d d d b b . 
                        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
                        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
                        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
                        4 5 5 d 5 5 d b b b d d 3 . . . 
                        4 5 5 5 d d d d 4 4 b 3 . . . . 
                        . 4 5 5 5 4 4 4 . . . . . . . . 
                        . . 4 4 4 . . . . . . . . . . . 
                        `, SpriteKind.player1)
                    p1character = 8
                } else if (selectedIndex == 9) {
                    player12 = sprites.create(img`
                        . . . . . . . 6 . . . . . . . . 
                        . . . . . . 8 6 6 . . . 6 8 . . 
                        . . . e e e 8 8 6 6 . 6 7 8 . . 
                        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
                        . e 2 2 1 1 2 7 7 7 1 1 8 6 . . 
                        . e 2 4 1 f 6 7 7 7 1 f 6 8 8 . 
                        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
                        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
                        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
                        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
                        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
                        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
                        e e 2 e 2 2 4 2 2 e e e c . . . 
                        e e e e 2 e 2 2 e e e c . . . . 
                        e e e 2 e e c e c c c . . . . . 
                        . c c c c c c c . . . . . . . . 
                        `, SpriteKind.player1)
                    p1character = 9
                } else if (selectedIndex == 10) {
                    player12 = sprites.create(img`
                        . . . . . . . . . . . 6 6 6 6 6 
                        . . . . . . . . . 6 6 7 7 7 7 8 
                        . . . . . . 8 8 8 7 7 8 8 6 8 8 
                        . . e e e e c 6 6 8 8 . 8 7 8 . 
                        . e 1 1 4 2 1 1 8 . . . 6 7 8 . 
                        e 2 1 f 2 2 1 f c . . . 6 7 8 . 
                        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
                        e 2 e e 2 2 2 2 e e e e c 6 8 . 
                        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
                        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
                        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
                        . . . e c c e c 2 2 2 2 2 2 2 e 
                        . . . . . . . c 2 e e 2 2 e 2 c 
                        . . . . . . . c e e e e e e 2 c 
                        . . . . . . . . c e 2 2 2 2 c . 
                        . . . . . . . . . c c c c c . . 
                        `, SpriteKind.player1)
                    p1character = 10
                } else if (selectedIndex == 11) {
                    player12 = sprites.create(img`
                        . . . . . . . e e e e . . . . . 
                        . . . . . e e 4 5 5 5 e e . . . 
                        . . . . e 4 5 6 2 2 7 6 6 e . . 
                        . . . e 5 1 1 7 2 2 6 1 1 4 e . 
                        . . e 5 2 1 f 6 6 4 5 1 f 5 4 . 
                        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                        e 5 e c 5 4 5 4 5 5 5 e e . . . 
                        e 5 e e 5 5 5 5 5 4 e . . . . . 
                        4 5 4 e 5 5 5 5 e e . . . . . . 
                        . 4 5 4 5 5 4 e . . . . . . . . 
                        . . 4 4 e e e . . . . . . . . . 
                        `, SpriteKind.player1)
                    p1character = 11
                }
                player12.setPosition(164, 125)
                p2playerSelect = miniMenu.createMenu(
                miniMenu.createMenuItem("", img`
                    . . . . c c c b b b b b . . . . 
                    . . c c b 4 4 4 4 4 4 b b b . . 
                    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
                    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
                    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
                    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
                    e b b 1 1 4 4 4 4 4 4 1 1 4 b e 
                    . e b 1 f 4 4 4 5 4 4 1 f b e . 
                    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
                    8 7 2 e e e e e e e e e e 2 7 8 
                    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
                    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
                    e b e 8 8 c c 8 8 c c c 8 e b e 
                    e e b e c c e e e e e c e b e e 
                    . e e b b 4 4 4 4 4 4 4 4 e e . 
                    . . . c c c c c e e e e e . . . 
                    `),
                miniMenu.createMenuItem("", img`
                    . . . . . . b b b b a a . . . . 
                    . . . . b b d d d 3 3 3 a a . . 
                    . . . b d d d 3 3 3 3 3 3 a a . 
                    . . b d 1 1 3 3 3 3 3 1 1 3 a . 
                    . b 3 d 1 f 3 3 3 b 3 1 f 3 a b 
                    . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
                    b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
                    b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
                    b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
                    a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
                    a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
                    a a 3 3 3 d d d a a 4 4 4 e e . 
                    . e a a a a a a 4 4 4 4 e e . . 
                    . . e e b b 4 4 4 4 b e e . . . 
                    . . . e e e e e e e e . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `),
                miniMenu.createMenuItem("", img`
                    . . . . . . . e c 7 . . . . . . 
                    . . . . e e e c 7 7 e e . . . . 
                    . . c e e e e c 7 e 2 2 e e . . 
                    . c e e e e e c 6 e e 2 2 2 e . 
                    . c e 1 1 2 e c c 2 4 1 1 2 e . 
                    c e e 1 f 2 2 2 2 2 4 1 f 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
                    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
                    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
                    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
                    . . . 2 2 e e 4 4 4 2 e e . . . 
                    . . . . . 2 2 e e e e . . . . . 
                    `),
                miniMenu.createMenuItem("", img`
                    4 4 4 . . 4 4 4 4 4 . . . . . . 
                    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
                    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
                    . b 5 5 5 5 1 1 5 5 5 5 5 4 . . 
                    . b d 1 1 5 5 5 5 5 5 1 1 5 4 . 
                    b 4 5 1 f 5 5 5 5 5 5 1 f 5 4 . 
                    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
                    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
                    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
                    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
                    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
                    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
                    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
                    . . . . c c b 4 4 4 b b 4 5 4 4 
                    . . . . . . c c c c c c b b 4 . 
                    `),
                miniMenu.createMenuItem("", img`
                    . . 2 2 b b b b b . . . . . . . 
                    . 2 b 4 4 4 4 4 4 b . . . . . . 
                    2 2 1 1 4 4 d d 1 1 b . . . . . 
                    2 b 1 f 4 4 4 4 1 f b . . . . . 
                    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
                    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
                    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
                    2 2 b 4 4 4 4 4 4 4 b e . . . . 
                    . 2 b b b 4 4 4 b b b e . . . . 
                    . . e b b b b b b b e e . . . . 
                    . . . e e b 4 4 b e e e b . . . 
                    . . . . . e e e e e e b d b b . 
                    . . . . . . . . . . . b 1 1 1 b 
                    . . . . . . . . . . . c 1 d d b 
                    . . . . . . . . . . . c 1 b c . 
                    . . . . . . . . . . . . c c . . 
                    `),
                miniMenu.createMenuItem("", img`
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . 2 2 3 3 3 3 2 e . . . . 
                    . . . 2 3 d 1 1 d d 3 2 e . . . 
                    . . 2 3 1 1 3 3 3 1 1 3 e . . . 
                    . 2 3 3 1 f 3 3 3 1 f 3 b e . . 
                    . 2 1 d 3 3 3 3 d 3 3 3 3 b b . 
                    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
                    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
                    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
                    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
                    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
                    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
                    e 3 d 3 3 1 d d 3 d 1 b b e e . 
                    . e 3 1 1 d d 1 1 1 b b e e e . 
                    . . e 3 3 3 3 3 3 b e e e e . . 
                    . . . e e e e e e e e e e . . . 
                    `),
                miniMenu.createMenuItem("", img`
                    . . . . . . b b b b . . . . . . 
                    . . . . . . b 4 4 4 b . . . . . 
                    . . . . . . b b 4 4 4 b . . . . 
                    . . . . . b 4 b b b 4 4 b . . . 
                    . . . . b d 1 1 5 4 b 1 1 b . . 
                    . . . . b 3 1 f 5 5 4 1 f 4 b . 
                    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                    . . . b 5 3 2 3 5 5 5 5 e e e e 
                    . . b d 7 5 5 5 3 2 3 5 5 e e e 
                    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                    b d 3 2 d 5 5 5 d d d 4 4 . . . 
                    b 5 5 5 5 d d 4 4 4 4 . . . . . 
                    4 d d d 4 4 4 . . . . . . . . . 
                    4 4 4 4 . . . . . . . . . . . . 
                    `),
                miniMenu.createMenuItem("", img`
                    . . . . . . . . . . b b b . . . 
                    . . . . . . . . b e e 3 3 b . . 
                    . . . . . . b b e 3 2 e 3 a . . 
                    . . . . b b 1 1 e 2 2 e 1 1 a . 
                    . . b b 3 3 1 f 3 e e 3 1 f a . 
                    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                    b 3 3 3 d d d d 3 3 3 3 3 d d a 
                    b b b b b b b 3 d d d d d d 3 a 
                    b d 5 5 5 5 d b b b a a a a a a 
                    b 3 d d 5 5 5 5 5 5 5 d d d d a 
                    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                    b b b 3 d 5 5 5 5 5 5 5 d d b a 
                    . . . b b b 3 d 5 5 5 5 d d 3 a 
                    . . . . . . b b b b 3 d d d b a 
                    . . . . . . . . . . b b b a a . 
                    `),
                miniMenu.createMenuItem("", img`
                    . . . . . 3 3 b 3 3 d d 3 3 . . 
                    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
                    . . . 3 d d d 1 d 1 1 d d 3 1 3 
                    . . 3 d d 1 1 d d d d 1 1 3 3 3 
                    . 3 1 1 d 1 f d 1 d d 1 f b . . 
                    . 3 1 1 1 d d 1 1 1 1 d d 1 3 . 
                    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
                    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
                    . 4 4 d 1 1 1 1 1 1 d d d b b . 
                    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
                    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
                    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
                    4 5 5 d 5 5 d b b b d d 3 . . . 
                    4 5 5 5 d d d d 4 4 b 3 . . . . 
                    . 4 5 5 5 4 4 4 . . . . . . . . 
                    . . 4 4 4 . . . . . . . . . . . 
                    `),
                miniMenu.createMenuItem("", img`
                    . . . . . . . 6 . . . . . . . . 
                    . . . . . . 8 6 6 . . . 6 8 . . 
                    . . . e e e 8 8 6 6 . 6 7 8 . . 
                    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
                    . e 2 2 1 1 2 7 7 7 1 1 8 6 . . 
                    . e 2 4 1 f 6 7 7 7 1 f 6 8 8 . 
                    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
                    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
                    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
                    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
                    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
                    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
                    e e 2 e 2 2 4 2 2 e e e c . . . 
                    e e e e 2 e 2 2 e e e c . . . . 
                    e e e 2 e e c e c c c . . . . . 
                    . c c c c c c c . . . . . . . . 
                    `),
                miniMenu.createMenuItem("", img`
                    . . . . . . . . . . . 6 6 6 6 6 
                    . . . . . . . . . 6 6 7 7 7 7 8 
                    . . . . . . 8 8 8 7 7 8 8 6 8 8 
                    . . e e e e c 6 6 8 8 . 8 7 8 . 
                    . e 1 1 4 2 1 1 8 . . . 6 7 8 . 
                    e 2 1 f 2 2 1 f c . . . 6 7 8 . 
                    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
                    e 2 e e 2 2 2 2 e e e e c 6 8 . 
                    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
                    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
                    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
                    . . . e c c e c 2 2 2 2 2 2 2 e 
                    . . . . . . . c 2 e e 2 2 e 2 c 
                    . . . . . . . c e e e e e e 2 c 
                    . . . . . . . . c e 2 2 2 2 c . 
                    . . . . . . . . . c c c c c . . 
                    `),
                miniMenu.createMenuItem("", img`
                    . . . . . . . e e e e . . . . . 
                    . . . . . e e 4 5 5 5 e e . . . 
                    . . . . e 4 5 6 2 2 7 6 6 e . . 
                    . . . e 5 1 1 7 2 2 6 1 1 4 e . 
                    . . e 5 2 1 f 6 6 4 5 1 f 5 4 . 
                    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                    e 5 e c 5 4 5 4 5 5 5 e e . . . 
                    e 5 e e 5 5 5 5 5 4 e . . . . . 
                    4 5 4 e 5 5 5 5 e e . . . . . . 
                    . 4 5 4 5 5 4 e . . . . . . . . 
                    . . 4 4 e e e . . . . . . . . . 
                    `)
                )
                p2playerSelect.setTitle("Player 2, please select a character.")
                p2playerSelect.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 3)
                p2playerSelect.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 5)
                p2playerSelect.setFlag(SpriteFlag.RelativeToCamera, true)
                p2playerSelect.setPosition(80, 60)
                p2playerSelect.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Border, 1)
                p2playerSelect.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 15)
                p2playerSelect.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.IconOnly, 1)
                p2playerSelect.onButtonPressed(controller.A, function (selection, selectedIndex) {
                    p2playerSelect.close()
                    if (selectedIndex == 0) {
                        player22 = sprites.create(img`
                            . . . . c c c b b b b b . . . . 
                            . . c c b 4 4 4 4 4 4 b b b . . 
                            . c c 4 4 4 4 4 5 4 4 4 4 b c . 
                            . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
                            e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
                            e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
                            e b b 1 1 4 4 4 4 4 4 1 1 4 b e 
                            . e b 1 f 4 4 4 5 4 4 1 f b e . 
                            8 7 e e b 4 4 4 4 4 4 b e e 6 8 
                            8 7 2 e e e e e e e e e e 2 7 8 
                            e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
                            e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
                            e b e 8 8 c c 8 8 c c c 8 e b e 
                            e e b e c c e e e e e c e b e e 
                            . e e b b 4 4 4 4 4 4 4 4 e e . 
                            . . . c c c c c e e e e e . . . 
                            `, SpriteKind.player2)
                        p2character = 0
                    } else if (selectedIndex == 1) {
                        player22 = sprites.create(img`
                            . . . . . . b b b b a a . . . . 
                            . . . . b b d d d 3 3 3 a a . . 
                            . . . b d d d 3 3 3 3 3 3 a a . 
                            . . b d 1 1 3 3 3 3 3 1 1 3 a . 
                            . b 3 d 1 f 3 3 3 b 3 1 f 3 a b 
                            . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
                            b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
                            b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
                            b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
                            a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
                            a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
                            a a 3 3 3 d d d a a 4 4 4 e e . 
                            . e a a a a a a 4 4 4 4 e e . . 
                            . . e e b b 4 4 4 4 b e e . . . 
                            . . . e e e e e e e e . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, SpriteKind.player2)
                        p2character = 1
                    } else if (selectedIndex == 2) {
                        player22 = sprites.create(img`
                            . . . . . . . e c 7 . . . . . . 
                            . . . . e e e c 7 7 e e . . . . 
                            . . c e e e e c 7 e 2 2 e e . . 
                            . c e e e e e c 6 e e 2 2 2 e . 
                            . c e 1 1 2 e c c 2 4 1 1 2 e . 
                            c e e 1 f 2 2 2 2 2 4 1 f 2 2 e 
                            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
                            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
                            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
                            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
                            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
                            . . . 2 2 e e 4 4 4 2 e e . . . 
                            . . . . . 2 2 e e e e . . . . . 
                            `, SpriteKind.player2)
                        p2character = 2
                    } else if (selectedIndex == 3) {
                        player22 = sprites.create(img`
                            4 4 4 . . 4 4 4 4 4 . . . . . . 
                            4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
                            b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
                            . b 5 5 5 5 1 1 5 5 5 5 5 4 . . 
                            . b d 1 1 5 5 5 5 5 5 1 1 5 4 . 
                            b 4 5 1 f 5 5 5 5 5 5 1 f 5 4 . 
                            c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                            c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
                            c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
                            c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
                            . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
                            . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
                            . . c 4 4 d 4 4 4 4 4 d d 5 d c 
                            . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
                            . . . . c c b 4 4 4 b b 4 5 4 4 
                            . . . . . . c c c c c c b b 4 . 
                            `, SpriteKind.player2)
                        p2character = 3
                    } else if (selectedIndex == 4) {
                        player22 = sprites.create(img`
                            . . 2 2 b b b b b . . . . . . . 
                            . 2 b 4 4 4 4 4 4 b . . . . . . 
                            2 2 1 1 4 4 d d 1 1 b . . . . . 
                            2 b 1 f 4 4 4 4 1 f b . . . . . 
                            2 b 4 4 4 4 4 4 4 d 4 b . . . . 
                            2 b 4 4 4 4 4 4 4 4 4 b . . . . 
                            2 b 4 4 4 4 4 4 4 4 4 e . . . . 
                            2 2 b 4 4 4 4 4 4 4 b e . . . . 
                            . 2 b b b 4 4 4 b b b e . . . . 
                            . . e b b b b b b b e e . . . . 
                            . . . e e b 4 4 b e e e b . . . 
                            . . . . . e e e e e e b d b b . 
                            . . . . . . . . . . . b 1 1 1 b 
                            . . . . . . . . . . . c 1 d d b 
                            . . . . . . . . . . . c 1 b c . 
                            . . . . . . . . . . . . c c . . 
                            `, SpriteKind.player2)
                        p2character = 4
                    } else if (selectedIndex == 5) {
                        player22 = sprites.create(img`
                            . . . . . . 2 2 2 2 . . . . . . 
                            . . . . 2 2 3 3 3 3 2 e . . . . 
                            . . . 2 3 d 1 1 d d 3 2 e . . . 
                            . . 2 3 1 1 3 3 3 1 1 3 e . . . 
                            . 2 3 3 1 f 3 3 3 1 f 3 b e . . 
                            . 2 1 d 3 3 3 3 d 3 3 3 3 b b . 
                            2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
                            2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
                            2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
                            2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
                            e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
                            e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
                            e 3 d 3 3 1 d d 3 d 1 b b e e . 
                            . e 3 1 1 d d 1 1 1 b b e e e . 
                            . . e 3 3 3 3 3 3 b e e e e . . 
                            . . . e e e e e e e e e e . . . 
                            `, SpriteKind.player2)
                        p2character = 5
                    } else if (selectedIndex == 6) {
                        player22 = sprites.create(img`
                            . . . . . . b b b b . . . . . . 
                            . . . . . . b 4 4 4 b . . . . . 
                            . . . . . . b b 4 4 4 b . . . . 
                            . . . . . b 4 b b b 4 4 b . . . 
                            . . . . b d 1 1 5 4 b 1 1 b . . 
                            . . . . b 3 1 f 5 5 4 1 f 4 b . 
                            . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                            . . . b 5 3 2 3 5 5 5 5 e e e e 
                            . . b d 7 5 5 5 3 2 3 5 5 e e e 
                            . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                            . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                            . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                            b d 3 2 d 5 5 5 d d d 4 4 . . . 
                            b 5 5 5 5 d d 4 4 4 4 . . . . . 
                            4 d d d 4 4 4 . . . . . . . . . 
                            4 4 4 4 . . . . . . . . . . . . 
                            `, SpriteKind.player2)
                        p2character = 6
                    } else if (selectedIndex == 7) {
                        player22 = sprites.create(img`
                            . . . . . . . . . . b b b . . . 
                            . . . . . . . . b e e 3 3 b . . 
                            . . . . . . b b e 3 2 e 3 a . . 
                            . . . . b b 1 1 e 2 2 e 1 1 a . 
                            . . b b 3 3 1 f 3 e e 3 1 f a . 
                            b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                            b 3 3 3 d d d d 3 3 3 3 3 d d a 
                            b b b b b b b 3 d d d d d d 3 a 
                            b d 5 5 5 5 d b b b a a a a a a 
                            b 3 d d 5 5 5 5 5 5 5 d d d d a 
                            b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                            b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                            b b b 3 d 5 5 5 5 5 5 5 d d b a 
                            . . . b b b 3 d 5 5 5 5 d d 3 a 
                            . . . . . . b b b b 3 d d d b a 
                            . . . . . . . . . . b b b a a . 
                            `, SpriteKind.player2)
                        p2character = 7
                    } else if (selectedIndex == 8) {
                        player22 = sprites.create(img`
                            . . . . . 3 3 b 3 3 d d 3 3 . . 
                            . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
                            . . . 3 d d d 1 d 1 1 d d 3 1 3 
                            . . 3 d d 1 1 d d d d 1 1 3 3 3 
                            . 3 1 1 d 1 f d 1 d d 1 f b . . 
                            . 3 1 1 1 d d 1 1 1 1 d d 1 3 . 
                            . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
                            . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
                            . 4 4 d 1 1 1 1 1 1 d d d b b . 
                            . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
                            4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
                            4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
                            4 5 5 d 5 5 d b b b d d 3 . . . 
                            4 5 5 5 d d d d 4 4 b 3 . . . . 
                            . 4 5 5 5 4 4 4 . . . . . . . . 
                            . . 4 4 4 . . . . . . . . . . . 
                            `, SpriteKind.player2)
                        p2character = 8
                    } else if (selectedIndex == 9) {
                        player22 = sprites.create(img`
                            . . . . . . . 6 . . . . . . . . 
                            . . . . . . 8 6 6 . . . 6 8 . . 
                            . . . e e e 8 8 6 6 . 6 7 8 . . 
                            . . e 2 2 2 2 e 8 6 6 7 6 . . . 
                            . e 2 2 1 1 2 7 7 7 1 1 8 6 . . 
                            . e 2 4 1 f 6 7 7 7 1 f 6 8 8 . 
                            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
                            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
                            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
                            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
                            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
                            e 2 2 2 2 2 2 2 4 e 2 e e c . . 
                            e e 2 e 2 2 4 2 2 e e e c . . . 
                            e e e e 2 e 2 2 e e e c . . . . 
                            e e e 2 e e c e c c c . . . . . 
                            . c c c c c c c . . . . . . . . 
                            `, SpriteKind.player2)
                        p2character = 9
                    } else if (selectedIndex == 10) {
                        player22 = sprites.create(img`
                            . . . . . . . . . . . 6 6 6 6 6 
                            . . . . . . . . . 6 6 7 7 7 7 8 
                            . . . . . . 8 8 8 7 7 8 8 6 8 8 
                            . . e e e e c 6 6 8 8 . 8 7 8 . 
                            . e 1 1 4 2 1 1 8 . . . 6 7 8 . 
                            e 2 1 f 2 2 1 f c . . . 6 7 8 . 
                            e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
                            e 2 e e 2 2 2 2 e e e e c 6 8 . 
                            c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
                            . c 2 e e e 2 e 2 4 2 2 2 2 c . 
                            . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
                            . . . e c c e c 2 2 2 2 2 2 2 e 
                            . . . . . . . c 2 e e 2 2 e 2 c 
                            . . . . . . . c e e e e e e 2 c 
                            . . . . . . . . c e 2 2 2 2 c . 
                            . . . . . . . . . c c c c c . . 
                            `, SpriteKind.player2)
                        p2character = 10
                    } else if (selectedIndex == 11) {
                        player22 = sprites.create(img`
                            . . . . . . . e e e e . . . . . 
                            . . . . . e e 4 5 5 5 e e . . . 
                            . . . . e 4 5 6 2 2 7 6 6 e . . 
                            . . . e 5 1 1 7 2 2 6 1 1 4 e . 
                            . . e 5 2 1 f 6 6 4 5 1 f 5 4 . 
                            . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                            . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                            e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                            e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                            e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                            e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                            e 5 e c 5 4 5 4 5 5 5 e e . . . 
                            e 5 e e 5 5 5 5 5 4 e . . . . . 
                            4 5 4 e 5 5 5 5 e e . . . . . . 
                            . 4 5 4 5 5 4 e . . . . . . . . 
                            . . 4 4 e e e . . . . . . . . . 
                            `, SpriteKind.player2)
                        p2character = 11
                    }
                    player22.setPosition(163, 123)
                    scoreToWin = game.askForNumber("What do you want the score to win to be?", 3)
                    player1name = game.askForString("Player 1 what is your name?")
                    player2name = game.askForString("Player 2 what is your name?")
                    controller.player1.moveSprite(player12)
                    controller.player2.moveSprite(player22)
                    p1title = statusbars.create(0, 0, StatusBarKind.Health)
                    p2title = statusbars.create(0, 0, StatusBarKind.Health)
                    p1title.attachToSprite(player12)
                    p1title.setLabel(player1name, 15)
                    p2title.attachToSprite(player22)
                    p2title.setLabel(player2name, 15)
                    p1flagHol = false
                    p2objectHold = false
                    loadingScreen = false
                    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, player12)
                    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, player22)
                    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.HorizontalTopHalf)
                    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.HorizontalBottomHalf)
                    splitScreen.setBorderColor(15)
                    info.player1.setLife(5)
                    info.player2.setLife(5)
                    for (let value of tiles.getTilesByType(sprites.dungeon.doorOpenSouth)) {
                        door = sprites.create(assets.image`myImage`, SpriteKind.door)
                        tiles.placeOnTile(door, value)
                        tiles.setTileAt(value, assets.tile`transparency16`)
                    }
                    for (let value of tiles.getTilesByType(sprites.dungeon.doorOpenNorth)) {
                        door = sprites.create(assets.image`myImage0`, SpriteKind.door)
                        tiles.placeOnTile(door, value)
                        tiles.setTileAt(value, assets.tile`transparency16`)
                    }
                    for (let value of tiles.getTilesByType(sprites.dungeon.doorOpenWest)) {
                        door = sprites.create(assets.image`myImage2`, SpriteKind.door)
                        tiles.placeOnTile(door, value)
                        tiles.setTileAt(value, assets.tile`transparency16`)
                    }
                    for (let value of tiles.getTilesByType(sprites.dungeon.doorOpenEast)) {
                        door = sprites.create(assets.image`myImage1`, SpriteKind.door)
                        tiles.placeOnTile(door, value)
                        tiles.setTileAt(value, assets.tile`transparency16`)
                    }
                    if (CTF == true) {
                        redFlag2 = sprites.create(img`
                            . . . . . . . . . . . . . . . . 
                            . . f f f f f f f f f f f f f . 
                            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                            . . f f f f f f f f f f f f f . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            `, SpriteKind.redFlag)
                        blueFlag2 = sprites.create(img`
                            . . . . . . . . . . . . . . . . 
                            . . f f f f f f f f f f f f f . 
                            . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                            . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                            . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                            . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                            . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                            . . f f f f f f f f f f f f f . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            . . f . . . . . . . . . . . . . 
                            `, SpriteKind.blueFlag)
                        tiles.placeOnRandomTile(redFlag2, assets.tile`myTile4`)
                        tiles.placeOnRandomTile(blueFlag2, assets.tile`myTile5`)
                        tiles.placeOnRandomTile(player12, sprites.dungeon.floorMixed)
                        tiles.placeOnRandomTile(player22, assets.tile`myTile6`)
                        p1_weapon_setup()
                        p2_weapon_setup()
                    } else {
                        if (Math.percentChance(50)) {
                            tiles.placeOnRandomTile(player12, sprites.dungeon.floorMixed)
                        } else {
                            tiles.placeOnRandomTile(player12, assets.tile`myTile6`)
                        }
                        if (Math.percentChance(50)) {
                            tiles.placeOnRandomTile(player22, sprites.dungeon.floorMixed)
                        } else {
                            tiles.placeOnRandomTile(player22, assets.tile`myTile6`)
                        }
                        p1_weapon_setup()
                        p2_weapon_setup()
                    }
                    if (Oddball == true) {
                        theOddball = sprites.create(img`
                            . . . . f f f f . . . . 
                            . . f f 1 1 1 1 f f . . 
                            . f b 1 1 1 1 1 1 b f . 
                            . f 1 1 1 1 1 1 1 1 f . 
                            f d 1 1 1 1 1 1 1 1 d f 
                            f d 1 1 1 1 1 1 1 1 d f 
                            f d d d 1 1 1 1 d d d f 
                            f b d b f d d f b d b f 
                            f c d c f 1 1 f c d c f 
                            . f 1 1 1 1 1 1 1 b f . 
                            . . f c 1 b 1 1 d f . . 
                            . . . f b f b f f . . . 
                            . . . . f f f f . . . . 
                            `, SpriteKind.oddball)
                        if (Math.percentChance(50)) {
                            if (Math.percentChance(50)) {
                                tiles.placeOnRandomTile(theOddball, assets.tile`myTile5`)
                            } else {
                                tiles.placeOnRandomTile(theOddball, assets.tile`myTile4`)
                            }
                        } else {
                            if (Math.percentChance(50)) {
                                tiles.placeOnRandomTile(theOddball, assets.tile`myTile5`)
                            } else {
                                tiles.placeOnRandomTile(theOddball, assets.tile`myTile4`)
                            }
                        }
                        p1_weapon_setup()
                        p2_weapon_setup()
                    }
                })
            })
        })
    })
})
game.onUpdateInterval(1000, function () {
    if (Oddball == true) {
        if (p1objectHold == true) {
            info.player1.changeScoreBy(1)
            if (info.player1.score() == scoreToWin) {
                game.gameOver(true)
            }
        } else if (p2objectHold == true) {
            info.player2.changeScoreBy(1)
            if (info.player2.score() == scoreToWin) {
                game.gameOver(true)
            }
        }
    }
})
forever(function () {
    if (p1weaponPickupCooldown == false) {
        if (p1inVehicle == true) {
            controller.player1.moveSprite(player12, 175, 175)
            if (controller.player1.isPressed(ControllerButton.B)) {
                ghost = sprites.create(img`
                    ..........fffffffffffffffffff....................
                    ........ffccaaaaaaaaaaaaaaaaaf.........ffffff....
                    ......ffcccaaaaaaaaaaaaaaaaaaaf.......fdcf3aaf...
                    .....fcccaa33333333333333333aaf.......fdcf3aaaf..
                    ....fccaa33333333333333333333aaf.....fdbcf3aaaf..
                    ...fcca3333333333333333333333aaf.....fdbccf3aaaf.
                    ..fcca33113333333333333333333aaf.....fdbccf3aaaf.
                    .fcca33311333333333333333333aaf......fdbccf3aaaf.
                    .fca3333333aaaaaaaaaaaaaaaaaaaf.....fdbbccf3aaaaf
                    fcca333aaaaaaaaaaaaaaaaaaaaaaf.....ffdbccf3aaaaaf
                    fcaaaaaaaccffffffaaaaaaaaaaaaffffffbbbbccf3aaaaaf
                    fcaaaaaacffccaaa3faaaaaaaaaaafcccbbbbbbcf3aaaaaaf
                    fcaaaaacfcccaaaa33faaaaaaaaaafcccccccccf3aaaaaacf
                    fcaaaacfccaaaaaa33faaaaaaaaaa3fffffffff3aaaaaacf.
                    fcaaacfccaaaaaaa33faaaaaaaaaaa333333333aaaaaacf..
                    fcaaacfccaaaaaaa33faaaaaaaaaaaaaaaaaaaaaaccccf...
                    fcaaacfccaaaaaa33faaaaaaaccccccccccccccccffff....
                    .faaaafccaaaaa33ffcccccccffffffffffffffff........
                    ..faaafccaaaa33ffffffffff........................
                    ...ffffccaaa33f..................................
                    .......fcaa33f...................................
                    ........fa33f....................................
                    .........fff.....................................
                    `, SpriteKind.vehicle)
                ghost.setPosition(player12.x, player12.y)
                player12.setPosition(ghost.x, ghost.y + 16)
                player12.setImage(player1imageArray.shift())
                p1inVehicle = false
                player12.setKind(SpriteKind.player1)
                p1_weapon_pickup_cooldown()
            }
        }
    }
    if (p2inVehical == true) {
        controller.player2.moveSprite(player22, 175, 175)
        if (controller.player2.isPressed(ControllerButton.B)) {
            if (p2weaponPickupCooldown == false) {
                ghost = sprites.create(img`
                    ..........fffffffffffffffffff....................
                    ........ffccaaaaaaaaaaaaaaaaaf.........ffffff....
                    ......ffcccaaaaaaaaaaaaaaaaaaaf.......fdcf3aaf...
                    .....fcccaa33333333333333333aaf.......fdcf3aaaf..
                    ....fccaa33333333333333333333aaf.....fdbcf3aaaf..
                    ...fcca3333333333333333333333aaf.....fdbccf3aaaf.
                    ..fcca33113333333333333333333aaf.....fdbccf3aaaf.
                    .fcca33311333333333333333333aaf......fdbccf3aaaf.
                    .fca3333333aaaaaaaaaaaaaaaaaaaf.....fdbbccf3aaaaf
                    fcca333aaaaaaaaaaaaaaaaaaaaaaf.....ffdbccf3aaaaaf
                    fcaaaaaaaccffffffaaaaaaaaaaaaffffffbbbbccf3aaaaaf
                    fcaaaaaacffccaaa3faaaaaaaaaaafcccbbbbbbcf3aaaaaaf
                    fcaaaaacfcccaaaa33faaaaaaaaaafcccccccccf3aaaaaacf
                    fcaaaacfccaaaaaa33faaaaaaaaaa3fffffffff3aaaaaacf.
                    fcaaacfccaaaaaaa33faaaaaaaaaaa333333333aaaaaacf..
                    fcaaacfccaaaaaaa33faaaaaaaaaaaaaaaaaaaaaaccccf...
                    fcaaacfccaaaaaa33faaaaaaaccccccccccccccccffff....
                    .faaaafccaaaaa33ffcccccccffffffffffffffff........
                    ..faaafccaaaa33ffffffffff........................
                    ...ffffccaaa33f..................................
                    .......fcaa33f...................................
                    ........fa33f....................................
                    .........fff.....................................
                    `, SpriteKind.vehicle)
                ghost.setPosition(player22.x, player22.y)
                player22.setPosition(ghost.x, ghost.y + 16)
                player22.setImage(player2imageArray.shift())
                p2inVehical = false
                player22.setKind(SpriteKind.player2)
                p2_weapon_pickup_cooldown()
            }
        }
    }
})
game.onUpdateInterval(100, function () {
    if (p1inVehicle == false) {
        if (p1weapon == 6) {
            if (controller.player1.isPressed(ControllerButton.A) || controller.player1.isPressed(ControllerButton.B)) {
                p1projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . f 8 8 f . . . . . . 
                    . . . . . . f 8 8 f . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p1projectile)
                spriteutils.placeAngleFrom(
                p1projectile2,
                0,
                0,
                player12
                )
                p1projectile2.setVelocity(p1projectileX * 100, p1projectileY * 100)
            }
        }
    }
    if (p2inVehical == false) {
        if (p2weapon == 6) {
            if (controller.player2.isPressed(ControllerButton.A) || controller.player2.isPressed(ControllerButton.B)) {
                p2projectile2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . f 8 8 f . . . . . . 
                    . . . . . . f 8 8 f . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.p2projectile)
                spriteutils.placeAngleFrom(
                p2projectile2,
                0,
                0,
                player22
                )
                p2projectile2.setVelocity(p2projectileX * 100, p2projectileY * 100)
            }
        }
    }
})
