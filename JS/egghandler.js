const eggDiscoverReq = [D(1e7),D(8.4e8),D(3.8e10),D(2.7e13),D(8e15),
    D(3.6e18),D(1.5e22),D(2.7e25),D(1.5e29),D(7.6e32),D(2.5e36),D(3.2e39),
    D(2e43),D(1.9e47),D(5.1e51),D(3.2e55),D(6.4e59),D(5.7e64)]
const eggUnlockReq = [D(6.8e7),D(5.3e9),D(2.4e11),D(1.7e14),D(5e16),
    D(2.3e19),D(9.4e22),D(1.7e26),D(9.8e29),D(4.8e33),D(1.6e37),D(2e40),
    D(1.3e44),D(1.2e48),D(3.2e52),D(2e56),D(4e60),D(3.6e65)]
const eggValue = [D(0.25),D(1.25),D(6.25),D(30),D(150),
    D(700),D(3e3),D(1.25e4),D(5e4),D(1.75e5),D(5.25e5),
    D(1.5e6),D(1e7),D(1e9),D(1e11),D(1e12),D(1.5e13),D(1e14),D(0.0000001)]
const eggImgIDs = ['egg','superfood','medical','rocketfuel','supermaterial','fusion','quantum',
    'immortality','tachyon','graviton','dilithium','prodigy','terraform','antimatter',
    'darkmatter','ai','nebula','universe','enlightenment']
const eggNames = ['Regular','Superfood','Medical','Rocket Fuel','Super Material','Fusion',
    'Quantum','Immortality','Tachyon','Graviton','Dilithium','Prodigy','Terraform',
    'Antimatter','Dark Matter','AI','Nebula','Universe','Enlightenment']

function updateEggPage() {
    if(DOMCacheGetOrSet('currentEggImg').getAttribute('src') !== `Imgs/${eggImgIDs[data.currentEgg]}.png`) 
            DOMCacheGetOrSet('currentEggImg').setAttribute('src', `Imgs/${eggImgIDs[data.currentEgg]}.png`)
        DOMCacheGetOrSet('currentEggText').innerHTML = `Current Egg: ${eggNames[data.currentEgg]}<br>Value: $${format(eggValue[data.currentEgg])}`
        if((DOMCacheGetOrSet('nextEggImg').getAttribute('src') !== `Imgs/${eggImgIDs[data.currentEgg+1]}.png` && (data.unlockedEgg[data.currentEgg] === true || data.money.gte(eggDiscoverReq[data.currentEgg]))) 
        || (DOMCacheGetOrSet('nextEggImg').getAttribute('src') !== `Imgs/question.png` && (data.unlockedEgg[data.currentEgg] === false && data.money.lt(eggDiscoverReq[data.currentEgg]))))
            DOMCacheGetOrSet('nextEggImg').src = data.unlockedEgg[data.currentEgg] === true || data.money.gte(eggDiscoverReq[data.currentEgg]) ? `Imgs/${eggImgIDs[data.currentEgg+1]}.png` : `Imgs/question.png`
        DOMCacheGetOrSet('nextEggText').innerHTML = data.unlockedEgg[data.currentEgg] === true || data.money.gte(eggDiscoverReq[data.currentEgg]) ?
        `Next Egg: ${eggNames[data.currentEgg+1]}<br>Unlock At: $${format(eggUnlockReq[data.currentEgg])}<br>Value: $${format(eggValue[data.currentEgg+1])}` : `Next Egg: Not Discovered<br>Discover at $${format(eggDiscoverReq[data.currentEgg])}`
}