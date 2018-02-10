enemys_fcae963b_31c9_42b4_b48c_bb48d09f3f80 = 
{
        'greenSlime': {'name': '绿头怪', 'hp': 100, 'atk': 120, 'def': 0, 'money': 1, 'experience': 1, 'special': [1,5,7,8]},
        'redSlime': {'name': '红头怪', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'blackSlime': {'name': '青头怪', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'slimelord': {'name': '怪王', 'hp': 100, 'atk': 120, 'def': 0, 'money': 10, 'experience': 0, 'special': [1,9]},
        'bat': {'name': '小蝙蝠', 'hp': 100, 'atk': 120, 'def': 0, 'money': 2, 'experience': 0, 'special': 1},
        'bigBat': {'name': '大蝙蝠', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redBat': {'name': '红蝙蝠', 'hp': 100, 'atk': 120, 'def': 0, 'money': 5, 'experience': 0, 'special': 4},
        'vampire': {'name': '冥灵魔王', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeleton': {'name': '骷髅人', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeletonSoilder': {'name': '骷髅士兵', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeletonCaptain': {'name': '骷髅队长', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'ghostSkeleton': {'name': '冥队长', 'hp': 100, 'atk': 120, 'def': 0, 'money': 8, 'experience': 0, 'special': 7},
        'zombie': {'name': '兽人', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'zombieKnight': {'name': '兽人武士', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'rock': {'name': '石头人', 'hp': 100, 'atk': 120, 'def': 0, 'money': 4, 'experience': 0, 'special': 3},
        'slimeMan': {'name': '影子战士', 'hp': 100, 'atk': 0, 'def': 0, 'money': 11, 'experience': 0, 'special': [10,21], 'atkValue': 2, 'defValue': 3}, // 退化怪可以在后面写atkValue和defValue表示退化的数值
        'bluePriest': {'name': '初级法师', 'hp': 100, 'atk': 120, 'def': 0, 'money': 3, 'experience': 0, 'special': 2, 'point': 1}, // 'point'可以在打败怪物后进行加点，详见文档说明。
        'redPriest': {'name': '高级法师', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'brownWizard': {'name': '初级巫师', 'hp': 100, 'atk': 120, 'def': 0, 'money': 16, 'experience': 0, 'special': 15, 'value': 100, 'range': 2}, // 领域怪需要加value表示领域伤害的数值；range可选，代表领域伤害的范围；不加默认为1
        'redWizard': {'name': '高级巫师', 'hp': 1000, 'atk': 1200, 'def': 0, 'money': 160, 'experience': 0, 'special': 15, 'value': 200, 'zoneSquare': true}, // zoneSquare可选，代表是否九宫格伤害，true为是九宫格伤害，false或不设置为十字伤害
        'yellowGuard': {'name': '初级卫兵', 'hp': 100, 'atk': 120, 'def': 0, 'money': 10, 'experience': 0, 'special': 0},
        'blueGuard': {'name': '中级卫兵', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redGuard': {'name': '高级卫兵', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'swordsman': {'name': '双手剑士', 'hp': 100, 'atk': 120, 'def': 0, 'money': 6, 'experience': 0, 'special': 5},
        'soldier': {'name': '冥战士', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'yellowKnight': {'name': '金骑士', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redKnight': {'name': '红骑士', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'darkKnight': {'name': '黑骑士', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'blackKing': {'name': '黑衣魔王', 'hp': 1000, 'atk': 500, 'def': 0, 'money': 1000, 'experience': 1000, 'special': 0, 'bomb': false}, // 加入 'bomb': false 代表该怪物不可被炸弹或圣锤炸掉
        'yellowKing': {'name': '黄衣魔王', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'greenKing': {'name': '青衣武士', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'blueKnight': {'name': '蓝骑士', 'hp': 100, 'atk': 120, 'def': 0, 'money': 9, 'experience': 0, 'special': 8},
        'goldSlime': {'name': '黄头怪', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'poisonSkeleton': {'name': '紫骷髅', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'poisonBat': {'name': '紫蝙蝠', 'hp': 100, 'atk': 120, 'def': 0, 'money': 14, 'experience': 0, 'special': 13},
        'steelRock': {'name': '铁面人', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeletonPriest': {'name': '骷髅法师', 'hp': 100, 'atk': 100, 'def': 0, 'money': 0, 'experience': 0, 'special': 18, 'value': 20},
        'skeletonKing': {'name': '骷髅王', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeletonWizard': {'name': '骷髅巫师', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redSkeletonCaption': {'name': '骷髅武士', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'special': 0},
        'badHero': {'name': '迷失勇者', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'demon': {'name': '魔神武士', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'demonPriest': {'name': '魔神法师', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'goldHornSlime': {'name': '金角怪', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redKing': {'name': '红衣魔王', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'whiteKing': {'name': '白衣武士', 'hp': 100, 'atk': 120, 'def': 0, 'money': 17, 'experience': 0, 'special': 16},
        'blackMagician': {'name': '黑暗大法师', 'hp': 100, 'atk': 120, 'def': 0, 'money': 12, 'experience': 0, 'special': 11, 'value': 1/3, 'add': true, 'bomb': false}, // 吸血怪需要在后面添加value代表吸血比例；添加add: true可以将吸血的伤害加到自身
        'silverSlime': {'name': '银头怪', 'hp': 100, 'atk': 120, 'def': 0, 'money': 15, 'experience': 0, 'special': 14},
        'swordEmperor': {'name': '剑圣', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'whiteHornSlime': {'name': '尖角怪', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'badPrincess': {'name': '痛苦魔女', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'badFairy': {'name': '黑暗仙子', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'grayPriest': {'name': '中级法师', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redSwordsman': {'name': '剑王', 'hp': 100, 'atk': 120, 'def': 0, 'money': 7, 'experience': 0, 'special': 6, 'n': 8}, // 多连击需要在后面指定n代表是几连击
        'whiteGhost': {'name': '水银战士', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'poisonZombie': {'name': '绿兽人', 'hp': 100, 'atk': 120, 'def': 0, 'money': 13, 'experience': 0, 'special': 12},
        'magicDragon': {'name': '魔龙', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'octopus': {'name': '血影', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'darkFairy': {'name': '仙子', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'greenKnight': {'name': '强盾骑士', 'hp': 0, 'atk': 0, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
}