var hl=Object.defineProperty;var dl=(s,e,t)=>e in s?hl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var j=(s,e,t)=>(dl(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const cs=[{id:"frontline-repair",name:"前線修理",rarity:"Common",category:"Base",description:"本拠地HPを12回復する。",implemented:!0,effect:{type:"healBase",amount:12}},{id:"healing-square",name:"回復マス",rarity:"Common",category:"Board Gimmick",description:"盤面に回復マスを2つ生成する。",implemented:!0,effect:{type:"terrain",terrainType:"heal",count:2}},{id:"small-trap",name:"小さな罠",rarity:"Common",category:"Board Gimmick",description:"敵陣寄りに罠マスを2つ生成する。",implemented:!0,effect:{type:"terrain",terrainType:"trap",count:2}},{id:"pawn-evolution",name:"歩兵進化",rarity:"Common",category:"Passive",description:"自分の歩が敵陣に入ると、ランダムな実装済み特殊コマに進化する。",implemented:!0,effect:{type:"passive",passiveId:"pawnEvolution"}},{id:"summon-circle",name:"召喚陣の火花",rarity:"Common",category:"Board Gimmick",description:"自陣寄りに召喚陣を1つ生成する。",implemented:!0,effect:{type:"terrain",terrainType:"summon",count:1}},{id:"home-guard",name:"留守番隊",rarity:"Common",category:"Passive",description:"自陣にいる味方が守りやすくなる設計枠。",implemented:!1,effect:{type:"passive",passiveId:"homeGuard"}},{id:"turret-upgrade",name:"タレット増設",rarity:"Rare",category:"Summon",description:"自分の本拠地付近に自動攻撃タレットを1つ設置する。",implemented:!0,effect:{type:"summon",pieceType:"turret"}},{id:"ninja-contract",name:"忍者契約",rarity:"Rare",category:"Summon",description:"自陣に忍者を1体召喚する。",implemented:!0,effect:{type:"summon",pieceType:"ninja"}},{id:"hyper-mecha-fusion",name:"ハイパーメカ融合",rarity:"Epic",category:"Summon",description:"自陣の非王将コマ5体を選び、ハイパーメカ一型へ融合させる。各陣営1機まで。",implemented:!0,effect:{type:"startFusion"}},{id:"king-awe",name:"王の威圧",rarity:"Rare",category:"Passive",description:"王将の周囲2マス以内の敵コマは移動候補が削られる。",implemented:!0,effect:{type:"passive",passiveId:"kingAwe"}},{id:"iron-defense",name:"鉄壁の守り",rarity:"Rare",category:"Base",description:"本拠地HPを20回復する。",implemented:!0,effect:{type:"healBase",amount:20}},{id:"warp-pair",name:"双子ワープ",rarity:"Rare",category:"Board Gimmick",description:"盤面にワープマスを2つ生成する。",implemented:!0,effect:{type:"terrain",terrainType:"warp",count:2}},{id:"cannon-blueprint",name:"砲台兵の設計図",rarity:"Rare",category:"Summon",description:"砲台兵を召喚できるようにする拡張枠。",implemented:!1,effect:{type:"drawLogOnly"}},{id:"double-action",name:"二回行動",rarity:"Epic",category:"Temporary Buff",description:"このターン、ランダムな自分のコマ1体が追加で1回行動できる。",implemented:!0,effect:{type:"temporaryDoubleAction"}},{id:"cursed-board",name:"呪いの盤面",rarity:"Epic",category:"Board Gimmick",description:"盤面に呪いマスを3つ生成する。止まったコマは次ターン行動不能になる。",implemented:!0,effect:{type:"terrain",terrainType:"curse",count:3}},{id:"piece-rebellion",name:"駒の反乱",rarity:"Epic",category:"Sabotage",description:"敵の低レアコマ1体を一定確率で味方にする。",implemented:!0,effect:{type:"convertEnemyLowRank",chance:.45}},{id:"god-oracle",name:"神託",rarity:"Epic",category:"Passive",description:"次に表示される能力カードのレアリティが上がる。",implemented:!0,effect:{type:"oracle"}},{id:"lava-crack",name:"溶岩裂き",rarity:"Epic",category:"Board Gimmick",description:"盤面に溶岩マスを3つ生成する。",implemented:!0,effect:{type:"terrain",terrainType:"lava",count:3}},{id:"jujutsu-manual",name:"呪術師の教本",rarity:"Epic",category:"Summon",description:"呪術師を召喚する拡張枠。",implemented:!1,effect:{type:"drawLogOnly"}},{id:"god-descent",name:"神降ろし",rarity:"Legendary",category:"Summon",description:"本拠地HPを25消費し、神を1体召喚する。",implemented:!0,effect:{type:"summon",pieceType:"god",selfBaseDamage:55}},{id:"forbidden-summon",name:"禁断召喚",rarity:"Legendary",category:"Summon",description:"本拠地HPを18消費し、神を1体召喚する。",implemented:!0,effect:{type:"summon",pieceType:"god",selfBaseDamage:45}},{id:"divine-domain",name:"神域",rarity:"Legendary",category:"Board Gimmick",description:"盤面に神域を2つ生成する。",implemented:!0,effect:{type:"terrain",terrainType:"divine",count:2}},{id:"board-expansion",name:"盤面拡張",rarity:"Legendary",category:"Board Gimmick",description:"外周風の特殊マスを複数生成する。",implemented:!0,effect:{type:"terrain",terrainType:"warp",count:4}},{id:"base-cannon",name:"本拠地砲撃",rarity:"Legendary",category:"Sabotage",description:"相手本拠地に18ダメージを与える。",implemented:!0,effect:{type:"damageEnemyBase",amount:18}},{id:"dragon-egg",name:"竜卵の契約",rarity:"Legendary",category:"Summon",description:"ドラゴンを召喚する拡張枠。",implemented:!1,effect:{type:"drawLogOnly"}},{id:"blood-pact",name:"血盟召喚",rarity:"Cursed",category:"Summon",description:"本拠地HPを12消費し、忍者を召喚する。",implemented:!0,effect:{type:"summon",pieceType:"ninja",selfBaseDamage:12}},{id:"iyana-yatsu-arrival",name:"いやなやつ来訪",rarity:"Cursed",category:"Summon",description:"いやなやつを1体召喚する。放置すると増殖し、倒されると相手の王将を妨害する。",implemented:!0,effect:{type:"summon",pieceType:"iyanaYatsu"}},{id:"rotten-crown",name:"腐冠の一撃",rarity:"Cursed",category:"Sabotage",description:"自分も5ダメージを受け、相手本拠地に14ダメージを与える。",implemented:!0,effect:{type:"damageEnemyBase",amount:14,selfBaseDamage:5}},{id:"cursed-momentum",name:"呪速",rarity:"Cursed",category:"Passive",description:"呪いマスを踏んだ後の反撃を強める設計枠。",implemented:!1,effect:{type:"passive",passiveId:"cursedMomentum"}},{id:"bad-mouth-plus",name:"罵詈雑言+",rarity:"Cursed",category:"Sabotage",description:"敵のいやなやつをまとめて退散させる。",implemented:!0,effect:{type:"banishIyanaYatsu"}},{id:"trap-bargain",name:"罠商人",rarity:"Cursed",category:"Board Gimmick",description:"自陣にも敵陣にも罠マスを生成する。",implemented:!0,effect:{type:"terrain",terrainType:"trap",count:4}},{id:"king-tax",name:"王税",rarity:"Cursed",category:"Base",description:"自分の本拠地HPを8消費し、次のカード抽選を強化する。",implemented:!0,effect:{type:"oracle"}}],cr=["Common","Rare","Epic","Legendary","Cursed"],hr={Common:1,Rare:2,Epic:3,Legendary:4,Cursed:3},ul=s=>cr.indexOf(s);class zn{constructor(e){this.definition=e}apply(e,t){const{effect:n}=this.definition;switch(n.type){case"summon":{if(!e.canSummonPieceType(t,n.pieceType,n.selfBaseDamage??0))return`${this.definition.name}: 条件不足で召喚できません。神は6ターン目以降、かつ本拠地HPに余裕が必要です。`;const i=e.summonPiece(t,n.pieceType);return i&&n.selfBaseDamage&&e.damageBase(t,n.selfBaseDamage),i?`${this.definition.name}: ${i.definition.name}を召喚しました。`:`${this.definition.name}: 召喚できる空きマスがありません。`}case"healBase":return e.healBase(t,n.amount),`${this.definition.name}: 本拠地HPを${n.amount}回復しました。`;case"terrain":return this.applyTerrain(e,t,n.terrainType,n.count);case"passive":return e.addPassive(t,n.passiveId),`${this.definition.name}: 永続能力を獲得しました。`;case"temporaryDoubleAction":return e.grantDoubleAction(t,this.definition.name);case"oracle":return e.raiseNextOffer(t),`${this.definition.name}: 次の能力抽選が強化されます。`;case"convertEnemyLowRank":return e.tryConvertEnemy(t,n.chance);case"damageEnemyBase":{const i=e.getOpponent(t);return n.selfBaseDamage&&e.damageBase(t,n.selfBaseDamage),e.damageBase(i,n.amount),`${this.definition.name}: 敵本拠地に${n.amount}ダメージ。`}case"banishIyanaYatsu":{const i=e.banishIyanaYatsu(t);return i>0?`${this.definition.name}: いやなやつ${i}体が泣きべそをかいて逃げました。`:`${this.definition.name}: 退散させるいやなやつがいません。`}case"startFusion":return e.startHyperMechaFusion(t,this.definition.name);case"drawLogOnly":return`${this.definition.name}: この能力は拡張用データとして登録済みです。`}}applyTerrain(e,t,n,i){if(n==="warp"){const o=e.placeWarpPair(i,t);return`${this.definition.name}: ワープマスを${o}個配置しました。`}const r=e.placeTerrain(n,i,t);return`${this.definition.name}: ${r}個の特殊マスを配置しました。`}static getImplementedDefinitions(){return cs.filter(e=>e.implemented)}static fixedOffers(e){return e.map(t=>cs.find(n=>n.id===t&&n.implemented)).filter(t=>!!t)}static drawOffers(e,t,n=()=>!0){const r=this.getImplementedDefinitions().filter(n).flatMap(a=>{const l=Math.min(cr.length-1,ul(a.rarity)+t),c=Math.max(1,hr[cr[l]]??1);return Array.from({length:c},()=>a)}),o=[];for(;o.length<e&&r.length>0;){const a=r[Math.floor(Math.random()*r.length)];o.some(l=>l.id===a.id)||o.push(a)}return o}}const fl=s=>{switch(s){case"pawnEvolution":return"歩兵進化";case"kingAwe":return"王の威圧";case"homeGuard":return"留守番隊";case"turretRange":return"タレット射程+";case"summonDiscount":return"召喚補助";case"cursedMomentum":return"呪速"}};class pl{constructor(e,t="ai"){this.game=e,this.owner=t}chooseAbility(e){return[...e].sort((t,n)=>{const i=(hr[n.rarity]??1)-(hr[t.rarity]??1);return i!==0?i:+(n.category==="Summon")-+(t.category==="Summon")})[0]}takeTurn(){const e=this.pickAction();if(!e){this.game.log("AIは動けるコマがありません。","ai"),this.game.finishAction();return}const t={...e.piece.position};this.game.selectPiece(e.piece.id),this.game.log(`AI: ${e.piece.definition.name}を(${t.x+1},${t.y+1})から(${e.move.to.x+1},${e.move.to.y+1})へ動かします。`,"ai"),window.setTimeout(()=>{this.game.currentPlayer!==this.owner||this.game.phase!=="ai"||this.game.performMove(e.move)},520)}pickAction(){const e=this.getCandidates();return e.length===0?null:e.sort((t,n)=>n.score-t.score)[0]}getCandidates(){const e=[];for(const t of this.game.board.getPieces(this.owner)){const n=this.game.getMoveOptions(t.id);for(const i of n)e.push({piece:t,move:i,score:this.scoreMove(t,i)})}return e}scoreMove(e,t){const n=t.targetPieceId?this.game.board.getPiece(t.targetPieceId):this.game.board.getPieceAt(t.to);let i=Math.random()*.5;(n==null?void 0:n.type)==="king"&&(i+=1e4),n!=null&&n.isSpecial&&(i+=120+n.definition.score*8),n&&(i+=30+n.definition.score*4),t.kind==="special"&&(i+=80);const r=this.game.board.getKing(this.owner);if(r){const o=Math.abs(e.position.x-r.position.x)+Math.abs(e.position.y-r.position.y);Math.abs(t.to.x-r.position.x)+Math.abs(t.to.y-r.position.y)<o&&(i+=8)}return this.game.isSquareDangerous(e.position,this.owner)&&!this.game.isSquareDangerous(t.to,this.owner)&&(i+=55),i}}const fi={king:{type:"king",name:"王将",shortName:"王",score:1e3,implemented:!0,movement:"周囲1マス",specialAbility:"倒されると敗北する中核コマ。",weakness:"移動距離が短く、包囲に弱い。",summonCost:"初期配置のみ",maxHp:1},rook:{type:"rook",name:"飛車",shortName:"飛",score:9,implemented:!0,movement:"縦横に直線移動",specialAbility:"長い射線で重要コマを狙える。",weakness:"斜めに逃げる相手を追いにくい。",summonCost:"通常コマ",maxHp:1},bishop:{type:"bishop",name:"角行",shortName:"角",score:8,implemented:!0,movement:"斜めに直線移動",specialAbility:"遠距離から盤面を切る。",weakness:"縦横の隣接処理が苦手。",summonCost:"通常コマ",maxHp:1},gold:{type:"gold",name:"金将",shortName:"金",score:6,implemented:!0,movement:"前、横、後ろ、前斜めに1マス",specialAbility:"王を守る近衛。",weakness:"後ろ斜めに動けない。",summonCost:"通常コマ",maxHp:1},silver:{type:"silver",name:"銀将",shortName:"銀",score:5,implemented:!0,movement:"前、前斜め、後ろ斜めに1マス",specialAbility:"攻めの斜め展開が得意。",weakness:"横と真後ろに動けない。",summonCost:"通常コマ",maxHp:1},knight:{type:"knight",name:"桂馬",shortName:"桂",score:4,implemented:!0,movement:"前方2マス先の左右",specialAbility:"コマを飛び越えられる。",weakness:"後退できない。",summonCost:"通常コマ",maxHp:1},lance:{type:"lance",name:"香車",shortName:"香",score:3,implemented:!0,movement:"前方に直線移動",specialAbility:"縦の圧力を作る。",weakness:"横移動できない。",summonCost:"通常コマ",maxHp:1},pawn:{type:"pawn",name:"歩兵",shortName:"歩",score:1,implemented:!0,movement:"前方1マス",specialAbility:"歩兵進化の対象。",weakness:"単体では火力が低い。",summonCost:"通常コマ",maxHp:1},turret:{type:"turret",name:"自動攻撃タレット",shortName:"砲",score:7,implemented:!0,movement:"移動不可",specialAbility:"ターン終了時、周囲2マスの敵1体を自動攻撃する。",weakness:"動けず、射程外から狙われやすい。",summonCost:"本拠地付近に召喚",maxHp:2},ninja:{type:"ninja",name:"忍者",shortName:"忍",score:7,implemented:!0,movement:"斜め方向に最大2マス",specialAbility:"敵陣深くへ入り込みやすく、タレットに狙われにくい。",weakness:"縦横に動けない。",summonCost:"召喚カード",maxHp:1},god:{type:"god",name:"神",shortName:"神",score:14,implemented:!0,movement:"周囲2マス",specialAbility:"3ターンに1回、任意の敵コマ1体を消滅させる。",weakness:"倒されると味方全体が弱体化する。召喚時に本拠地HPを大きく消費する。",summonCost:"本拠地HP25",maxHp:2,large:!0},man:{type:"man",name:"男",shortName:"男",score:5,implemented:!0,movement:"周囲1マス。きみこちゃんの号令で前に出る。",specialAbility:"サーティビルディング5Fで出現する圧の強い取り巻き。",weakness:"特殊能力はなく、囲まれるとあっさり倒れる。",summonCost:"サーティビルディング5Fボス専用",maxHp:1},hyperMecha:{type:"hyperMecha",name:"ハイパーメカ一型",shortName:"機",score:18,implemented:!0,movement:"全方向に最大2マス。演算シミュレータで最大4マス。Ⅱ型は2x2を占有する。",specialAbility:"3ターンに1回ランダムな専用強化を獲得する融合兵器。累計5撃破でハイパーメカⅡ型へ変身。",weakness:"各陣営1機のみ。作成には自陣の非王将コマ5体を失う。",summonCost:"融合カードで自陣5コマを融合。各陣営1機まで",maxHp:5,large:!0},cannon:{type:"cannon",name:"砲台兵",shortName:"砲兵",score:8,implemented:!1,movement:"前後左右1マス",specialAbility:"直線3マス先まで攻撃できる。移動と攻撃は同じターンにできない。",weakness:"斜めから接近されると弱い。",summonCost:"Rare以上の召喚カード",maxHp:1},jujutsushi:{type:"jujutsushi",name:"呪術師",shortName:"呪",score:8,implemented:!1,movement:"斜め1マス",specialAbility:"敵1体を呪う。3回呪われたコマは消滅する。",weakness:"直接戦闘能力が低い。",summonCost:"呪いマスがある時",maxHp:1},slime:{type:"slime",name:"スライム",shortName:"粘",score:4,implemented:!1,movement:"周囲1マス",specialAbility:"倒されると2体に分裂する。",weakness:"分裂体は1マスずつしか動けない。",summonCost:"Common召喚カード",maxHp:1},dragon:{type:"dragon",name:"ドラゴン",shortName:"竜",score:16,implemented:!1,movement:"飛車と角を合わせた直線移動",specialAbility:"3ターンに1回、前方範囲攻撃を行う。",weakness:"大型で召喚コストが高く、罠の影響を受けやすい。",summonCost:"Legendary召喚カードと本拠地HP20",maxHp:3,large:!0},bomber:{type:"bomber",name:"爆弾兵",shortName:"爆",score:5,implemented:!1,movement:"前方1マス、横1マス",specialAbility:"敵に取られた時、周囲1マスの全コマを巻き込む。",weakness:"味方も爆発に巻き込む。",summonCost:"CursedまたはRareカード",maxHp:1},copyNinja:{type:"copyNinja",name:"コピー忍者",shortName:"写忍",score:8,implemented:!1,movement:"最後に倒された敵コマの移動をコピー",specialAbility:"特殊能力はコピーできないが、移動特性を盗める。",weakness:"コピー対象が弱いと性能も下がる。",summonCost:"忍者が場にいる時",maxHp:1},divineVassal:{type:"divineVassal",name:"神の眷属",shortName:"眷",score:7,implemented:!1,movement:"金将と同じ",specialAbility:"神の周囲にいると攻撃力が上がる。神が倒されると消滅する。",weakness:"神がいないと召喚も維持もできない。",summonCost:"味方の神が盤面にいる時",maxHp:1},iyanaYatsu:{type:"iyanaYatsu",name:"いやなやつ",shortName:"嫌",score:6,implemented:!0,movement:"周囲2マス",specialAbility:"倒されると敵陣に移動し、王将に行動制限をかける。放置で増殖する。",weakness:"罵詈雑言系カードで退散する。",summonCost:"Cursedカード",maxHp:1},chronomancer:{type:"chronomancer",name:"時詠み",shortName:"時",score:9,implemented:!1,movement:"王将と同じ",specialAbility:"味方1体のクールダウンを1ターン短縮する。",weakness:"自身は低耐久。",summonCost:"Epic以上",maxHp:1},barrierGuard:{type:"barrierGuard",name:"結界守",shortName:"結",score:7,implemented:!1,movement:"金将と同じ",specialAbility:"隣接する味方が最初に受ける破壊を1回防ぐ。",weakness:"遠距離攻撃には結界が薄い。",summonCost:"本拠地HPが60以下",maxHp:2},gatekeeper:{type:"gatekeeper",name:"門番",shortName:"門",score:6,implemented:!1,movement:"縦横1マス",specialAbility:"ワープマスを封鎖または再接続する。",weakness:"斜めからの攻撃に弱い。",summonCost:"ワープマスが2つ以上ある時",maxHp:1},medic:{type:"medic",name:"薬師",shortName:"薬",score:6,implemented:!1,movement:"周囲1マス",specialAbility:"隣接する味方か本拠地を少量回復する。",weakness:"敵を取れない。",summonCost:"Common以上",maxHp:1},magnetSoldier:{type:"magnetSoldier",name:"磁力兵",shortName:"磁",score:8,implemented:!1,movement:"縦横2マスまで",specialAbility:"金属系コマを1マス引き寄せる。",weakness:"神域では能力が不安定になる。",summonCost:"Rare以上",maxHp:1},shadowDouble:{type:"shadowDouble",name:"影武者",shortName:"影",score:7,implemented:!1,movement:"王将と同じ",specialAbility:"一度だけ王将への攻撃を肩代わりする。",weakness:"本物の王将から離れると消える。",summonCost:"王将の隣接マス",maxHp:1},bannerCaptain:{type:"bannerCaptain",name:"旗本",shortName:"旗",score:7,implemented:!1,movement:"銀将と同じ",specialAbility:"周囲2マスの低レア味方の移動候補を1つ増やす。",weakness:"単独では脅威が低い。",summonCost:"歩が3体以上残っている時",maxHp:1},engineer:{type:"engineer",name:"工兵",shortName:"工",score:6,implemented:!1,movement:"縦横1マス",specialAbility:"罠、回復、召喚陣を1つ作る。",weakness:"作ったギミックは敵にも利用される。",summonCost:"Board Gimmickカード後",maxHp:1},sealPriest:{type:"sealPriest",name:"封印師",shortName:"封",score:9,implemented:!1,movement:"斜め1マス、前1マス",specialAbility:"特殊コマ1体の能力を2ターン封じる。",weakness:"通常コマには効果が薄い。",summonCost:"Epic以上",maxHp:1},stormLancer:{type:"stormLancer",name:"嵐槍兵",shortName:"嵐",score:8,implemented:!1,movement:"前方直線3マスまで",specialAbility:"移動した経路の隣接敵を後退させる。",weakness:"行き止まりに弱い。",summonCost:"Rare以上",maxHp:1}},Ir=["turret","ninja","god","man","iyanaYatsu","hyperMecha"];let ml=0;class Ur{constructor(e,t,n){j(this,"id");j(this,"type");j(this,"owner");j(this,"position");j(this,"hp");j(this,"maxHp");j(this,"stunnedTurns",0);j(this,"weakenedTurns",0);j(this,"curseStacks",0);j(this,"movePenalty",0);j(this,"extraActions",0);j(this,"specialCooldown",0);j(this,"mechUpgradeCooldown",0);j(this,"mechUpgrades",[]);j(this,"mechaKillCount",0);j(this,"mechaTier",1);this.id=`${t}-${e}-${ml++}`,this.type=e,this.owner=t,this.position={...n},this.maxHp=fi[e].maxHp,this.hp=this.maxHp}get definition(){return fi[this.type]}get isSpecial(){return!["king","rook","bishop","gold","silver","knight","lance","pawn"].includes(this.type)}get canAct(){return this.stunnedTurns<=0}get footprintSize(){return this.type==="hyperMecha"&&this.mechaTier>=2?2:1}damage(e){return this.hp-=e,this.hp<=0}heal(e){this.hp=Math.min(this.maxHp,this.hp+e)}resetTurnStatuses(){this.stunnedTurns>0&&(this.stunnedTurns-=1),this.weakenedTurns>0&&(this.weakenedTurns-=1),this.specialCooldown>0&&(this.specialCooldown-=1),this.mechUpgradeCooldown>0&&(this.mechUpgradeCooldown-=1),this.movePenalty=0}hasMechUpgrade(e){return this.mechUpgrades.includes(e)}}const gl=11,Es=s=>`${s.x},${s.y}`;class _l{constructor(){j(this,"size",gl);j(this,"pieces",new Map);j(this,"terrain",new Map);j(this,"lastDefeatedEnemyType",null)}setupInitialPosition(){this.pieces.clear(),this.terrain.clear();const e=["lance","knight","silver","gold","king","gold","silver","knight","lance"],t=Math.floor((this.size-e.length)/2);e.forEach((n,i)=>{const r=t+i;this.addPiece(n,"ai",{x:r,y:0}),this.addPiece(n,"player",{x:r,y:this.size-1})}),this.addPiece("rook","ai",{x:t+1,y:1}),this.addPiece("bishop","ai",{x:t+7,y:1}),this.addPiece("rook","player",{x:t+7,y:this.size-2}),this.addPiece("bishop","player",{x:t+1,y:this.size-2});for(let n=0;n<this.size;n+=1)this.addPiece("pawn","ai",{x:n,y:2}),this.addPiece("pawn","player",{x:n,y:this.size-3})}addPiece(e,t,n){if(!this.isInside(n)||this.getPieceAt(n))return null;const i=new Ur(e,t,n);return this.pieces.set(i.id,i),i}replacePiece(e,t){const n=new Ur(t,e.owner,e.position);return n.extraActions=e.extraActions,this.pieces.delete(e.id),this.pieces.set(n.id,n),n}removePiece(e){const t=this.pieces.get(e);return t&&this.pieces.delete(e),t}getPiece(e){return e?this.pieces.get(e):void 0}getPieces(e){return[...this.pieces.values()].filter(t=>!e||t.owner===e)}getPieceAt(e){return[...this.pieces.values()].find(t=>this.occupiesCoord(t,e))}getKing(e){return this.getPieces(e).find(t=>t.type==="king")}isInside(e){return e.x>=0&&e.x<this.size&&e.y>=0&&e.y<this.size}isAreaInside(e,t){return e.x>=0&&e.y>=0&&e.x+t<=this.size&&e.y+t<=this.size}occupiesCoord(e,t){const n=e.footprintSize;return t.x>=e.position.x&&t.x<e.position.x+n&&t.y>=e.position.y&&t.y<e.position.y+n}getFootprintCoords(e,t=e.position){const n=[];for(let i=0;i<e.footprintSize;i+=1)for(let r=0;r<e.footprintSize;r+=1)n.push({x:t.x+r,y:t.y+i});return n}getPiecesInArea(e,t,n){const i=new Map;for(let r=0;r<t;r+=1)for(let o=0;o<t;o+=1){const a=this.getPieceAt({x:e.x+o,y:e.y+r});a&&a.id!==n&&i.set(a.id,a)}return[...i.values()]}canPlaceFootprint(e,t,n){return this.isAreaInside(e,t)?this.getPiecesInArea(e,t,n).length===0:!1}findNearestPlacementForFootprint(e,t,n){const i=[];for(let r=0;r<=this.size-t;r+=1)for(let o=0;o<=this.size-t;o+=1){const a={x:o,y:r};this.canPlaceFootprint(a,t,n)&&i.push(a)}return i.sort((r,o)=>Math.abs(r.x-e.x)+Math.abs(r.y-e.y)-(Math.abs(o.x-e.x)+Math.abs(o.y-e.y)))[0]??null}terrainAt(e){return this.terrain.get(Es(e))}addTerrain(e,t,n,i){if(!this.isInside(t)||this.terrain.has(Es(t)))return null;const r={id:`terrain-${e}-${this.terrain.size}-${Math.floor(Math.random()*9999)}`,type:e,position:{...t},owner:n,pairedId:i};return this.terrain.set(Es(t),r),r}movePiece(e,t){const n=this.pieces.get(e);if(!n||!this.isAreaInside(t,n.footprintSize))return{};const i=this.getPiecesInArea(t,n.footprintSize,n.id);if(i.some(o=>o.owner===n.owner))return{};const r=i.filter(o=>o.owner!==n.owner);for(const o of r)this.lastDefeatedEnemyType=o.type,this.pieces.delete(o.id);return n.position={...t},{piece:n,captured:r[0],capturedPieces:r}}getLegalMoves(e){if(!e.canAct||e.type==="turret")return[];const t=e.owner==="player"?-1:1,n=[],i=(a,l)=>{const c={x:e.position.x+a,y:e.position.y+l};this.pushIfLegal(e,c,n)},r=(a,l,c=this.size)=>{for(let h=1;h<=c;h+=1){const u={x:e.position.x+a*h,y:e.position.y+l*h};if(!this.isAreaInside(u,e.footprintSize))return;const f=this.getPiecesInArea(u,e.footprintSize,e.id);if(f.some(_=>_.owner===e.owner))return;const m=f.find(_=>_.owner!==e.owner);if(n.push({to:u,kind:m?"capture":"move",targetPieceId:m==null?void 0:m.id}),m)return}};switch(e.type){case"king":for(let a=-1;a<=1;a+=1)for(let l=-1;l<=1;l+=1)(a!==0||l!==0)&&i(a,l);break;case"gold":[[0,t],[-1,t],[1,t],[-1,0],[1,0],[0,-t]].forEach(([a,l])=>i(a,l));break;case"silver":[[0,t],[-1,t],[1,t],[-1,-t],[1,-t]].forEach(([a,l])=>i(a,l));break;case"knight":i(-1,t*2),i(1,t*2);break;case"lance":r(0,t);break;case"pawn":i(0,t);break;case"rook":r(1,0),r(-1,0),r(0,1),r(0,-1);break;case"bishop":r(1,1),r(1,-1),r(-1,1),r(-1,-1);break;case"ninja":[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([a,l])=>{r(a,l,2)});break;case"god":for(let a=-2;a<=2;a+=1)for(let l=-2;l<=2;l+=1)(a!==0||l!==0)&&i(a,l);break;case"man":for(let a=-1;a<=1;a+=1)for(let l=-1;l<=1;l+=1)(a!==0||l!==0)&&i(a,l);break;case"hyperMecha":{let a=e.hasMechUpgrade("simulator")?4:2;e.mechaTier>=2&&e.hasMechUpgrade("armorPurge")&&(a+=1),e.mechaTier>=2&&e.hasMechUpgrade("reactorRampage")&&(a+=1),[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([l,c])=>r(l,c,a));break}case"iyanaYatsu":for(let a=-2;a<=2;a+=1)for(let l=-2;l<=2;l+=1)(a!==0||l!==0)&&i(a,l);break;default:this.getFallbackSpecialMoves(e).forEach(a=>n.push(a));break}return Math.max(0,e.movePenalty+e.weakenedTurns)>0?n.filter(a=>Math.abs(a.to.x-e.position.x)+Math.abs(a.to.y-e.position.y)<=1):n}findSummonSpot(e){const t=e==="player"?[this.size-1,this.size-2,this.size-3,this.size-4]:[0,1,2,3],n=Math.floor(this.size/2),i=Array.from({length:this.size},(r,o)=>o).sort((r,o)=>Math.abs(r-n)-Math.abs(o-n));for(const r of t)for(const o of i){const a={x:o,y:r};if(!this.getPieceAt(a))return a}return null}findAdjacentEmpty(e){const t=[];for(let n=-1;n<=1;n+=1)for(let i=-1;i<=1;i+=1){if(i===0&&n===0)continue;const r={x:e.x+i,y:e.y+n};this.isInside(r)&&!this.getPieceAt(r)&&t.push(r)}return t[Math.floor(Math.random()*t.length)]??null}findNearestEmptyTo(e){const t=[];for(let n=0;n<this.size;n+=1)for(let i=0;i<this.size;i+=1){const r={x:i,y:n};this.getPieceAt(r)||t.push(r)}return t.sort((n,i)=>Math.abs(n.x-e.x)+Math.abs(n.y-e.y)-(Math.abs(i.x-e.x)+Math.abs(i.y-e.y)))[0]??null}randomEmptyCoord(e){const t=[];for(let n=0;n<this.size;n+=1)for(let i=0;i<this.size;i+=1){const r={x:i,y:n};this.getPieceAt(r)||this.terrainAt(r)||e==="player"&&n<=1||e==="ai"&&n>=this.size-2||t.push(r)}return t[Math.floor(Math.random()*t.length)]??null}getImplementedEvolutionType(){return Ir[Math.floor(Math.random()*Ir.length)]}pushIfLegal(e,t,n){if(!this.isAreaInside(t,e.footprintSize))return;const i=this.getPiecesInArea(t,e.footprintSize,e.id);if(i.some(o=>o.owner===e.owner))return;const r=i.find(o=>o.owner!==e.owner);n.push({to:t,kind:r?"capture":"move",targetPieceId:r==null?void 0:r.id})}getFallbackSpecialMoves(e){if(!fi[e.type].implemented)return[];const n=[];for(let i=-1;i<=1;i+=1)for(let r=-1;r<=1;r+=1)(i!==0||r!==0)&&this.pushIfLegal(e,{x:e.position.x+i,y:e.position.y+r},n);return n}}const vl=(s,e)=>Math.max(Math.abs(s.x-e.x),Math.abs(s.y-e.y));class yl{constructor(e){this.game=e}resolveEndTurn(e){this.resolveTurrets(e),this.resolveIyanaYatsu(e),this.resolveLava()}applyTerrainOnEntry(e){const t=this.game.board.terrainAt(e.position);if(t)switch(t.type){case"heal":e.heal(1),this.game.healBase(e.owner,4),this.game.log(`${e.definition.name}が回復マスで態勢を立て直しました。`,e.owner);break;case"trap":e.stunnedTurns=Math.max(e.stunnedTurns,1),this.game.log(`${e.definition.name}が罠にかかりました。`,"danger");break;case"curse":e.stunnedTurns=Math.max(e.stunnedTurns,1),e.curseStacks+=1,this.game.log(`${e.definition.name}が呪いを受けました。`,"danger"),e.curseStacks>=3&&this.game.destroyPiece(e.id,"curse");break;case"warp":this.resolveWarp(e,t);break;case"summon":this.game.log(`${e.definition.name}が召喚陣を確保しました。召喚カードの価値が上がります。`,e.owner);break;case"divine":e.type==="god"?(e.specialCooldown=Math.max(0,e.specialCooldown-1),this.game.log("神域が神の消滅権能を早めました。",e.owner)):(e.movePenalty+=1,this.game.log(`${e.definition.name}が神域で足を取られました。`,"danger"));break;case"lava":this.game.log(`${e.definition.name}が溶岩の熱を受けています。`,"danger");break}}resolveWarp(e,t){const n=[...this.game.board.terrain.values()].find(i=>i.id===t.pairedId);n&&(this.game.board.getPieceAt(n.position)||(e.position={...n.position},this.game.log(`${e.definition.name}がワープしました。`,e.owner)))}resolveTurrets(e){const t=this.game.board.getPieces(e).filter(i=>i.type==="turret"),n=this.game.hasPassive(e,"turretRange")?1:0;for(const i of t){const o=this.game.board.getPieces(this.game.getOpponent(e)).filter(a=>vl(a.position,i.position)<=2+n).sort((a,l)=>l.definition.score-a.definition.score).find(a=>a.type!=="ninja"||Math.random()>.55);o&&(this.game.log(`タレットが${o.definition.name}を自動攻撃しました。`,e),this.game.destroyPiece(o.id,"turret",e))}}resolveIyanaYatsu(e){const t=this.game.board.getPieces(e).filter(n=>n.type==="iyanaYatsu");for(const n of t){if(n.specialCooldown>0)continue;const i=this.game.board.findAdjacentEmpty(n.position);if(!i)continue;const r=this.game.board.addPiece("iyanaYatsu",e,i);r&&(n.specialCooldown=3,r.specialCooldown=3,this.game.log("いやなやつが放置されて増殖しました。",e))}}resolveLava(){for(const e of[...this.game.board.pieces.values()]){const t=this.game.board.terrainAt(e.position);if((t==null?void 0:t.type)!=="lava")continue;const n=e.damage(1);this.game.log(`${e.definition.name}が溶岩で1ダメージを受けました。`,"danger"),n&&this.game.destroyPiece(e.id,"lava")}}}const Ci={uesugiKenshin:{id:"uesugiKenshin",name:"上杉謙信",title:"越後の龍",archetype:"機動戦 / 前線突破",skillName:"車懸りの陣",skillDescription:"チャージ3。前線の味方最大5体に追加行動を与え、弱体と移動制限を解除する。",passiveName:"越後の龍",passiveDescription:"敵陣に味方がいるターン開始時、スキルチャージが追加で1進み、その先鋒が追加行動を得る。",chargeTurns:3,accentColor:"#8ee7ff"},mechaArmorChan:{id:"mechaArmorChan",name:"メカ装甲ちゃん",title:"格納庫の姫騎士",archetype:"ハイパーメカ / 融合支援",skillName:"装甲起動プロトコル",skillDescription:"チャージ4。メカがいれば強化準備を即時完了。いなければ融合開始、足りない時はUSBチャンスを得る。",passiveName:"装甲同期",passiveDescription:"ターン開始時、味方ハイパーメカの強化クールダウンが追加で1進む。",chargeTurns:4,accentColor:"#ff9fb5"},hoshiyomiKaguya:{id:"hoshiyomiKaguya",name:"星詠みかぐや",title:"月面観測者",archetype:"カード制御 / 盤面支援",skillName:"星図改変",skillDescription:"チャージ3。高レア寄りの能力カードを即座に3枚提示し、盤面に回復とワープを配置する。",passiveName:"月下の予兆",passiveDescription:"3ターンごとに次の能力カードのレアリティが上がる。",chargeTurns:3,accentColor:"#f2c45d"},demonVolunteer:{id:"demonVolunteer",name:"魔王ボランティア",title:"屋上で笑う女の子魔王",archetype:"呪い / 拠点圧力",skillName:"魔王の風",skillDescription:"チャージ4。相手本拠地へ22ダメージを与え、呪いマスと神域を呼び、次の能力カードを強める。",passiveName:"親切な侵略",passiveDescription:"塔を完全制覇した証。今は演出と解放状態のみ。魔王城実装時に追加効果が入る予定。",chargeTurns:4,accentColor:"#ff3434"}},xl=Object.values(Ci),on=31,Nr=["さとう","すずき","たかはし","たなか","わたなべ","いとう","やまもと","なかむら","こばやし","かとう","よしだ","やまだ","ささき","やまぐち","まつもと","いのうえ","きむら","はやし","しみず","やまざき"],Fr=[{id:"office",name:"オフィスビル",rarity:1,description:"紙コップの水と妙に硬い会議椅子で全回復する。"},{id:"gasStation",name:"ガソリンスタンド",rarity:2,description:"燃料の匂いと缶コーヒーで全回復する。"},{id:"stationWaitingRoom",name:"駅の待合所",rarity:3,description:"時刻表の下で一息つき、共有HPを全回復する。"}],bo={5:{floor:5,name:"きみこちゃん",title:"男衆を従える中ボス",description:"特殊コマ「男」を並べて、正面から圧をかけてくる。",summons:["man","man","man","man","gold"],terrain:["trap"]},10:{floor:10,name:"いやな奴",title:"増殖する悪態フロア主任",description:"盤面のいやな奴と同じ性質で、放置すると王将の自由を奪う。",summons:["iyanaYatsu","iyanaYatsu","iyanaYatsu","ninja"],terrain:["curse","trap"]},15:{floor:15,name:"瑞風",title:"走る豪華列車",description:"ワープマスと高速駒で線路のように盤面を切り裂く。",summons:["rook","bishop","ninja","ninja","turret"],terrain:["warp","warp","heal"]},20:{floor:20,name:"四季島",title:"季節を塗り替える展望車",description:"春夏秋冬の特殊マスを敷き、回復と罠を交互に押し付ける。",summons:["turret","turret","gold","silver","ninja"],terrain:["heal","lava","trap","divine"]},25:{floor:25,name:"七星",title:"七つ星の夜行要塞",description:"七つの脅威を散らし、神域とタレットで王手筋を狭める。",summons:["god","turret","turret","ninja","ninja","rook","bishop"],terrain:["divine","curse","warp","warp"]},30:{floor:30,name:"冒険者カツドン",title:"カレーで仕上がる最上階の冒険者",description:"超必殺技「超究覇斬」で横一列を消し、リーダーへ30ダメージを与える。",summons:["hyperMecha","ninja","ninja","man","man","turret"],terrain:["lava","trap","heal"]},31:{floor:31,name:"魔王ボランティア",title:"屋上で待つ4000HPの親切な災厄",description:"魔王の風、呪い、拠点ダメージを遠慮なく連発する隠しボス。",summons:["god","hyperMecha","turret","turret","iyanaYatsu","ninja","rook","bishop"],terrain:["lava","lava","curse","divine","trap"]}},Ln=40,Or=["城壁の魔兵","乗っ取り衛兵","黒鍵の番人","玉座掃除係","地下倉庫の見張り","偽魔王軍の歩哨","呪い皿洗い","赤絨毯の刺客","門前の火吹き","王冠泥棒見習い"],Bt={5:{floor:5,name:"魔人アメッサー",title:"魔王防衛軍その1",description:"斧のような雨を降らせる先鋒。倒すと魔人攻撃が解放される。",scenarioBefore:"アメッサーは城門に座り込み、奪われた魔王城の旗を雑に踏んでいた。「ここから先は偽魔王軍のものだ」と笑う。",scenarioAfter:"アメッサーは膝をつき、あなたの強さを認めた。「魔王城を取り返すなら、俺の魔力も使え」魔人攻撃が解放された。",skillName:"魔雨斧",hp:900,summons:["man","silver","turret","ninja"],terrain:["trap","curse"],demonAttackGain:1},10:{floor:10,name:"魔人シュミット",title:"魔王防衛軍その2 / 炎魔人",description:"炎の鍛冶炉から生まれた魔人。溶岩マスを増やし、城内を焼く。",scenarioBefore:"鍛冶場の熱気の中、シュミットが槌を振るう。「前の魔王に義理はない。だが城を焼く奴らはもっと気に入らん」",scenarioAfter:"シュミットは炎を小さく畳んだ。「俺の火を貸す。魔人攻撃に炎を混ぜろ」魔人攻撃が強化された。",skillName:"炎魔炉",hp:1500,summons:["bomber","turret","gold","lance","pawn"],terrain:["lava","lava","trap"],demonAttackGain:1},15:{floor:15,name:"魔人秋水",title:"魔王防衛軍その3 / 水魔人",description:"水路を支配する静かな魔人。回復と拘束で長期戦に引きずり込む。",scenarioBefore:"地下水路で秋水が杯を傾ける。「城は濁った。だが、主を名乗る者が戻るなら水は道を開く」",scenarioAfter:"秋水は水面を叩き、味方の魔力へ流れを繋いだ。「次からは水も撃つ」魔人攻撃が強化された。",skillName:"秋水縛り",hp:2300,summons:["jujutsushi","medic","ninja","bishop","slime"],terrain:["heal","warp","warp","curse"],demonAttackGain:1},20:{floor:20,name:"魔人カツドン",title:"いやな奴の突然変異体",description:"冒険者カツドンが魔人になった糞野郎。超究魔人覇斬で細かく痛い攻撃を連発する。こいつは仲間にならない。",scenarioBefore:"玉座前の廊下に、嫌な笑い声が響く。魔人カツドンはカレー皿を床に投げ、「城も魔王も俺の踏み台だっち！」と叫ぶ糞野郎だった。",scenarioAfter:"カツドンは煙を上げて逃げた。仲間にはならない。むしろ誰も仲間にしたくない。魔王ボランティアは黙って床を拭いた。",skillName:"超究魔人覇斬",hp:3300,summons:["iyanaYatsu","iyanaYatsu","bomber","hyperMecha","ninja","man"],terrain:["lava","trap","curse"],demonAttackGain:0},25:{floor:25,name:"魔将バルザック",title:"乗っ取り軍の会計係",description:"城の予算を勝手に使い、罠とタレットを増設してくる魔将。",scenarioBefore:"バルザックは帳簿を抱えていた。「この城はもう買収済みです。魔王権も維持費も、ぜんぶ私の数字です」",scenarioAfter:"帳簿は燃え、城の罠が味方側へ切り替わった。「数字で負けました」魔人攻撃がさらに強化された。",skillName:"赤字決算罠",hp:4200,summons:["turret","turret","gatekeeper","engineer","gold","rook"],terrain:["trap","trap","lava","heal"],demonAttackGain:1},30:{floor:30,name:"武神カツドン",title:"帰ってきた糞野郎",description:"魔人カツドンが武神ぶって帰ってきた。超究武神覇斬で盤面を十字に割る。",scenarioBefore:"崩れた大広間で、またカツドンが待っていた。「武神になって帰ってきただっち！」本当にしつこい糞野郎だ。",scenarioAfter:"武神カツドンは派手に吹き飛び、最後まで仲間にならずに逃げた。魔王ボランティアは「二度と来ないで」と小声で言った。",skillName:"超究武神覇斬",hp:5600,summons:["hyperMecha","dragon","ninja","bomber","iyanaYatsu","iyanaYatsu"],terrain:["lava","lava","trap","curse"],demonAttackGain:0},35:{floor:35,name:"魔王ガレオン",title:"ボランティアの上位互換",description:"親切さを武器にする旧魔王。風、呪い、支援を同時に使う。",scenarioBefore:"ガレオンは丁寧に礼をした。「弱い魔王を城から追い出すのも、民のためです」その声は優しいが、目は冷たい。",scenarioAfter:"ガレオンは微笑んだまま道を譲る。「君たちの覚悟、少しだけ認めましょう」魔人攻撃が大きく強化された。",skillName:"上位魔王の風",hp:7e3,summons:["god","jujutsushi","turret","turret","dragon","divineVassal"],terrain:["divine","curse","lava","trap","heal"],demonAttackGain:2},40:{floor:40,name:"真魔王ボランティア",title:"再臨を企てた最後の魔王",description:"彼女の目的は、魔王を殺させて自分が真魔王として再臨することだった。魔人攻撃と盤面ギミックを重ねないと削り切れない。",scenarioBefore:"玉座の奥で、魔王ボランティアが笑った。「ごめんね。あなたに魔王たちを倒してもらって、私は真魔王として戻るつもりだったの」",scenarioAfter:"真魔王ボランティアは王冠を置いた。「それでも、助けてくれたことは嘘じゃなかった」乗っ取られ魔王城は解放された。",skillName:"真魔王再臨",hp:9e3,summons:["god","dragon","hyperMecha","turret","turret","jujutsushi","divineVassal","iyanaYatsu"],terrain:["divine","divine","curse","lava","trap"],demonAttackGain:0}},Br=[{id:"sharedHpFrame",name:"共有HPフレーム",description:"共有HPの最大値+25。長丁場でじわじわ効く。"},{id:"floorRepairCrew",name:"階層修理班",description:"各階クリア時の小回復量が少し増える。"},{id:"premiumOfferDesk",name:"プレミアム受付",description:"次の能力カード提示のレアリティが上がる。"},{id:"emergencyUsb",name:"非常用USB",description:"追加融合チャンスを1回得る。"},{id:"towerCurryTicket",name:"塔内カレー券",description:"獲得時に共有HPを中回復し、カツドン戦の圧に備える。"},{id:"antiNuisancePoster",name:"悪態禁止ポスター",description:"いやな奴を1体だけ即退散させる。"}],bs=s=>Math.max(1,Math.ceil(Math.min(s,30)/5)),Ml=s=>{if(s>=31)return 4e3;const e=Math.max(0,(s-1)/30);return Math.round(140+3660*e**1.45)},Sl=s=>!!bo[s],Ts=s=>Math.max(1,Math.ceil(Math.min(s,Ln)/5)),El=s=>{const e=Bt[s];if(e)return e.hp;const t=Math.max(0,s/Ln);return Math.round(260+6200*t**1.35)},kr=s=>!!Bt[s],bl=s=>s==="player"?"ai":"player",ws=(s,e)=>Math.max(Math.abs(s.x-e.x),Math.abs(s.y-e.y)),Tl=(s,e)=>Math.max(Math.abs(s.x-e.x),Math.abs(s.y-e.y)),Hr=3,zr="ginga-shogi-x-meta-progress",As=["uesugiKenshin","mechaArmorChan","hoshiyomiKaguya"],bn={kineticBlade:"キネティックブレイド",simulator:"演算シミュレータ",usbProMax:"最強USB PRO MAX",totalAnnihilation:"全体殲滅！",armorPurge:"装甲パージ",electroAnchor:"超電磁アンカー",reactorRampage:"反応炉暴走",quantumBackup:"量子バックアップ",satelliteAim:"衛星照準",processExecution:"プロセス実行"},wl={kineticBlade:"このメカが敵を倒した時、倒した地点の隣接敵コマもまとめて破壊します。",simulator:"移動範囲が伸び、ハイパーメカの行動半径が広がります。",usbProMax:"もう一度ハイパーメカ一型を作るチャンスを得ます。",totalAnnihilation:"一型専用。敵コマを1体選択し、その敵と同じタイプの敵を全員消滅させます。王将は選択できません。",armorPurge:"Ⅱ型専用。装甲を切り離して機動力を上げます。移動範囲+1、即座に追加行動を1回得ます。",electroAnchor:"Ⅱ型専用。射程4の敵コマ1体をアンカーで拘束し、次のターン行動不能にします。王将は対象外。",reactorRampage:"Ⅱ型専用。反応炉を暴走させます。移動範囲+1、敵を取るたび相手本拠地へ5ダメージ。",quantumBackup:"Ⅱ型専用。破壊された時に一度だけ量子復元します。HP全回復で近くの空き場所に戻ります。",satelliteAim:"Ⅱ型専用。4x4マスを指定し、範囲内の王将以外を全員消滅させます。王将付近は指定不可。",processExecution:"Ⅱ型専用。レア。チートコンソールを開き、自分/相手のHPを10%から1000%まで書き換えます。"},Al={kineticBlade:"BLADE",simulator:"SIM",usbProMax:"USB",totalAnnihilation:"WIPE",armorPurge:"PURGE",electroAnchor:"ANCHOR",reactorRampage:"CORE",quantumBackup:"Q-BACK",satelliteAim:"ORBIT",processExecution:"EXEC"},Rl={kineticBlade:"Rare",simulator:"Rare",usbProMax:"Epic",totalAnnihilation:"Legendary",armorPurge:"Rare",electroAnchor:"Rare",reactorRampage:"Epic",quantumBackup:"Epic",satelliteAim:"Legendary",processExecution:"Rare"},Gr=["armorPurge","electroAnchor","reactorRampage","quantumBackup","satelliteAim","processExecution"],Rs=["totalAnnihilation"];class Cl{constructor(){j(this,"board",new _l);j(this,"bases",{player:{hp:100,maxHp:100},ai:{hp:100,maxHp:100}});j(this,"currentPlayer","player");j(this,"phase","title");j(this,"turnNumber",1);j(this,"selectedPieceId",null);j(this,"abilityOffers",[]);j(this,"winner",null);j(this,"logs",[]);j(this,"passives",{player:new Set,ai:new Set});j(this,"nextOfferBonus",{player:0,ai:0});j(this,"lastMove",null);j(this,"badMouthCommandUsed",{player:!1,ai:!1});j(this,"visualEvents",[]);j(this,"fusionSelectionIds",[]);j(this,"pendingMechaUpgrade",null);j(this,"processExecutionOwner",null);j(this,"processExecutionHpPercent",{player:100,ai:100});j(this,"mechFusionTickets",{player:0,ai:0});j(this,"selectedHeroId",null);j(this,"gameMode","standard");j(this,"heroSkillCharge",0);j(this,"skillBanner",null);j(this,"enemySkillBanner",null);j(this,"initiative",null);j(this,"initiativeFirstPlayer","player");j(this,"towerRun",{active:!1,mode:"thirtyBuilding",dungeonName:"サーティビルディング",floor:1,maxFloor:on,clearedFloors:0,floorTurn:1,difficultyTier:1,enemyName:"",enemyTitle:"",enemyMaxHp:100,isBossFloor:!1,permanentRewards:[],lastRestSpot:null,lastFloorResult:null,bossQuote:null,bossScenario:null,conquestEventUnlocked:!1,playerLevel:1,playerExp:0,playerExpToNext:60,demonAttackUnlocked:!1,demonAttackRank:0,demonAttackPower:0,elevatorNotice:null});j(this,"listeners",new Set);j(this,"effects",new yl(this));j(this,"ai",new pl(this));j(this,"unlockedHeroIds",new Set(As));j(this,"aiTimer",null);j(this,"visualEventSequence",0);j(this,"skillBannerSequence",0);j(this,"enemySkillBannerSequence",0);j(this,"fusionConsumesTicket",!1);j(this,"towerConquered",!1);j(this,"demonCastleUnlocked",!1);j(this,"metaSaveStatus","解放状況は未ロードです。");this.loadMetaProgress(!1)}start(){this.board.setupInitialPosition(),this.phase="title",this.log("銀河将棋X、起動。","system"),this.notify()}onChange(e){this.listeners.add(e)}notify(){this.listeners.forEach(e=>e())}getOpponent(e){return bl(e)}getHeroDefinitions(){return xl.filter(e=>this.unlockedHeroIds.has(e.id))}isDemonCastleUnlocked(){return this.demonCastleUnlocked}isTowerConquered(){return this.towerConquered}getMetaSaveStatus(){return this.metaSaveStatus}saveMetaProgress(){const e=this.persistMetaProgress("解放状況をセーブしました。");return this.notify(),e}loadMetaProgress(e=!0){const t=this.getStorage();if(!t)return this.metaSaveStatus="この環境ではセーブデータを使えません。",e&&this.notify(),this.metaSaveStatus;const n=t.getItem(zr);if(!n)return this.unlockedHeroIds.clear(),As.forEach(i=>this.unlockedHeroIds.add(i)),this.towerConquered=!1,this.demonCastleUnlocked=!1,this.metaSaveStatus="セーブデータはまだありません。",e&&this.notify(),this.metaSaveStatus;try{const i=JSON.parse(n);this.applyMetaProgress(i),this.metaSaveStatus=`ロードしました: ${this.formatSaveTime(i.savedAt)}`}catch{this.metaSaveStatus="セーブデータの読み込みに失敗しました。"}return e&&this.notify(),this.metaSaveStatus}getSelectedHero(){return this.selectedHeroId?Ci[this.selectedHeroId]:null}getHeroSkillChargeMax(){var e;return((e=this.getSelectedHero())==null?void 0:e.chargeTurns)??0}startGameWithHero(e){const t=Ci[e];t&&(this.aiTimer&&(window.clearTimeout(this.aiTimer),this.aiTimer=null),this.board.setupInitialPosition(),this.bases.player.hp=this.bases.player.maxHp,this.bases.ai.hp=this.bases.ai.maxHp,this.currentPlayer="player",this.phase="setup",this.turnNumber=1,this.selectedPieceId=null,this.abilityOffers=[],this.winner=null,this.logs=[],this.passives.player.clear(),this.passives.ai.clear(),this.nextOfferBonus.player=e==="hoshiyomiKaguya"?1:0,this.nextOfferBonus.ai=0,this.lastMove=null,this.badMouthCommandUsed.player=!1,this.badMouthCommandUsed.ai=!1,this.visualEvents=[],this.fusionSelectionIds=[],this.pendingMechaUpgrade=null,this.processExecutionOwner=null,this.processExecutionHpPercent.player=100,this.processExecutionHpPercent.ai=100,this.mechFusionTickets.player=e==="mechaArmorChan"?1:0,this.mechFusionTickets.ai=0,this.selectedHeroId=e,this.gameMode="standard",this.resetTowerRun(),this.heroSkillCharge=0,this.skillBanner=null,this.enemySkillBanner=null,this.initiative=this.rollInitiative(),this.initiativeFirstPlayer=this.initiative.firstPlayer,this.fusionConsumesTicket=!1,this.log(`${t.name}をメインキャラクターに選択。`,"player"),this.log(`${t.passiveName}: ${t.passiveDescription}`,"system"),this.phase="initiative",this.notify())}startTowerRunWithHero(e){this.startGameWithHero(e),this.gameMode="thirtyBuilding",this.towerRun.active=!0,this.towerRun.mode="thirtyBuilding",this.towerRun.dungeonName="サーティビルディング",this.towerRun.floor=1,this.towerRun.maxFloor=on,this.towerRun.clearedFloors=0,this.towerRun.floorTurn=1,this.towerRun.permanentRewards=[],this.towerRun.lastRestSpot=null,this.towerRun.lastFloorResult=null,this.towerRun.bossQuote=null,this.towerRun.bossScenario=null,this.towerRun.conquestEventUnlocked=!1,this.towerRun.playerLevel=1,this.towerRun.playerExp=0,this.towerRun.playerExpToNext=this.getDemonCastleExpToNext(1),this.towerRun.demonAttackUnlocked=!1,this.towerRun.demonAttackRank=0,this.towerRun.demonAttackPower=0,this.towerRun.elevatorNotice=null,this.bases.player.maxHp=125,this.bases.player.hp=this.bases.player.maxHp,this.setupTowerFloor(1,!0),this.log("サーティビルディング入館。共有HPを抱えたまま31階の屋上まで登ります。","system"),this.notify()}startDemonCastleRunWithHero(e){this.demonCastleUnlocked&&(this.startGameWithHero(e),this.gameMode="demonCastle",this.towerRun.active=!0,this.towerRun.mode="demonCastle",this.towerRun.dungeonName="乗っ取られ魔王城",this.towerRun.floor=1,this.towerRun.maxFloor=Ln,this.towerRun.clearedFloors=0,this.towerRun.floorTurn=1,this.towerRun.permanentRewards=[],this.towerRun.lastRestSpot=null,this.towerRun.lastFloorResult=null,this.towerRun.bossQuote=null,this.towerRun.bossScenario="魔王ボランティアの城は、偽魔王軍に奪われたままです。40階の玉座まで進み、城を取り返してください。",this.towerRun.conquestEventUnlocked=!1,this.towerRun.playerLevel=1,this.towerRun.playerExp=0,this.towerRun.playerExpToNext=this.getDemonCastleExpToNext(1),this.towerRun.demonAttackUnlocked=!1,this.towerRun.demonAttackRank=0,this.towerRun.demonAttackPower=0,this.towerRun.elevatorNotice=null,this.bases.player.maxHp=160,this.bases.player.hp=this.bases.player.maxHp,this.setupTowerFloor(1,!0),this.log("乗っ取られ魔王城へ突入。経験値でレベルアップしながら、40階の真相へ向かいます。","system"),this.notify())}confirmInitiative(){this.phase!=="initiative"||!this.initiative||(this.log(`先攻後攻決定: ${this.initiative.firstPlayer==="player"?"あなた":"AI"}が先攻です。`,this.initiative.firstPlayer),this.beginTurn(this.initiative.firstPlayer))}canUseHeroSkill(){return this.currentPlayer==="player"&&this.phase==="action"&&!!this.selectedHeroId&&this.heroSkillCharge>=this.getHeroSkillChargeMax()}useHeroSkill(){if(!this.canUseHeroSkill()||!this.selectedHeroId)return;const e=Ci[this.selectedHeroId];this.heroSkillCharge=0,this.showSkillBanner(e.skillName,e.name),e.id==="uesugiKenshin"?this.useKurumaGakari():e.id==="mechaArmorChan"?this.useMechaProtocol():e.id==="hoshiyomiKaguya"?this.useStarMapRewrite():this.useDemonVolunteerGale(),this.notify()}chargeHeroSkill(e){const t=this.getHeroSkillChargeMax();t<=0||(this.heroSkillCharge=Math.min(t,this.heroSkillCharge+e))}showSkillBanner(e,t){this.selectedHeroId&&(this.skillBannerSequence+=1,this.skillBanner={id:`skill-${this.skillBannerSequence}`,heroId:this.selectedHeroId,skillName:e,subtitle:t})}showEnemySkillBanner(e,t){this.enemySkillBannerSequence+=1,this.enemySkillBanner={id:`enemy-skill-${this.enemySkillBannerSequence}`,skillName:e,subtitle:t}}rollInitiative(){let e=0,t=0;do e=1+Math.floor(Math.random()*10),t=1+Math.floor(Math.random()*10);while(e===t);return{playerRoll:e,aiRoll:t,firstPlayer:e>t?"player":"ai"}}getStorage(){try{return typeof window>"u"||!window.localStorage?null:window.localStorage}catch{return null}}persistMetaProgress(e){const t=this.getStorage();if(!t)return this.metaSaveStatus="この環境ではセーブデータを使えません。",this.metaSaveStatus;const n={version:1,unlockedHeroIds:[...this.unlockedHeroIds],towerConquered:this.towerConquered,demonCastleUnlocked:this.demonCastleUnlocked,savedAt:new Date().toISOString()};return t.setItem(zr,JSON.stringify(n)),this.metaSaveStatus=`${e} ${this.formatSaveTime(n.savedAt)}`,this.metaSaveStatus}applyMetaProgress(e){this.unlockedHeroIds.clear(),As.forEach(n=>this.unlockedHeroIds.add(n));const t=Array.isArray(e.unlockedHeroIds)?e.unlockedHeroIds:[];for(const n of t)this.isHeroId(n)&&this.unlockedHeroIds.add(n);this.towerConquered=!!(e.towerConquered||this.unlockedHeroIds.has("demonVolunteer")),this.demonCastleUnlocked=!!(e.demonCastleUnlocked||this.towerConquered),(this.towerConquered||this.demonCastleUnlocked)&&this.unlockedHeroIds.add("demonVolunteer")}isHeroId(e){return typeof e=="string"&&e in Ci}formatSaveTime(e){if(typeof e!="string")return"時刻不明";const t=new Date(e);return Number.isNaN(t.getTime())?"時刻不明":t.toLocaleString("ja-JP",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}resetTowerRun(){this.towerRun={active:!1,mode:"thirtyBuilding",dungeonName:"サーティビルディング",floor:1,maxFloor:on,clearedFloors:0,floorTurn:1,difficultyTier:1,enemyName:"",enemyTitle:"",enemyMaxHp:100,isBossFloor:!1,permanentRewards:[],lastRestSpot:null,lastFloorResult:null,bossQuote:null,bossScenario:null,conquestEventUnlocked:!1,playerLevel:1,playerExp:0,playerExpToNext:60,demonAttackUnlocked:!1,demonAttackRank:0,demonAttackPower:0,elevatorNotice:null}}setupTowerFloor(e,t=!1){var l;const n=this.bases.player.hp;this.board.setupInitialPosition(),this.selectedPieceId=null,this.abilityOffers=[],this.lastMove=null,this.fusionSelectionIds=[],this.pendingMechaUpgrade=null,this.processExecutionOwner=null,this.badMouthCommandUsed.player=!1,this.badMouthCommandUsed.ai=!1;const i=this.gameMode==="demonCastle"||this.towerRun.mode==="demonCastle",r=i?Bt[e]:bo[e],o=i?El(e):Ml(e),a=i?Ts(e):bs(e);if(this.bases.ai.maxHp=o,this.bases.ai.hp=o,this.bases.player.hp=Math.min(this.bases.player.maxHp,n),this.towerRun.floor=e,this.towerRun.floorTurn=1,this.towerRun.difficultyTier=a,this.towerRun.enemyName=r?r.name:i?this.pickDemonCastleName():`${this.pickCommonTowerName()}さん`,this.towerRun.enemyTitle=r?r.title:i?`第${e}階の偽魔王軍`:`第${e}階の一般社員`,this.towerRun.enemyMaxHp=o,this.towerRun.isBossFloor=i?kr(e):Sl(e),this.towerRun.lastFloorResult=null,this.towerRun.bossQuote=null,this.towerRun.bossScenario=i?((l=Bt[e])==null?void 0:l.scenarioBefore)??null:null,this.towerRun.elevatorNotice=null,this.applyTowerDifficultySetup(e,i),r){for(const c of r.summons)this.addTowerEnemyPiece(c);for(const c of r.terrain)c==="warp"?this.placeWarpPair(2,"ai"):this.placeTerrain(c,1,"ai");this.log(`${e}F BOSS: ${r.name} 出現。${r.description}`,"danger"),i&&Bt[e]&&this.log(Bt[e].scenarioBefore,"danger")}else this.log(`${e}F: ${this.towerRun.enemyName} が立ちはだかります。HP ${o} / 難易度TIER ${a}`,"ai");t||(this.initiative=null,this.initiativeFirstPlayer="player")}applyTowerDifficultySetup(e,t=!1){const n=t?Ts(e):bs(e),i=t?["pawn","silver","gold","ninja","turret","rook","bomber","jujutsushi","dragon"]:["pawn","silver","gold","ninja","turret","rook"],r=Math.max(0,n-1+(t?1:0));for(let o=0;o<r;o+=1)this.addTowerEnemyPiece(i[(e+o)%i.length]);n>=3&&this.placeTerrain("trap",t?2:1,"ai"),n>=4&&this.placeTerrain("lava",t?2:1,"ai"),n>=5&&this.placeTerrain("curse",t?2:1,"ai"),n>=6&&this.addTowerEnemyPiece(t?"dragon":"god")}addTowerEnemyPiece(e){const t=this.summonPiece("ai",e);(t==null?void 0:t.type)==="hyperMecha"&&(t.mechUpgradeCooldown=1,t.mechaKillCount=3)}pickCommonTowerName(){return Nr[Math.floor(Math.random()*Nr.length)]??"たかはし"}pickDemonCastleName(){return Or[Math.floor(Math.random()*Or.length)]??"城壁の魔兵"}applyHeroPassiveStartOfTurn(e){if(!(e!=="player"||!this.selectedHeroId)){if(this.selectedHeroId==="uesugiKenshin"){const t=this.board.getPieces("player").filter(n=>n.type!=="king"&&n.position.y<=Math.floor(this.board.size/2)).sort((n,i)=>n.position.y-i.position.y||i.definition.score-n.definition.score)[0];t&&(t.extraActions+=1,this.chargeHeroSkill(1),this.log(`越後の龍: 前線の${this.getPieceDisplayName(t)}が追加行動を得ました。`,"player"));return}if(this.selectedHeroId==="mechaArmorChan"){const t=this.board.getPieces("player").filter(n=>n.type==="hyperMecha");for(const n of t)n.mechUpgradeCooldown>0&&(n.mechUpgradeCooldown-=1);t.length>0&&this.log("装甲同期: ハイパーメカの強化準備が加速しました。","player");return}this.selectedHeroId==="hoshiyomiKaguya"&&this.turnNumber>1&&this.turnNumber%3===0&&(this.raiseNextOffer("player"),this.log("月下の予兆: 次の能力カードの星が強くなりました。","player"))}}useKurumaGakari(){const e=this.board.getPieces("player").filter(t=>t.type!=="king"&&t.type!=="turret").sort((t,n)=>t.position.y-n.position.y||n.definition.score-t.definition.score).slice(0,5);for(const t of e)t.extraActions+=1,t.movePenalty=0,t.weakenedTurns=0,this.emitVisualEffect({kind:"combat",coord:{...t.position},owner:"player"});this.log(`車懸りの陣: 前線${e.length}体が輪転し、追加行動を得ました。`,"player")}useMechaProtocol(){const e=this.board.getPieces("player").filter(t=>t.type==="hyperMecha");if(e.length>0){for(const t of e)t.heal(2),t.mechUpgradeCooldown=0,t.mechaTier===1?(t.mechaKillCount=Math.min(4,t.mechaKillCount+2),t.hasMechUpgrade("simulator")||this.applyHyperMechaUpgrade(t,"simulator")):t.hasMechUpgrade("armorPurge")||this.applyHyperMechaUpgrade(t,"armorPurge"),this.emitVisualEffect({kind:"fusion",coord:{...t.position},owner:"player"});this.log("装甲起動プロトコル: ハイパーメカの整備が完了しました。","player");return}if(this.canStartHyperMechaFusion("player")&&this.getFusionCandidates("player").length>=5){const t=this.startHyperMechaFusion("player","装甲起動プロトコル");this.log(t,"player");return}this.mechFusionTickets.player+=1,this.summonPiece("player","turret"),this.log("装甲起動プロトコル: 融合準備が足りないため、USBチャンスとタレットを確保しました。","player")}useStarMapRewrite(){this.raiseNextOffer("player"),this.raiseNextOffer("player"),this.placeTerrain("heal",2,"player"),this.placeWarpPair(2,"player"),this.abilityOffers=zn.drawOffers(3,this.nextOfferBonus.player,e=>this.canOfferAbility("player",e)),this.nextOfferBonus.player=0,this.phase="ability",this.log("星図改変: 星の巡りを書き換え、能力カードを再提示しました。","player")}useDemonVolunteerGale(){this.damageBase("ai",22),this.placeTerrain("curse",2,"player"),this.placeTerrain("divine",1,"player"),this.raiseNextOffer("player"),this.log("魔王の風: 相手本拠地へ22ダメージ。呪いマスと神域を呼び、次の能力カードを強めました。","player")}log(e,t="system"){const n=t;this.logs.unshift({id:`log-${Date.now()}-${Math.random()}`,text:e,tone:n}),this.logs=this.logs.slice(0,12)}emitVisualEffect(e){this.visualEventSequence+=1,this.visualEvents.push({...e,id:`vfx-${this.visualEventSequence}`}),this.visualEvents=this.visualEvents.slice(-48)}beginTurn(e){if(!this.winner){this.currentPlayer=e,this.selectedPieceId=null,this.pendingMechaUpgrade=null,this.badMouthCommandUsed[e]=!1;for(const t of this.board.getPieces(e))t.resetTurnStatuses();if(e==="player"&&this.selectedHeroId&&(this.chargeHeroSkill(1),this.applyHeroPassiveStartOfTurn(e)),e==="player"&&this.isDemonCastleRun()&&(this.resolveDemonCastleAllyAttack(),this.checkVictory())){this.notify();return}if(e==="ai"&&this.towerRun.active&&(this.resolveTowerBossStartOfTurn(),this.checkVictory())){this.notify();return}this.applyKingAwe(e),this.continueTurnAfterMechaUpgrades(e)}}getAbilityOfferCount(e){return e!=="player"||!this.isDemonCastleRun()?3:3+Math.floor(this.towerRun.playerLevel/5)}continueTurnAfterMechaUpgrades(e){if(e==="player"){const i=this.createPendingHyperMechaUpgrade(e);if(i){this.pendingMechaUpgrade=i,this.abilityOffers=[],this.phase="mechaUpgrade";const r=this.board.getPiece(i.pieceId);this.log(`${r?this.getPieceDisplayName(r):"ハイパーメカ"}に新しい強化カードが届きました。`,e),this.notify();return}}else this.processHyperMechaUpgrades(e);const t=this.getAbilityOfferCount(e);if(this.abilityOffers=e==="player"&&this.turnNumber===1&&!this.isDemonCastleRun()?zn.fixedOffers(["turret-upgrade","ninja-contract","iyana-yatsu-arrival"]):zn.drawOffers(t,this.nextOfferBonus[e],i=>this.canOfferAbility(e,i)),this.nextOfferBonus[e]=0,e==="player"){this.phase="ability",this.log(`ターン${this.turnNumber}: あなたの能力選択です。`,"player"),this.notify();return}this.phase="ai";const n=this.ai.chooseAbility(this.abilityOffers);this.chooseAbility(n.id,!0),this.aiTimer=window.setTimeout(()=>this.ai.takeTurn(),650),this.notify()}chooseAbility(e,t=!1){const n=this.abilityOffers.find(r=>r.id===e);if(!n||this.phase==="gameover")return;const i=new zn(n).apply(this,this.currentPlayer);this.log(i,this.currentPlayer),this.abilityOffers=[],this.phase!=="fusion"&&(this.phase=this.currentPlayer==="player"?"action":"ai"),t||this.notify()}getPendingMechaUpgradeCard(){if(!this.pendingMechaUpgrade)return null;const e=this.board.getPiece(this.pendingMechaUpgrade.pieceId);return e?{pieceId:e.id,pieceName:this.getPieceDisplayName(e),upgrade:this.pendingMechaUpgrade.upgrade,name:bn[this.pendingMechaUpgrade.upgrade],description:wl[this.pendingMechaUpgrade.upgrade],artLabel:Al[this.pendingMechaUpgrade.upgrade],rarity:Rl[this.pendingMechaUpgrade.upgrade]}:null}getPieceDisplayName(e){return e.type==="hyperMecha"&&e.mechaTier>=2?"ハイパーメカⅡ型":e.definition.name}claimMechaUpgrade(){if(this.phase!=="mechaUpgrade"||this.currentPlayer!=="player"||!this.pendingMechaUpgrade)return;const e=this.pendingMechaUpgrade;this.pendingMechaUpgrade=null;const t=this.board.getPiece(e.pieceId);let n=!1;t&&t.owner==="player"&&t.type==="hyperMecha"&&(n=this.applyHyperMechaUpgrade(t,e.upgrade),t.mechUpgradeCooldown=3),!n&&this.continueTurnAfterMechaUpgrades("player")}selectPiece(e){if(this.phase!=="action"&&this.phase!=="ai")return;const t=this.board.getPiece(e);if(!t||t.owner!==this.currentPlayer){this.selectedPieceId=null,this.notify();return}this.selectedPieceId=t.id,this.notify()}handleBoardClick(e,t){if(this.phase==="fusion"&&this.currentPlayer==="player"){if(!t)return;this.toggleFusionSelection(t);return}if(this.phase!=="action"||this.currentPlayer!=="player")return;if(t){const r=this.board.getPiece(t);if(!r)return;if(r.owner==="player"){this.selectPiece(r.id);return}}const n=this.board.getPiece(this.selectedPieceId);if(!n)return;const i=this.getMoveOptions(n.id).find(r=>r.to.x===e.x&&r.to.y===e.y);i&&this.performMove(i)}getMoveOptions(e){const t=this.board.getPiece(e);if(!t||!t.canAct)return[];const n=this.board.getLegalMoves(t);if(t.type==="god"&&t.specialCooldown<=0)for(const i of this.board.getPieces(this.getOpponent(t.owner)))ws(t.position,i.position)>3||n.push({to:{...i.position},kind:"special",targetPieceId:i.id,label:"近距離消滅",specialType:"godBanish"});if(t.type==="hyperMecha"&&t.mechaTier===1&&t.hasMechUpgrade("totalAnnihilation"))for(const i of this.board.getPieces(this.getOpponent(t.owner)))i.type!=="king"&&n.push({to:{...i.position},kind:"special",targetPieceId:i.id,label:`${i.definition.name}タイプ殲滅`,specialType:"typeAnnihilation"});if(t.type==="hyperMecha"&&t.mechaTier>=2&&t.hasMechUpgrade("electroAnchor")&&t.specialCooldown<=0)for(const i of this.board.getPieces(this.getOpponent(t.owner)))i.type!=="king"&&(ws(t.position,i.position)>4||n.push({to:{...i.position},kind:"special",targetPieceId:i.id,label:"超電磁アンカー",specialType:"electroAnchor"}));if(t.type==="hyperMecha"&&t.mechaTier>=2&&t.hasMechUpgrade("satelliteAim"))for(let i=0;i<=this.board.size-4;i+=1)for(let r=0;r<=this.board.size-4;r+=1){const o={x:r,y:i};this.isSatelliteTargetAllowed(o,4)&&this.getPiecesInArea(o,4).some(a=>a.type!=="king")&&n.push({to:o,kind:"special",label:"衛星照準",specialType:"satelliteAim",areaSize:4})}return n}performMove(e){const t=this.board.getPiece(this.selectedPieceId);if(!t||this.phase==="gameover")return;const n={...t.position};if(e.kind==="special"&&t.type==="god"&&e.targetPieceId){const r=this.board.getPiece(e.targetPieceId);r&&(this.log(`神が${r.definition.name}を消滅させました。`,t.owner),this.lastMove={from:n,to:{...r.position},owner:t.owner,pieceName:t.definition.name},t.specialCooldown=3,this.destroyPiece(r.id,"god",t.owner)),this.afterPieceAction(t);return}if(e.kind==="special"&&t.type==="hyperMecha"&&t.mechaTier>=2&&e.specialType==="electroAnchor"&&e.targetPieceId){const r=this.board.getPiece(e.targetPieceId);if(!r||r.owner===t.owner||r.type==="king")return;r.stunnedTurns=Math.max(r.stunnedTurns,1),r.movePenalty+=2,t.specialCooldown=2,this.log(`${this.getPieceDisplayName(t)}が${r.definition.name}を超電磁アンカーで拘束しました。`,t.owner),this.emitVisualEffect({kind:"combat",coord:{...r.position},owner:t.owner}),this.lastMove={from:n,to:{...r.position},owner:t.owner,pieceName:this.getPieceDisplayName(t)},this.afterPieceAction(t);return}if(e.kind==="special"&&t.type==="hyperMecha"&&t.mechaTier>=2&&e.specialType==="satelliteAim"){const r=e.areaSize??4;if(!this.isSatelliteTargetAllowed(e.to,r))return;const o=this.getPiecesInArea(e.to,r).filter(a=>a.type!=="king");for(const a of o)this.destroyPiece(a.id,"satellite",t.owner);t.mechUpgrades=t.mechUpgrades.filter(a=>a!=="satelliteAim"),this.emitVisualEffect({kind:"satelliteStrike",coord:{...e.to},owner:t.owner,amount:r}),this.log(`${this.getPieceDisplayName(t)}が衛星照準を実行しました。4x4範囲の${o.length}体が消滅します。`,t.owner),this.recordMechaKills(t,o.filter(a=>a.owner!==t.owner).length),this.lastMove={from:n,to:{...e.to},owner:t.owner,pieceName:this.getPieceDisplayName(t)},this.afterPieceAction(t);return}if(e.kind==="special"&&t.type==="hyperMecha"&&t.mechaTier===1&&e.specialType==="typeAnnihilation"&&t.hasMechUpgrade("totalAnnihilation")){const r=this.getOpponent(t.owner),o=this.board.getPiece(e.targetPieceId);if(!o||o.owner!==r||o.type==="king")return;const a=o.type,l=o.definition.name,c=this.board.getPieces(r).filter(h=>h.type===a);for(const h of c)this.destroyPiece(h.id,"annihilation",t.owner);t.mechUpgrades=t.mechUpgrades.filter(h=>h!=="totalAnnihilation"),this.log(`${this.getPieceDisplayName(t)}が全体殲滅を実行しました。敵の${l}タイプが${c.length}体消滅します。`,t.owner),this.recordMechaKills(t,c.length),this.lastMove={from:n,to:{...e.to},owner:t.owner,pieceName:this.getPieceDisplayName(t)},this.afterPieceAction(t);return}const{capturedPieces:i=[]}=this.board.movePiece(t.id,e.to);if(i.length>0){const r=i.map(o=>o.definition.name).join("、");this.log(`${this.getPieceDisplayName(t)}が${r}を取りました。`,t.owner);for(const o of i)this.emitVisualEffect({kind:"combat",coord:{...o.position},owner:t.owner}),this.resolveCaptureSideEffects(o,t.owner);if(t.type==="hyperMecha"&&t.hasMechUpgrade("kineticBlade")){const o=this.resolveKineticBlade(t.owner,e.to);this.recordMechaKills(t,i.length+o)}else this.recordMechaKills(t,i.length);t.type==="hyperMecha"&&t.mechaTier>=2&&t.hasMechUpgrade("reactorRampage")&&(this.damageBase(this.getOpponent(t.owner),5*i.length),this.log("反応炉暴走: 捕獲エネルギーが相手本拠地へ流れ込みました。",t.owner))}else this.log(`${this.getPieceDisplayName(t)}が移動しました。`,t.owner);this.lastMove={from:n,to:{...t.position},owner:t.owner,pieceName:this.getPieceDisplayName(t)},this.effects.applyTerrainOnEntry(t),this.resolvePawnEvolution(t),this.afterPieceAction(t)}finishAction(){const e=this.currentPlayer;if(this.effects.resolveEndTurn(e),this.checkVictory()){this.notify();return}this.selectedPieceId=null;const t=this.getOpponent(e);t===this.initiativeFirstPlayer&&(this.turnNumber+=1,this.towerRun.active&&(this.towerRun.floorTurn+=1)),this.beginTurn(t)}summonPiece(e,t){const n=this.board.findSummonSpot(e);if(!n)return null;const i=this.board.addPiece(t,e,n);return(i==null?void 0:i.type)==="iyanaYatsu"&&(i.specialCooldown=3),(i==null?void 0:i.type)==="god"&&(i.specialCooldown=2,this.emitVisualEffect({kind:"godSummon",coord:{...i.position},owner:e})),i}healBase(e,t){const n=this.bases[e];n.hp=Math.min(n.maxHp,n.hp+t)}damageBase(e,t){const n=this.bases[e],i=n.hp;n.hp=Math.max(0,n.hp-t),i>n.hp&&this.emitVisualEffect({kind:"baseDamage",owner:e,amount:i-n.hp}),this.checkVictory()}beginProcessExecution(e){this.processExecutionOwner=e,this.processExecutionHpPercent.player=this.getBaseHpPercent("player"),this.processExecutionHpPercent.ai=this.getBaseHpPercent("ai"),this.phase="processExecution",this.log("プロセス実行: チートコンソールが開きました。HPを書き換えられます。",e),this.notify()}adjustProcessExecutionHp(e,t){this.setProcessExecutionHp(e,this.processExecutionHpPercent[e]+t)}setProcessExecutionHp(e,t){const n=Math.max(10,Math.min(1e3,Math.round(t)));this.processExecutionHpPercent[e]=n,this.bases[e].hp=Math.round(this.bases[e].maxHp*n/100),this.log(`PROCESS: ${e} HP = ${n}%`,e),this.winner&&this.bases.player.hp>0&&this.bases.ai.hp>0&&this.board.getKing("player")&&this.board.getKing("ai")&&(this.winner=null),this.checkVictory(),this.notify()}finishProcessExecution(){const e=this.processExecutionOwner??this.currentPlayer;this.processExecutionOwner=null,this.phase!=="gameover"&&this.continueTurnAfterMechaUpgrades(e),this.notify()}addPassive(e,t){this.passives[e].add(t)}hasPassive(e,t){return this.passives[e].has(t)}getPassiveLabels(e){return[...this.passives[e]].map(fl)}canOfferAbility(e,t){return t.effect.type==="startFusion"?this.canStartHyperMechaFusion(e)&&this.getFusionCandidates(e).length>=5:t.effect.type!=="summon"||t.effect.pieceType!=="god"?!0:this.turnNumber>=6&&this.bases[e].hp>=80}canSummonPieceType(e,t,n=0){return n>0&&this.bases[e].hp<=n+5?!1:t!=="god"?!0:this.turnNumber>=6&&this.bases[e].hp>=80}raiseNextOffer(e){this.nextOfferBonus[e]=Math.min(2,this.nextOfferBonus[e]+1)}startHyperMechaFusion(e,t,n=!1){if(!this.isHyperMechaFusionUnlocked())return`${t}: ハイパーメカ融合は${Hr}ターン目から解禁です。序盤は通常戦力で布陣してください。`;if(!this.canCreateHyperMecha(e,n))return n?`${t}: USB例外でもハイパーメカは2機までです。`:`${t}: ハイパーメカは各陣営1機までです。USBチャンスなら2機目を融合できます。`;const i=this.getFusionCandidates(e);if(i.length<5)return`${t}: 自陣に融合できる非王将コマが5体必要です。`;if(e==="ai"){const r=i.sort((o,a)=>o.definition.score-a.definition.score).slice(0,5).map(o=>o.id);return this.completeHyperMechaFusion(e,r,n),`${t}: AIが5体を融合し、ハイパーメカ一型を作りました。`}return this.phase="fusion",this.fusionSelectionIds=[],this.fusionConsumesTicket=n,`${t}: 自陣の非王将コマを5体選択してください。`}startFusionFromTicket(e){if(this.mechFusionTickets[e]<=0||this.phase!=="action"||this.currentPlayer!==e||!this.canStartHyperMechaFusion(e,!0))return;const t=this.startHyperMechaFusion(e,"最強USB PRO MAX",!0);this.log(t,e),this.notify()}cancelFusionSelection(){this.phase==="fusion"&&(this.fusionSelectionIds=[],this.fusionConsumesTicket=!1,this.phase=this.currentPlayer==="player"?"action":"ai",this.log("融合選択をキャンセルしました。",this.currentPlayer),this.notify())}toggleFusionSelection(e){const t=this.board.getPiece(e);!t||!this.isFusionCandidate(t,this.currentPlayer)||(this.fusionSelectionIds.includes(t.id)?this.fusionSelectionIds=this.fusionSelectionIds.filter(n=>n!==t.id):this.fusionSelectionIds.length<5&&this.fusionSelectionIds.push(t.id),this.fusionSelectionIds.length===5&&(this.completeHyperMechaFusion(this.currentPlayer,this.fusionSelectionIds,this.fusionConsumesTicket),this.fusionSelectionIds=[],this.fusionConsumesTicket=!1,this.phase=this.currentPlayer==="player"?"action":"ai"),this.notify())}getFusionCandidates(e){return this.board.getPieces(e).filter(t=>this.isFusionCandidate(t,e))}hasHyperMecha(e){return this.getHyperMechaCount(e)>0}getHyperMechaCount(e){return this.board.getPieces(e).filter(t=>t.type==="hyperMecha").length}canCreateHyperMecha(e,t=!1){return this.getHyperMechaCount(e)<(t?2:1)}canStartHyperMechaFusion(e,t=!1){return this.isHyperMechaFusionUnlocked()&&this.canCreateHyperMecha(e,t)}isHyperMechaFusionUnlocked(){return this.turnNumber>=Hr}debugExecuteCommand(e){const t=e.trim();if(!t)return"DEBUG: command required.";const[n="",...i]=t.split(/\s+/);switch(n.toLowerCase()){case"help":return"commands: spawn [player|ai] <piece> [x y], card [player|ai] [abilityId...], mecha [player|ai] [upgrade], process [player], usb [player|ai] [count], terrain <type> [count] [owner], hp <owner> <amount>, enemyhp1, damage <owner> <amount>, turn <owner>, promote <owner>, tower [start|next|+5|floor|clear|boss] [floor], castle [start|next|+5|floor|clear|boss] [floor], save, load, clear";case"spawn":case"summon":return this.debugCommandSpawn(i);case"card":case"cards":case"ability":return this.debugCommandCards(i);case"mecha":case"mechacard":return this.debugCommandMechaUpgrade(i);case"event":return i[0]==="card"||i[0]==="ability"?this.debugCommandCards(i.slice(1)):i[0]==="mecha"?this.debugCommandMechaUpgrade(i.slice(1)):"DEBUG: usage event card [owner] or event mecha [owner] [upgrade]";case"process":case"exec":return this.beginProcessExecution(this.isPlayerId(i[0])?i[0]:"player"),"DEBUG: process execution console opened.";case"usb":return this.debugCommandUsb(i);case"terrain":case"tile":return this.debugCommandTerrain(i);case"hp":return this.debugCommandHp(i);case"enemyhp1":case"aihp1":case"hp1":return this.debugCommandEnemyHpOne();case"damage":return this.debugCommandDamage(i);case"turn":return this.debugCommandTurn(i);case"promote":case"promote-mecha":return this.debugCommandPromote(i);case"tower":case"building":return this.debugCommandTower(i);case"castle":case"demoncastle":return this.debugCommandDemonCastle(i);case"save":return`DEBUG: ${this.saveMetaProgress()}`;case"load":return`DEBUG: ${this.loadMetaProgress()}`;case"clear":return this.logs=[],this.notify(),"DEBUG: log cleared.";default:return`DEBUG: unknown command "${n}". Type help.`}}debugSpawnPiece(e,t,n){const i=n&&this.board.isInside(n)&&!this.board.getPieceAt(n)?n:this.board.findSummonSpot(e);if(!i)return`DEBUG: ${e} has no empty summon square.`;const r=this.board.addPiece(t,e,i);return r?(r.type==="iyanaYatsu"&&(r.specialCooldown=3),r.type==="god"&&(r.specialCooldown=2,this.emitVisualEffect({kind:"godSummon",coord:{...r.position},owner:e})),r.type==="hyperMecha"&&(r.mechUpgradeCooldown=0),this.log(`DEBUG: ${e}に${r.definition.name}を召喚しました。`,e),this.notify(),`DEBUG: spawned ${r.definition.name} for ${e} at ${r.position.x+1},${r.position.y+1}.`):`DEBUG: failed to spawn ${t}.`}debugTriggerAbilityCards(e,t=[]){const n=t.length>0?zn.fixedOffers(t.filter(i=>cs.some(r=>r.id===i)).slice(0,3)):zn.drawOffers(3,0);return n.length===0?"DEBUG: no valid ability cards.":(this.currentPlayer=e,this.selectedPieceId=null,this.pendingMechaUpgrade=null,this.abilityOffers=n,this.phase="ability",this.log(`DEBUG: ${e}の能力カードイベントを発生させました。`,e),this.notify(),`DEBUG: ability cards => ${n.map(i=>i.name).join(", ")}`)}debugTriggerMechaUpgrade(e,t){var r,o;let n=((r=this.board.getPiece(this.selectedPieceId))==null?void 0:r.owner)===e&&((o=this.board.getPiece(this.selectedPieceId))==null?void 0:o.type)==="hyperMecha"?this.board.getPiece(this.selectedPieceId):this.board.getPieces(e).find(a=>a.type==="hyperMecha");if(n||(this.debugSpawnPiece(e,"hyperMecha"),n=this.board.getPieces(e).find(a=>a.type==="hyperMecha")),!n)return`DEBUG: failed to prepare ${e} hyper mecha.`;const i=t??this.drawHyperMechaUpgrade(n);return this.isUpgradeAvailableForMecha(n,i)?e==="ai"?(this.applyHyperMechaUpgrade(n,i),n.mechUpgradeCooldown=3,this.notify(),`DEBUG: AI mecha gained ${bn[i]}.`):(this.currentPlayer=e,this.selectedPieceId=null,this.abilityOffers=[],this.pendingMechaUpgrade={pieceId:n.id,upgrade:i},this.phase="mechaUpgrade",this.log(`DEBUG: ${this.getPieceDisplayName(n)}の強化カードイベントを発生させました。`,e),this.notify(),`DEBUG: mecha upgrade card => ${bn[i]}`):`DEBUG: ${bn[i]} is ${this.describeMechaUpgradeRequirement(i)}.`}debugCommandSpawn(e){let t="player",n=0;this.isPlayerId(e[0])&&(t=e[0],n=1);const i=e[n];if(!this.isPieceType(i))return"DEBUG: usage spawn [player|ai] <pieceType> [x y]";const r=this.parseDebugCoord(e[n+1],e[n+2]);return this.debugSpawnPiece(t,i,r)}debugCommandCards(e){let t="player",n=e;return this.isPlayerId(e[0])&&(t=e[0],n=e.slice(1)),this.debugTriggerAbilityCards(t,n)}debugCommandMechaUpgrade(e){let t="player",n=0;this.isPlayerId(e[0])&&(t=e[0],n=1);const i=e[n];return i&&i!=="random"&&!this.isHyperMechaUpgrade(i)?"DEBUG: usage mecha [player|ai] [random|kineticBlade|simulator|usbProMax|totalAnnihilation|armorPurge|electroAnchor|reactorRampage|quantumBackup|satelliteAim|processExecution]":this.debugTriggerMechaUpgrade(t,this.isHyperMechaUpgrade(i)?i:void 0)}debugCommandUsb(e){let t="player",n=e[0];this.isPlayerId(e[0])&&(t=e[0],n=e[1]);const i=this.parseDebugInt(n,1);return this.mechFusionTickets[t]=Math.max(0,this.mechFusionTickets[t]+i),this.log(`DEBUG: ${t}のUSBチャンスを${i}増やしました。`,t),this.notify(),`DEBUG: ${t} USB tickets => ${this.mechFusionTickets[t]}.`}debugCommandTerrain(e){const t=e.find(a=>this.isTerrainType(a));if(!this.isTerrainType(t))return"DEBUG: usage terrain <heal|trap|warp|summon|divine|lava|curse> [count] [player|ai]";const n=e.find(a=>this.isPlayerId(a)),i=e.find(a=>/^\d+$/.test(a)),r=this.parseDebugInt(i,1),o=t==="warp"?this.placeWarpPair(r,n??this.currentPlayer):this.placeTerrain(t,r,n??this.currentPlayer);return this.log(`DEBUG: ${t}マスを${o}個生成しました。`,n??"system"),this.notify(),`DEBUG: placed ${o} ${t} terrain.`}debugCommandHp(e){const t=this.isPlayerId(e[0])?e[0]:void 0;if(!t)return"DEBUG: usage hp <player|ai> <value>";const n=this.parseDebugInt(e[1],this.bases[t].hp);return this.bases[t].hp=Math.max(0,Math.min(this.bases[t].maxHp,n)),this.checkVictory(),this.notify(),`DEBUG: ${t} HP => ${this.bases[t].hp}/${this.bases[t].maxHp}.`}debugCommandEnemyHpOne(){const e=this.bases.ai.hp;return this.bases.ai.hp=1,this.processExecutionHpPercent.ai=this.getBaseHpPercent("ai"),e>1&&this.emitVisualEffect({kind:"baseDamage",owner:"ai",amount:e-1}),this.log("DEBUG: 相手HPを強制的に1にしました。","danger"),this.notify(),`DEBUG: enemy HP forced to 1/${this.bases.ai.maxHp}.`}debugCommandDamage(e){const t=this.isPlayerId(e[0])?e[0]:void 0;if(!t)return"DEBUG: usage damage <player|ai> <amount>";const n=this.parseDebugInt(e[1],10);return this.damageBase(t,n),this.notify(),`DEBUG: damaged ${t} base by ${n}.`}debugCommandTurn(e){const t=this.isPlayerId(e[0])?e[0]:"player";return this.beginTurn(t),`DEBUG: began ${t} turn.`}debugCommandPromote(e){const t=this.isPlayerId(e[0])?e[0]:"player",n=this.board.getPieces(t).find(i=>i.type==="hyperMecha");return n?(n.mechaKillCount=Math.max(n.mechaKillCount,5),this.promoteHyperMecha(n),this.notify(),`DEBUG: promoted ${t} mecha.`):`DEBUG: ${t} has no hyper mecha.`}debugCommandDemonCastle(e){const t=e[0]??"start",n=()=>{this.isDemonCastleRun()||(this.demonCastleUnlocked=!0,this.unlockedHeroIds.add("demonVolunteer"),this.startDemonCastleRunWithHero(this.selectedHeroId??"demonVolunteer"))};if(t==="start")return n(),"DEBUG: started Demon Castle.";if(t==="next"||t==="+1")return n(),this.debugJumpTowerFloor(Math.min(Ln,this.towerRun.floor+1));if(t==="+5"||t==="skip5")return n(),this.debugJumpTowerFloor(Math.min(Ln,this.towerRun.floor+5));if(t==="floor"){n();const i=Math.max(1,Math.min(Ln,this.parseDebugInt(e[1],this.towerRun.floor||1)));return this.debugJumpTowerFloor(i)}if(/^\d+$/.test(t)){n();const i=Math.max(1,Math.min(Ln,this.parseDebugInt(t,this.towerRun.floor||1)));return this.debugJumpTowerFloor(i)}return t==="clear"?(n(),this.completeTowerFloor(),this.notify(),"DEBUG: cleared current Demon Castle floor."):t==="boss"?(n(),this.resolveTowerBossStartOfTurn(),this.notify(),"DEBUG: triggered Demon Castle boss event."):"DEBUG: usage castle [start|next|+5|floor|clear|boss] [floor]"}debugCommandTower(e){const t=e[0]??"start";if(t==="start")return this.startTowerRunWithHero(this.selectedHeroId??"uesugiKenshin"),"DEBUG: started Thirty Building.";if(t==="next"||t==="+1")return this.debugJumpTowerFloor(Math.min(on,(this.towerRun.active?this.towerRun.floor:0)+1));if(t==="+5"||t==="skip5")return this.debugJumpTowerFloor(Math.min(on,(this.towerRun.active?this.towerRun.floor:0)+5));if(t==="floor"){const n=Math.max(1,Math.min(on,this.parseDebugInt(e[1],this.towerRun.floor||1)));return this.debugJumpTowerFloor(n)}if(/^\d+$/.test(t)){const n=Math.max(1,Math.min(on,this.parseDebugInt(t,this.towerRun.floor||1)));return this.debugJumpTowerFloor(n)}return t==="clear"?this.towerRun.active?(this.completeTowerFloor(),this.notify(),"DEBUG: cleared current tower floor."):"DEBUG: tower is not active.":t==="boss"?this.towerRun.active?(this.resolveTowerBossStartOfTurn(),this.notify(),"DEBUG: triggered tower boss event."):"DEBUG: tower is not active.":"DEBUG: usage tower [start|next|+5|floor|clear|boss] [floor]"}debugJumpTowerFloor(e){return this.towerRun.active||(this.gameMode="thirtyBuilding",this.towerRun.active=!0,this.towerRun.maxFloor=on,this.bases.player.maxHp=Math.max(this.bases.player.maxHp,125),this.bases.player.hp=this.bases.player.maxHp),this.setupTowerFloor(e),this.currentPlayer="player",this.initiativeFirstPlayer="player",this.beginTurn("player"),this.notify(),`DEBUG: tower floor => ${e}F.`}parseDebugCoord(e,t){if(!e||!t)return;const n=Number(e),i=Number(t);if(!(!Number.isInteger(n)||!Number.isInteger(i)))return{x:n-1,y:i-1}}parseDebugInt(e,t){const n=Number(e);return Number.isFinite(n)?Math.trunc(n):t}isPlayerId(e){return e==="player"||e==="ai"}isPieceType(e){return!!e&&e in fi}isHyperMechaUpgrade(e){return e==="kineticBlade"||e==="simulator"||e==="usbProMax"||e==="totalAnnihilation"||e==="armorPurge"||e==="electroAnchor"||e==="reactorRampage"||e==="quantumBackup"||e==="satelliteAim"||e==="processExecution"}isTerrainType(e){return e==="heal"||e==="trap"||e==="warp"||e==="summon"||e==="divine"||e==="lava"||e==="curse"}getBaseHpPercent(e){return Math.max(10,Math.min(1e3,Math.round(this.bases[e].hp/this.bases[e].maxHp*100)))}getPiecesInArea(e,t){return this.board.getPieces().filter(n=>this.pieceIntersectsArea(n,e,t))}pieceIntersectsArea(e,t,n){return this.board.getFootprintCoords(e).some(i=>i.x>=t.x&&i.x<t.x+n&&i.y>=t.y&&i.y<t.y+n)}isSatelliteTargetAllowed(e,t){if(!this.board.isAreaInside(e,t))return!1;const n=this.board.getPieces().filter(i=>i.type==="king");for(const i of n)for(let r=e.y;r<e.y+t;r+=1)for(let o=e.x;o<e.x+t;o+=1)if(ws({x:o,y:r},i.position)<=1)return!1;return!0}isFusionCandidate(e,t){return e.owner!==t||e.type==="king"||e.type==="hyperMecha"?!1:this.isOwnTerritory(t,e.position)}getMechaUpgradeLabels(e){return e.mechUpgrades.map(t=>bn[t])}grantDoubleAction(e,t){const n=this.board.getPieces(e).filter(r=>r.canAct&&r.type!=="turret"),i=n[Math.floor(Math.random()*n.length)];return i?(i.extraActions+=1,`${t}: ${this.getPieceDisplayName(i)}が追加行動を得ました。`):`${t}: 対象にできるコマがありません。`}tryConvertEnemy(e,t){const n=this.getOpponent(e),r=this.board.getPieces(n).filter(o=>o.definition.score<=4&&o.type!=="king").sort((o,a)=>o.definition.score-a.definition.score)[0];return r?Math.random()>t?`駒の反乱: ${r.definition.name}は踏みとどまりました。`:(r.owner=e,`駒の反乱: ${r.definition.name}が寝返りました。`):"駒の反乱: 対象がいません。"}canUseBadMouthCommand(e){return this.phase==="action"&&this.currentPlayer===e&&!this.badMouthCommandUsed[e]&&this.board.getPieces(this.getOpponent(e)).some(t=>t.type==="iyanaYatsu")}useBadMouthCommand(e){if(!this.canUseBadMouthCommand(e))return;this.badMouthCommandUsed[e]=!0;const t=this.banishIyanaYatsu(e,1);this.log(t>0?"罵詈雑言コマンド: いやなやつが泣きべそをかいて逃げました。":"罵詈雑言コマンド: 叫び先がありませんでした。",e),this.notify()}banishIyanaYatsu(e,t=Number.POSITIVE_INFINITY){const n=this.getOpponent(e),i=this.board.getPieces(n).filter(r=>r.type==="iyanaYatsu").slice(0,t);for(const r of i)this.destroyPiece(r.id,"banish",e);return i.length}placeTerrain(e,t,n){let i=0,r=0;for(;i<t&&r<80;){r+=1;const o=this.board.randomEmptyCoord(n);o&&this.board.addTerrain(e,o,n)&&(i+=1)}return i}placeWarpPair(e,t){const n=Math.max(2,e%2===0?e:e+1);let i=0;for(let r=0;r<n/2;r+=1){const o=this.board.randomEmptyCoord(t),a=this.board.randomEmptyCoord(this.getOpponent(t));if(!o||!a)continue;const l=this.board.addTerrain("warp",o,t),c=this.board.addTerrain("warp",a,t);!l||!c||(l.pairedId=c.id,c.pairedId=l.id,i+=2)}return i}destroyPiece(e,t,n){const i=this.board.removePiece(e);if(i){if(i.type==="hyperMecha"&&i.mechaTier>=2&&i.hasMechUpgrade("quantumBackup")){i.mechUpgrades=i.mechUpgrades.filter(o=>o!=="quantumBackup");const r=this.board.findNearestPlacementForFootprint(i.position,i.footprintSize);if(r){i.position=r,i.hp=i.maxHp,this.board.pieces.set(i.id,i),this.emitVisualEffect({kind:"fusion",coord:{...i.position},owner:i.owner}),this.log("量子バックアップが発動。ハイパーメカが消滅を巻き戻しました。",i.owner);return}}t!=="banish"&&this.emitVisualEffect({kind:"combat",coord:{...i.position},owner:n??this.getOpponent(i.owner)}),i.type==="iyanaYatsu"&&t!=="banish"&&t!=="annihilation"&&t!=="satellite"&&t!=="demonAttack"&&this.resolveIyanaYatsuDefeat(i,n??this.getOpponent(i.owner)),i.type==="king"&&(this.winner=this.getOpponent(i.owner),this.phase="gameover",this.log(`${i.definition.name}が倒されました。`,"danger")),i.type==="god"&&(this.board.getPieces(i.owner).forEach(r=>{r.weakenedTurns=Math.max(r.weakenedTurns,2)}),this.log("神が倒れ、味方全体が弱体化しました。","danger")),t!=="capture"&&t!=="banish"&&(this.board.lastDefeatedEnemyType=i.type)}}isSquareDangerous(e,t){const n=this.getOpponent(t);return this.board.getPieces(n).some(r=>r.type==="turret"&&Math.max(Math.abs(r.position.x-e.x),Math.abs(r.position.y-e.y))<=2)?!0:this.board.getPieces(n).some(r=>this.board.getLegalMoves(r).some(o=>o.to.x===e.x&&o.to.y===e.y))}afterPieceAction(e){if(this.checkVictory()){this.notify();return}if(e.extraActions>0){e.extraActions-=1,this.selectedPieceId=null,this.log(`${this.getPieceDisplayName(e)}はまだ追加行動できます。`,e.owner),this.notify(),e.owner==="ai"&&(this.aiTimer=window.setTimeout(()=>this.ai.takeTurn(),520));return}this.finishAction()}resolveCaptureSideEffects(e,t){e.type==="king"&&(this.winner=this.getOpponent(e.owner),this.phase="gameover"),e.type==="iyanaYatsu"&&this.resolveIyanaYatsuDefeat(e,t),e.type==="god"&&(this.board.getPieces(e.owner).forEach(n=>{n.weakenedTurns=Math.max(n.weakenedTurns,2)}),this.log("神が討たれ、眷属の力が霧散しました。","danger"))}resolveIyanaYatsuDefeat(e,t){const n=this.board.getKing(t);if(!n)return;n.stunnedTurns=Math.max(n.stunnedTurns,1),n.movePenalty+=1;const i=this.board.findNearestEmptyTo(n.position);if(i){const a=this.board.addPiece("iyanaYatsu",e.owner,i);a&&(a.specialCooldown=3)}const r=["うんちぷり～ん","このおしり、ふいてないよ","ほれ、匂ってみ？"],o=r[Math.floor(Math.random()*r.length)];this.log(`いやなやつが相手陣地へ逃げ込み、王将にうんちを投げつけました。「${o}」王将は次の行動が制限されます。`,"danger")}completeHyperMechaFusion(e,t,n){if(!this.canCreateHyperMecha(e,n))return null;const i=t.map(a=>this.board.getPiece(a)).filter(a=>a!==void 0).filter(a=>this.isFusionCandidate(a,e));if(i.length<5)return null;n&&this.mechFusionTickets[e]>0&&(this.mechFusionTickets[e]-=1);const r={...i[0].position};for(const a of i.slice(0,5))this.board.removePiece(a.id);const o=this.board.addPiece("hyperMecha",e,r);return o?(o.mechUpgradeCooldown=3,o.mechaKillCount=0,o.mechaTier=1,o.hp=o.maxHp,this.emitVisualEffect({kind:"fusion",coord:{...o.position},owner:e}),this.log("5体のコマが融合し、ハイパーメカ一型が起動しました。",e),o):null}createPendingHyperMechaUpgrade(e){const t=this.board.getPieces(e).filter(n=>n.type==="hyperMecha"&&n.mechUpgradeCooldown<=0).sort((n,i)=>n.id.localeCompare(i.id))[0];return t?{pieceId:t.id,upgrade:this.drawHyperMechaUpgrade(t)}:null}processHyperMechaUpgrades(e){for(const t of this.board.getPieces(e).filter(n=>n.type==="hyperMecha")){if(t.mechUpgradeCooldown>0)continue;const n=this.drawHyperMechaUpgrade(t);this.applyHyperMechaUpgrade(t,n),t.mechUpgradeCooldown=3}}drawHyperMechaUpgrade(e){const t=[];return e.hasMechUpgrade("kineticBlade")||t.push(...Array(5).fill("kineticBlade")),e.hasMechUpgrade("simulator")||t.push(...Array(4).fill("simulator")),t.push(...Array(3).fill("usbProMax")),e.mechaTier===1?e.hasMechUpgrade("totalAnnihilation")||t.push("totalAnnihilation"):(e.hasMechUpgrade("armorPurge")||t.push(...Array(4).fill("armorPurge")),e.hasMechUpgrade("electroAnchor")||t.push(...Array(4).fill("electroAnchor")),e.hasMechUpgrade("reactorRampage")||t.push(...Array(3).fill("reactorRampage")),e.hasMechUpgrade("quantumBackup")||t.push(...Array(2).fill("quantumBackup")),e.hasMechUpgrade("satelliteAim")||t.push("satelliteAim"),this.isTowerBossBattle()||t.push(...Array(2).fill("processExecution"))),t[Math.floor(Math.random()*t.length)]??"usbProMax"}applyHyperMechaUpgrade(e,t){return this.isUpgradeAvailableForMecha(e,t)?t==="usbProMax"?(this.mechFusionTickets[e.owner]+=1,this.log("ハイパーメカ強化: 最強USB PRO MAX。もう一度ハイパーメカを作るチャンスを得ました。",e.owner),!1):t==="processExecution"?e.owner==="player"?(this.beginProcessExecution(e.owner),!0):(this.setProcessExecutionHp("ai",150),this.setProcessExecutionHp("player",80),this.log("AIプロセス実行: HPプロセスを書き換えました。","danger"),!1):(t==="armorPurge"&&(e.extraActions+=1,e.hp=Math.max(1,e.hp-1)),t==="reactorRampage"&&(e.hp=Math.max(1,e.hp-1)),e.hasMechUpgrade(t)||e.mechUpgrades.push(t),this.log(`ハイパーメカ強化: ${bn[t]}を獲得しました。`,e.owner),!1):(this.log(`${bn[t]}は${this.describeMechaUpgradeRequirement(t)}です。`,e.owner),!1)}isUpgradeAvailableForMecha(e,t){return t==="processExecution"&&this.isTowerBossBattle()?!1:Gr.includes(t)?e.mechaTier>=2:Rs.includes(t)?e.mechaTier===1:!0}describeMechaUpgradeRequirement(e){return e==="processExecution"&&this.isTowerBossBattle()?"サーティビルディングのボス戦では無効":Gr.includes(e)?"ハイパーメカⅡ型専用":Rs.includes(e)?"ハイパーメカ一型専用":"使用可能"}isTowerBossBattle(){return this.towerRun.active&&this.towerRun.isBossFloor}isDemonCastleRun(){return this.towerRun.active&&this.towerRun.mode==="demonCastle"}getDemonCastleExpToNext(e){return 45+e*25}grantDemonCastleExp(e){if(!this.isDemonCastleRun())return;const n=Bt[e]?90+e*8:26+e*3;for(this.towerRun.playerExp+=n,this.log(`経験値 +${n}。魔王城レベル ${this.towerRun.playerLevel} / EXP ${this.towerRun.playerExp}/${this.towerRun.playerExpToNext}`,"player");this.towerRun.playerExp>=this.towerRun.playerExpToNext;)this.towerRun.playerExp-=this.towerRun.playerExpToNext,this.towerRun.playerLevel+=1,this.towerRun.playerExpToNext=this.getDemonCastleExpToNext(this.towerRun.playerLevel),this.bases.player.maxHp+=18,this.bases.player.hp=Math.min(this.bases.player.maxHp,this.bases.player.hp+28),this.log(`レベルアップ！ Lv.${this.towerRun.playerLevel} / 共有HP最大値+18。`,"player"),this.towerRun.playerLevel%5===0&&this.log(`Lv.${this.towerRun.playerLevel}到達。毎ターンの能力カード候補が${this.getAbilityOfferCount("player")}枚に増えました。`,"player")}resolveDemonCastleAllyAttack(){if(!this.towerRun.demonAttackUnlocked||this.towerRun.demonAttackRank<=0)return;const e=this.towerRun.demonAttackRank,t=Math.max(1,this.towerRun.demonAttackPower);let n=0;for(let r=0;r<e;r+=1){const o=this.board.getPieces("ai").filter(a=>a.type!=="king").sort((a,l)=>l.definition.score-a.definition.score)[0];o?(this.destroyPiece(o.id,"demonAttack","player"),this.emitVisualEffect({kind:"combat",coord:{...o.position},owner:"player"}),n+=1):this.damageBase("ai",t)}const i=t*e;this.damageBase("ai",i),this.towerRun.bossQuote=`魔人攻撃 ${e}回 / 威力${t}`,this.log(`魔人攻撃: ${e}回発動。敵コマ${n}体を討ち、敵HPへ${i}ダメージ。`,"player")}recordMechaKills(e,t){e.type!=="hyperMecha"||t<=0||e.mechaTier>=2||(e.mechaKillCount+=t,e.mechaKillCount>=5&&this.promoteHyperMecha(e))}promoteHyperMecha(e){const t=this.board.findNearestPlacementForFootprint(e.position,2,e.id);if(!t){this.log("ハイパーメカⅡ型への変身スペースが足りません。周囲を空けると次の撃破で再試行します。",e.owner),e.mechaKillCount=4;return}e.position=t,e.mechaTier=2,e.mechUpgrades=e.mechUpgrades.filter(n=>!Rs.includes(n)),e.maxHp=Math.max(e.maxHp,8),e.hp=e.maxHp,this.emitVisualEffect({kind:"mechaTransform",coord:{...e.position},owner:e.owner}),this.log("累計5撃破達成。ハイパーメカ一型が4マス占有のハイパーメカⅡ型へ変身しました。",e.owner)}resolveKineticBlade(e,t){const n=this.getOpponent(e),i=this.board.getPieces(n).filter(r=>Tl(r.position,t)<=1&&!(r.position.x===t.x&&r.position.y===t.y));for(const r of i)this.destroyPiece(r.id,"capture",e);return i.length>0&&this.log(`キネティックブレイドが隣接する敵${i.length}体を巻き込みました。`,e),i.length}isOwnTerritory(e,t){return e==="player"?t.y>=this.board.size-3:t.y<=2}resolvePawnEvolution(e){const t=e.owner==="player"?e.position.y<=2:e.position.y>=this.board.size-3;if(e.type!=="pawn"||!t||!this.hasPassive(e.owner,"pawnEvolution"))return;const n=this.board.getImplementedEvolutionType(),i=this.board.replacePiece(e,n);this.selectedPieceId=i.id,this.log(`歩兵が${i.definition.name}へ進化しました。`,i.owner)}completeTowerFloor(){var o;const e=this.towerRun.floor,t=this.isDemonCastleRun();this.towerRun.clearedFloors=Math.max(this.towerRun.clearedFloors,e),this.winner=null,this.phase="setup",this.selectedPieceId=null;const n=t?Ts(e):bs(e),i=t?10+n*3+Math.floor(this.towerRun.playerLevel/2):8+n*2+this.countTowerReward("階層修理班")*5;if(this.healBase("player",i),this.towerRun.lastFloorResult=`${e}F cleared / 共有HP +${i}`,this.log(`${e}Fクリア。共有HPが${i}回復しました。`,"player"),t&&this.grantDemonCastleExp(e),e%5===0){const a=t?30+n*7:22+n*4;if(this.healBase("player",a),t)this.resolveDemonCastleBossReward(e);else{const l=this.grantTowerReward();this.log(`中ボス撃破報酬: ${l.name} - ${l.description}`,"player")}this.log(`5階層ボーナス。共有HPがさらに${a}回復しました。`,"player")}if(!t&&e%10===0){const a=this.pickTowerRestSpot();this.towerRun.lastRestSpot=a,this.bases.player.hp=this.bases.player.maxHp,this.log(`休憩スポット: ${a.name} ☆${a.rarity}。${a.description}`,"system")}if(e>=this.towerRun.maxFloor){if(this.winner="player",this.phase="gameover",t){this.towerRun.bossScenario=((o=Bt[e])==null?void 0:o.scenarioAfter)??"乗っ取られ魔王城は解放されました。",this.log("乗っ取られ魔王城を完全制覇。玉座の呪いが解けました。","player"),this.log("真魔王ボランティアを撃破。魔王城は取り戻されました。","system");return}this.towerRun.conquestEventUnlocked=!0,this.unlockedHeroIds.add("demonVolunteer"),this.towerConquered=!0,this.demonCastleUnlocked=!0,this.persistMetaProgress("完全制覇を自動セーブしました。"),this.log("サーティビルディング完全制覇。屋上の風がやたら気持ちいいです。","player"),this.log("魔王ボランティアがメインキャラクターとして使用可能になりました。乗っ取られ魔王城への挑戦権も開放されています。","system");return}const r=t?this.getNextDemonCastleFloor(e):e+1;this.setupTowerFloor(r),this.currentPlayer="player",this.initiativeFirstPlayer="player",this.beginTurn("player")}resolveDemonCastleBossReward(e){const t=Bt[e];if(t){if(this.towerRun.bossScenario=t.scenarioAfter,this.log(t.scenarioAfter,"system"),t.demonAttackGain<=0){this.log(`${t.name}は仲間になりませんでした。魔人攻撃の強化はありません。`,"danger");return}this.towerRun.demonAttackUnlocked=!0,this.towerRun.demonAttackRank+=t.demonAttackGain,this.towerRun.demonAttackPower=8+this.towerRun.demonAttackRank*5,this.towerRun.permanentRewards.push(`${t.name}の魔力`),this.log(`${t.name}が協力。魔人攻撃 Rank ${this.towerRun.demonAttackRank} / ${this.towerRun.demonAttackRank}回攻撃 / 威力${this.towerRun.demonAttackPower}になりました。`,"player")}}getNextDemonCastleFloor(e){const t=Math.min(this.towerRun.maxFloor,e+1);if(t>=this.towerRun.maxFloor||Math.random()>=.18)return t;const n=Math.min(this.towerRun.maxFloor,e+4);let i=n;for(let r=t;r<=n;r+=1)if(kr(r)){i=r;break}return i<=t?t:(this.towerRun.elevatorNotice=`古い魔王城エレベーターを発見。${t}Fから${i}Fへ移動します。ボス階は回避できません。`,this.log(this.towerRun.elevatorNotice,"system"),i)}grantTowerReward(){const e=Br.filter(i=>!this.towerRun.permanentRewards.includes(i.name)),t=e.length>0?e:Br,n=t[Math.floor(Math.random()*t.length)];return this.towerRun.permanentRewards.push(n.name),n.id==="sharedHpFrame"?(this.bases.player.maxHp+=25,this.bases.player.hp+=25):n.id==="premiumOfferDesk"?this.raiseNextOffer("player"):n.id==="emergencyUsb"?this.mechFusionTickets.player+=1:n.id==="towerCurryTicket"?this.healBase("player",35):n.id==="antiNuisancePoster"&&this.banishIyanaYatsu("player",1),n}countTowerReward(e){return this.towerRun.permanentRewards.filter(t=>t===e).length}pickTowerRestSpot(){const e=Fr.flatMap(t=>Array.from({length:t.rarity},()=>t));return e[Math.floor(Math.random()*e.length)]??Fr[0]}resolveTowerBossStartOfTurn(){if(!this.towerRun.active||!this.towerRun.isBossFloor)return;if(this.isDemonCastleRun()){this.resolveDemonCastleBossStartOfTurn();return}const e=this.towerRun.floor;if(e===15&&this.towerRun.floorTurn%2===0){this.showEnemySkillBanner("風洞転線","瑞風"),this.placeWarpPair(2,"ai"),this.towerRun.bossQuote="瑞風が線路を組み替えた。",this.log("瑞風: 風圧で盤面がつながり、ワープマスが追加されました。","danger");return}if(e===20&&this.towerRun.floorTurn%2===0){this.showEnemySkillBanner("四季回廊","四季島");const t=["heal","trap","lava","divine"];this.placeTerrain(t[this.towerRun.floorTurn%t.length],1,"ai"),this.healBase("ai",Math.round(this.bases.ai.maxHp*.04)),this.towerRun.bossQuote="四季島が季節を一つ進めた。",this.log("四季島: 季節のマスが増え、ボスHPが少し戻りました。","danger");return}if(e===25&&this.towerRun.floorTurn%3===0){this.showEnemySkillBanner("七星墜とし","七星");const t=this.board.getPieces("player").find(n=>n.type!=="king");t&&this.destroyPiece(t.id,"annihilation","ai"),this.damageBase("player",12),this.towerRun.bossQuote="七星が星を一つ落とした。",this.log("七星: 星落とし。王将以外の1体と共有HPに圧がかかりました。","danger");return}if(e===30){this.resolveKatsudonBossTurn();return}e===31&&this.resolveDemonVolunteerTurn()}resolveKatsudonBossTurn(){const e=this.bases.ai.hp<=this.bases.ai.maxHp*.35,t=["カレーが効いてきただっち！","横一列いただくだっち！","まだまだ登れるだっち！"],n=e?"うがー！":t[Math.floor(Math.random()*t.length)];this.towerRun.bossQuote=n;const i=Math.round(this.bases.ai.maxHp*.035);if(this.showEnemySkillBanner(e?"怒りの大盛りカレー":"カレー補給","冒険者カツドン"),this.healBase("ai",i),this.log(`冒険者カツドン: ${n} カレーを食べてHPが${i}回復。`,e?"danger":"ai"),this.towerRun.floorTurn%3!==0)return;this.showEnemySkillBanner("超究覇斬","冒険者カツドン");const r=this.pickPlayerStrikeRow(),o=this.board.getPieces("player").filter(a=>a.type!=="king"&&this.board.getFootprintCoords(a).some(l=>l.y===r));for(const a of o)this.destroyPiece(a.id,"annihilation","ai");for(let a=0;a<this.board.size;a+=1)this.emitVisualEffect({kind:"combat",coord:{x:a,y:r},owner:"ai"});this.damageBase("player",30),this.log(`超究覇斬！ ${r+1}段目の王将以外${o.length}体が消滅し、リーダーに30ダメージ。`,"danger")}resolveDemonVolunteerTurn(){const e=this.towerRun.floorTurn%3;if(e===0){this.showEnemySkillBanner("魔王の風","魔王ボランティア"),this.damageBase("player",35),this.placeTerrain("curse",2,"ai"),this.towerRun.bossQuote="魔王の風",this.log("魔王ボランティア: 魔王の風。共有HPに35ダメージ、呪いマス追加。","danger");return}if(e===1){this.showEnemySkillBanner("親切な支配","魔王ボランティア");const t=this.board.getPieces("player").filter(n=>n.type!=="king").slice(0,2);for(const n of t)n.stunnedTurns=Math.max(n.stunnedTurns,1),this.emitVisualEffect({kind:"combat",coord:{...n.position},owner:"ai"});this.towerRun.bossQuote="親切な支配",this.log("魔王ボランティア: 親切な支配。王将以外2体を拘束しました。","danger");return}this.showEnemySkillBanner("無償増援","魔王ボランティア"),this.addTowerEnemyPiece("iyanaYatsu"),this.addTowerEnemyPiece("turret"),this.towerRun.bossQuote="無償増援",this.log("魔王ボランティア: 無償増援。いやな奴とタレットを追加しました。","danger")}resolveDemonCastleBossStartOfTurn(){const e=this.towerRun.floor,t=Bt[e];if(t){if(e===5&&this.towerRun.floorTurn%2===0){this.showEnemySkillBanner(t.skillName,t.name),this.damageBase("player",14),this.placeTerrain("trap",1,"ai"),this.towerRun.bossQuote="アメッサーが城門へ魔雨斧を落とした。",this.log("魔人アメッサー: 魔雨斧。共有HPへ14ダメージ、罠マス追加。","danger");return}if(e===10&&this.towerRun.floorTurn%2===0){this.showEnemySkillBanner(t.skillName,t.name),this.damageBase("player",18),this.placeTerrain("lava",2,"ai"),this.towerRun.bossQuote="シュミットの炉が燃え上がった。",this.log("魔人シュミット: 炎魔炉。共有HPへ18ダメージ、溶岩マス追加。","danger");return}if(e===15&&this.towerRun.floorTurn%2===0){this.showEnemySkillBanner(t.skillName,t.name),this.healBase("ai",Math.round(this.bases.ai.maxHp*.04));const n=this.board.getPieces("player").find(i=>i.type!=="king");n&&(n.stunnedTurns=Math.max(n.stunnedTurns,1),this.emitVisualEffect({kind:"combat",coord:{...n.position},owner:"ai"})),this.towerRun.bossQuote="秋水が水路で味方の足を止めた。",this.log("魔人秋水: 秋水縛り。敵HPを回復し、王将以外1体を拘束。","danger");return}if(e===20&&this.towerRun.floorTurn%3===0){this.resolveDemonKatsudonTurn(t.name,t.skillName);return}if(e===25&&this.towerRun.floorTurn%2===0){this.showEnemySkillBanner(t.skillName,t.name),this.placeTerrain("trap",2,"ai"),this.addTowerEnemyPiece("turret"),this.damageBase("player",16),this.towerRun.bossQuote="バルザックが城の予算で罠を増やした。",this.log("魔将バルザック: 赤字決算罠。罠とタレット追加、共有HPへ16ダメージ。","danger");return}if(e===30&&this.towerRun.floorTurn%3===0){this.resolveBushinKatsudonTurn(t.name,t.skillName);return}if(e===35){this.resolveGalleonTurn(t.name,t.skillName);return}e===40&&this.resolveTrueDemonVolunteerTurn(t.name,t.skillName)}}resolveDemonKatsudonTurn(e,t){this.showEnemySkillBanner(t,e);let n=0;for(let r=0;r<8;r+=1)n+=1+Math.floor(Math.random()*5);this.damageBase("player",n);const i=this.destroyPlayerColumns(2);this.towerRun.bossQuote="超究魔人覇斬",this.log(`${e}: 超究魔人覇斬。1-5ダメージを8回、合計${n}ダメージ。縦二列から${i}体消滅。`,"danger")}resolveBushinKatsudonTurn(e,t){this.showEnemySkillBanner(t,e);let n=0;for(let o=0;o<10;o+=1)n+=3+Math.floor(Math.random()*6);this.damageBase("player",n);const i=this.destroyPlayerColumns(1),r=this.destroyPlayerRows(1);this.addTowerEnemyPiece("iyanaYatsu"),this.towerRun.bossQuote="超究武神覇斬",this.log(`${e}: 超究武神覇斬。合計${n}ダメージ、縦横の斬撃で${i+r}体消滅。`,"danger")}resolveGalleonTurn(e,t){const n=this.towerRun.floorTurn%3;if(this.showEnemySkillBanner(t,e),n===0){this.damageBase("player",34),this.placeTerrain("curse",2,"ai"),this.addTowerEnemyPiece("divineVassal"),this.towerRun.bossQuote="上位魔王の風",this.log(`${e}: 上位魔王の風。共有HPへ34ダメージ、呪いマスと眷属追加。`,"danger");return}if(n===1){this.healBase("ai",Math.round(this.bases.ai.maxHp*.05)),this.placeTerrain("divine",1,"ai"),this.towerRun.bossQuote="親切な上位支配",this.log(`${e}: 親切な上位支配。敵HP回復、神域追加。`,"danger");return}this.addTowerEnemyPiece("turret"),this.addTowerEnemyPiece("jujutsushi"),this.towerRun.bossQuote="無償防衛軍",this.log(`${e}: 無償防衛軍。タレットと呪術師を追加。`,"danger")}resolveTrueDemonVolunteerTurn(e,t){if(this.showEnemySkillBanner(t,e),this.towerRun.demonAttackRank<5){const i=Math.round(this.bases.ai.maxHp*.05);this.healBase("ai",i),this.towerRun.bossQuote="真魔王再臨: 魔人攻撃が足りない",this.log(`${e}: 真魔王再臨。魔人攻撃の協力が足りず、敵HPが${i}回復しました。`,"danger")}else this.towerRun.bossQuote="真魔王再臨",this.log(`${e}: 真魔王再臨。魔人攻撃が結界を削っています。`,"danger");this.damageBase("player",28+Math.max(0,5-this.towerRun.demonAttackRank)*8),this.placeTerrain("curse",1,"ai"),this.placeTerrain("divine",1,"ai"),this.towerRun.floorTurn%3===0&&(this.addTowerEnemyPiece("god"),this.destroyPlayerRows(1))}destroyPlayerColumns(e){const t=this.getPlayerKingProtectionCoords(),n=Array.from({length:this.board.size},(r,o)=>({column:o,score:this.board.getPieces("player").filter(a=>a.type!=="king"&&this.board.getFootprintCoords(a).some(l=>l.x===o&&!t.has(`${l.x},${l.y}`))).length})).sort((r,o)=>o.score-r.score).slice(0,e).map(r=>r.column);let i=0;for(const r of this.board.getPieces("player"))r.type==="king"||!this.board.getFootprintCoords(r).some(a=>n.includes(a.x)&&!t.has(`${a.x},${a.y}`))||(this.destroyPiece(r.id,"annihilation","ai"),i+=1);for(const r of n)for(let o=0;o<this.board.size;o+=1)this.emitVisualEffect({kind:"combat",coord:{x:r,y:o},owner:"ai"});return i}destroyPlayerRows(e){const t=this.getPlayerKingProtectionCoords(),n=Array.from({length:this.board.size},(r,o)=>({row:o,score:this.board.getPieces("player").filter(a=>a.type!=="king"&&this.board.getFootprintCoords(a).some(l=>l.y===o&&!t.has(`${l.x},${l.y}`))).length})).sort((r,o)=>o.score-r.score).slice(0,e).map(r=>r.row);let i=0;for(const r of this.board.getPieces("player"))r.type==="king"||!this.board.getFootprintCoords(r).some(a=>n.includes(a.y)&&!t.has(`${a.x},${a.y}`))||(this.destroyPiece(r.id,"annihilation","ai"),i+=1);for(const r of n)for(let o=0;o<this.board.size;o+=1)this.emitVisualEffect({kind:"combat",coord:{x:o,y:r},owner:"ai"});return i}getPlayerKingProtectionCoords(){const e=new Set,t=this.board.getKing("player");if(!t)return e;for(let n=t.position.y-1;n<=t.position.y+1;n+=1)for(let i=t.position.x-1;i<=t.position.x+1;i+=1)e.add(`${i},${n}`);return e}pickPlayerStrikeRow(){var t;return((t=Array.from({length:this.board.size},(n,i)=>({row:i,score:this.board.getPieces("player").filter(r=>r.type!=="king"&&this.board.getFootprintCoords(r).some(o=>o.y===i)).length})).sort((n,i)=>i.score-n.score)[0])==null?void 0:t.row)??this.board.size-2}applyKingAwe(e){const t=this.getOpponent(e);if(!this.hasPassive(t,"kingAwe"))return;const n=this.board.getKing(t);if(n)for(const i of this.board.getPieces(e))Math.max(Math.abs(i.position.x-n.position.x),Math.abs(i.position.y-n.position.y))<=2&&(i.movePenalty+=1)}checkVictory(){return this.board.getKing("player")?this.board.getKing("ai")?this.bases.player.hp<=0?this.winner="ai":this.bases.ai.hp<=0&&(this.winner="player"):this.winner="player":this.winner="ai",this.winner==="player"&&this.towerRun.active?(this.completeTowerFloor(),!0):this.winner?(this.phase="gameover",this.selectedPieceId=null,this.aiTimer&&window.clearTimeout(this.aiTimer),this.log(this.winner==="player"?"勝利しました。":"敗北しました。",this.winner==="player"?"player":"danger"),!0):!1}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yr="164",Gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pl=0,Vr=1,Dl=2,To=1,wo=2,Qt=3,yn=0,Et=1,Dt=2,_n=0,hi=1,Wr=2,$r=3,Xr=4,Ll=5,In=100,Il=101,Ul=102,Nl=103,Fl=104,Ol=200,Bl=201,kl=202,Hl=203,dr=204,ur=205,zl=206,Gl=207,Vl=208,Wl=209,$l=210,Xl=211,ql=212,Yl=213,jl=214,Kl=0,Zl=1,Jl=2,hs=3,Ql=4,ec=5,tc=6,nc=7,Ao=0,ic=1,sc=2,vn=0,rc=1,ac=2,oc=3,lc=4,cc=5,hc=6,dc=7,Ro=300,pi=301,mi=302,fr=303,pr=304,gs=306,mr=1e3,Nn=1001,gr=1002,Lt=1003,uc=1004,ki=1005,Ot=1006,Cs=1007,Fn=1008,xn=1009,fc=1010,pc=1011,Co=1012,Po=1013,gi=1014,gn=1015,_s=1016,Do=1017,Lo=1018,Ni=1020,mc=35902,gc=1021,_c=1022,Gt=1023,vc=1024,yc=1025,di=1026,Ii=1027,xc=1028,Io=1029,Mc=1030,Uo=1031,No=1033,Ps=33776,Ds=33777,Ls=33778,Is=33779,qr=35840,Yr=35841,jr=35842,Kr=35843,Zr=36196,Jr=37492,Qr=37496,ea=37808,ta=37809,na=37810,ia=37811,sa=37812,ra=37813,aa=37814,oa=37815,la=37816,ca=37817,ha=37818,da=37819,ua=37820,fa=37821,Us=36492,pa=36494,ma=36495,Sc=36283,ga=36284,_a=36285,va=36286,Ec=3200,bc=3201,Fo=0,Tc=1,mn="",Ft="srgb",Sn="srgb-linear",xr="display-p3",vs="display-p3-linear",ds="linear",Qe="srgb",us="rec709",fs="p3",Wn=7680,ya=519,wc=512,Ac=513,Rc=514,Oo=515,Cc=516,Pc=517,Dc=518,Lc=519,xa=35044,Ma="300 es",tn=2e3,ps=2001;class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sa=1234567;const Di=Math.PI/180,Ui=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[s&255]+pt[s>>8&255]+pt[s>>16&255]+pt[s>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function Mr(s,e){return(s%e+e)%e}function Ic(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Uc(s,e,t){return s!==e?(t-s)/(e-s):0}function Li(s,e,t){return(1-t)*s+t*e}function Nc(s,e,t,n){return Li(s,e,1-Math.exp(-t*n))}function Fc(s,e=1){return e-Math.abs(Mr(s,e*2)-e)}function Oc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Bc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function kc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Hc(s,e){return s+Math.random()*(e-s)}function zc(s){return s*(.5-Math.random())}function Gc(s){s!==void 0&&(Sa=s);let e=Sa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vc(s){return s*Di}function Wc(s){return s*Ui}function $c(s){return(s&s-1)===0&&s!==0}function Xc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yc(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const jc={DEG2RAD:Di,RAD2DEG:Ui,generateUUID:yi,clamp:gt,euclideanModulo:Mr,mapLinear:Ic,inverseLerp:Uc,lerp:Li,damp:Nc,pingpong:Fc,smoothstep:Oc,smootherstep:Bc,randInt:kc,randFloat:Hc,randFloatSpread:zc,seededRandom:Gc,degToRad:Vc,radToDeg:Wc,isPowerOfTwo:$c,ceilPowerOfTwo:Xc,floorPowerOfTwo:qc,setQuaternionFromProperEuler:Yc,normalize:yt,denormalize:oi};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,i,r,o,a,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],_=n[8],x=i[0],p=i[3],d=i[6],b=i[1],E=i[4],T=i[7],U=i[2],R=i[5],A=i[8];return r[0]=o*x+a*b+l*U,r[3]=o*p+a*E+l*R,r[6]=o*d+a*T+l*A,r[1]=c*x+h*b+u*U,r[4]=c*p+h*E+u*R,r[7]=c*d+h*T+u*A,r[2]=f*x+m*b+_*U,r[5]=f*p+m*E+_*R,r[8]=f*d+m*T+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=t*u+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ns.makeScale(e,t)),this}rotate(e){return this.premultiply(Ns.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Le;function Bo(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kc(){const s=ms("canvas");return s.style.display="block",s}const Ea={};function Zc(s){s in Ea||(Ea[s]=!0,console.warn(s))}const ba=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ta=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[Sn]:{transfer:ds,primaries:us,toReference:s=>s,fromReference:s=>s},[Ft]:{transfer:Qe,primaries:us,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[vs]:{transfer:ds,primaries:fs,toReference:s=>s.applyMatrix3(Ta),fromReference:s=>s.applyMatrix3(ba)},[xr]:{transfer:Qe,primaries:fs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ta),fromReference:s=>s.applyMatrix3(ba).convertLinearToSRGB()}},Jc=new Set([Sn,vs]),Ke={enabled:!0,_workingColorSpace:Sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Jc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Hi[e].toReference,i=Hi[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Hi[s].primaries},getTransfer:function(s){return s===mn?ds:Hi[s].transfer}};function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $n;class Qc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$n===void 0&&($n=ms("canvas")),$n.width=e.width,$n.height=e.height;const n=$n.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$n}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eh=0;class ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Os(i[o].image)):r.push(Os(i[o]))}else r=Os(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Os(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let th=0;class St extends Hn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Nn,i=Nn,r=Ot,o=Fn,a=Gt,l=xn,c=St.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=yi(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Ro;St.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,T=(m+1)/2,U=(d+1)/2,R=(h+f)/4,A=(u+x)/4,k=(_+p)/4;return E>T&&E>U?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=R/n,r=A/n):T>U?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=R/i,r=k/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=A/r,i=k/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-_)*(p-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nh extends Hn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ho extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ih extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(u!==x||l!==f||c!==m||h!==_){let p=1-a;const d=l*f+c*m+h*_+u*x,b=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const U=Math.sqrt(E),R=Math.atan2(U,d*b);p=Math.sin(p*R)/U,a=Math.sin(a*R)/U}const T=a*b;if(l=l*p+f*T,c=c*p+m*T,h=h*p+_*T,u=u*p+x*T,p===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*m-c*f,e[t+1]=l*_+h*f+c*u-a*m,e[t+2]=c*_+h*m+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),m=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bs.copy(this).projectOnVector(e),this.sub(Bs)}reflect(e){return this.sub(Bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new P,wa=new Bn;class Fi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,It):It.fromBufferAttribute(r,o),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),Gi.subVectors(this.max,bi),Xn.subVectors(e.a,bi),qn.subVectors(e.b,bi),Yn.subVectors(e.c,bi),ln.subVectors(qn,Xn),cn.subVectors(Yn,qn),Tn.subVectors(Xn,Yn);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-Tn.z,Tn.y,ln.z,0,-ln.x,cn.z,0,-cn.x,Tn.z,0,-Tn.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-Tn.y,Tn.x,0];return!ks(t,Xn,qn,Yn,Gi)||(t=[1,0,0,0,1,0,0,0,1],!ks(t,Xn,qn,Yn,Gi))?!1:(Vi.crossVectors(ln,cn),t=[Vi.x,Vi.y,Vi.z],ks(t,Xn,qn,Yn,Gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new P,new P,new P,new P,new P,new P,new P,new P],It=new P,zi=new Fi,Xn=new P,qn=new P,Yn=new P,ln=new P,cn=new P,Tn=new P,bi=new P,Gi=new P,Vi=new P,wn=new P;function ks(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wn.fromArray(s,r);const a=i.x*Math.abs(wn.x)+i.y*Math.abs(wn.y)+i.z*Math.abs(wn.z),l=e.dot(wn),c=t.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const sh=new Fi,Ti=new P,Hs=new P;class Sr{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ti.subVectors(e,this.center);const t=Ti.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ti,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ti.copy(e.center).add(Hs)),this.expandByPoint(Ti.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new P,zs=new P,Wi=new P,hn=new P,Gs=new P,$i=new P,Vs=new P;class Er{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.origin).addScaledVector(this.direction,t),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zs.copy(e).add(t).multiplyScalar(.5),Wi.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(zs);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Wi),a=hn.dot(this.direction),l=-hn.dot(Wi),c=hn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zs).addScaledVector(Wi,f),m}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),i=jt.dot(jt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,i,r){Gs.subVectors(t,e),$i.subVectors(n,e),Vs.crossVectors(Gs,$i);let o=this.direction.dot(Vs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hn.subVectors(this.origin,e);const l=a*this.direction.dot($i.crossVectors(hn,$i));if(l<0)return null;const c=a*this.direction.dot(Gs.cross(hn));if(c<0||l+c>o)return null;const h=-a*hn.dot(Vs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,i,r,o,a,l,c,h,u,f,m,_,x,p){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,m,_,x,p)}set(e,t,n,i,r,o,a,l,c,h,u,f,m,_,x,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/jn.setFromMatrixColumn(e,0).length(),r=1/jn.setFromMatrixColumn(e,1).length(),o=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,_=c*h,x=c*u;t[0]=f+x*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,_=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*u,_=a*h,x=a*u;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+_,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rh,e,ah)}lookAt(e,t,n){const i=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),dn.crossVectors(n,Tt),dn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),dn.crossVectors(n,Tt)),dn.normalize(),Xi.crossVectors(Tt,dn),i[0]=dn.x,i[4]=Xi.x,i[8]=Tt.x,i[1]=dn.y,i[5]=Xi.y,i[9]=Tt.y,i[2]=dn.z,i[6]=Xi.z,i[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],_=n[2],x=n[6],p=n[10],d=n[14],b=n[3],E=n[7],T=n[11],U=n[15],R=i[0],A=i[4],k=i[8],S=i[12],v=i[1],N=i[5],G=i[9],C=i[13],$=i[2],X=i[6],Z=i[10],Q=i[14],V=i[3],te=i[7],ee=i[11],fe=i[15];return r[0]=o*R+a*v+l*$+c*V,r[4]=o*A+a*N+l*X+c*te,r[8]=o*k+a*G+l*Z+c*ee,r[12]=o*S+a*C+l*Q+c*fe,r[1]=h*R+u*v+f*$+m*V,r[5]=h*A+u*N+f*X+m*te,r[9]=h*k+u*G+f*Z+m*ee,r[13]=h*S+u*C+f*Q+m*fe,r[2]=_*R+x*v+p*$+d*V,r[6]=_*A+x*N+p*X+d*te,r[10]=_*k+x*G+p*Z+d*ee,r[14]=_*S+x*C+p*Q+d*fe,r[3]=b*R+E*v+T*$+U*V,r[7]=b*A+E*N+T*X+U*te,r[11]=b*k+E*G+T*Z+U*ee,r[15]=b*S+E*C+T*Q+U*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],_=e[3],x=e[7],p=e[11],d=e[15];return _*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*m-n*l*m)+x*(+t*l*m-t*c*f+r*o*f-i*o*m+i*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],_=e[12],x=e[13],p=e[14],d=e[15],b=u*p*c-x*f*c+x*l*m-a*p*m-u*l*d+a*f*d,E=_*f*c-h*p*c-_*l*m+o*p*m+h*l*d-o*f*d,T=h*x*c-_*u*c+_*a*m-o*x*m-h*a*d+o*u*d,U=_*u*l-h*x*l-_*a*f+o*x*f+h*a*p-o*u*p,R=t*b+n*E+i*T+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=b*A,e[1]=(x*f*r-u*p*r-x*i*m+n*p*m+u*i*d-n*f*d)*A,e[2]=(a*p*r-x*l*r+x*i*c-n*p*c-a*i*d+n*l*d)*A,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*m-n*l*m)*A,e[4]=E*A,e[5]=(h*p*r-_*f*r+_*i*m-t*p*m-h*i*d+t*f*d)*A,e[6]=(_*l*r-o*p*r-_*i*c+t*p*c+o*i*d-t*l*d)*A,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*m+t*l*m)*A,e[8]=T*A,e[9]=(_*u*r-h*x*r-_*n*m+t*x*m+h*n*d-t*u*d)*A,e[10]=(o*x*r-_*a*r+_*n*c-t*x*c-o*n*d+t*a*d)*A,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*A,e[12]=U*A,e[13]=(h*x*i-_*u*i+_*n*f-t*x*f-h*n*p+t*u*p)*A,e[14]=(_*a*i-o*x*i-_*n*l+t*x*l+o*n*p-t*a*p)*A,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,_=r*u,x=o*h,p=o*u,d=a*u,b=l*c,E=l*h,T=l*u,U=n.x,R=n.y,A=n.z;return i[0]=(1-(x+d))*U,i[1]=(m+T)*U,i[2]=(_-E)*U,i[3]=0,i[4]=(m-T)*R,i[5]=(1-(f+d))*R,i[6]=(p+b)*R,i[7]=0,i[8]=(_+E)*A,i[9]=(p-b)*A,i[10]=(1-(f+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=jn.set(i[0],i[1],i[2]).length();const o=jn.set(i[4],i[5],i[6]).length(),a=jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ut.copy(this);const c=1/r,h=1/o,u=1/a;return Ut.elements[0]*=c,Ut.elements[1]*=c,Ut.elements[2]*=c,Ut.elements[4]*=h,Ut.elements[5]*=h,Ut.elements[6]*=h,Ut.elements[8]*=u,Ut.elements[9]*=u,Ut.elements[10]*=u,t.setFromRotationMatrix(Ut),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=tn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let m,_;if(a===tn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ps)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=tn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,m=(n+i)*h;let _,x;if(a===tn)_=(o+r)*u,x=-2*u;else if(a===ps)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jn=new P,Ut=new it,rh=new P(0,0,0),ah=new P(1,1,1),dn=new P,Xi=new P,Tt=new P,Aa=new it,Ra=new Bn;class Wt{constructor(e=0,t=0,n=0,i=Wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wt.DEFAULT_ORDER="XYZ";class br{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oh=0;const Ca=new P,Kn=new Bn,Kt=new it,qi=new P,wi=new P,lh=new P,ch=new Bn,Pa=new P(1,0,0),Da=new P(0,1,0),La=new P(0,0,1),Ia={type:"added"},hh={type:"removed"},Zn={type:"childadded",child:null},Ws={type:"childremoved",child:null};class _t extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new P,t=new Wt,n=new Bn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new Le}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Pa,e)}rotateY(e){return this.rotateOnAxis(Da,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return Ca.copy(e).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pa,e)}translateY(e){return this.translateOnAxis(Da,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qi.copy(e):qi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(wi,qi,this.up):Kt.lookAt(qi,wi,this.up),this.quaternion.setFromRotationMatrix(Kt),i&&(Kt.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ia),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hh),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ia),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,lh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new P(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nt=new P,Zt=new P,$s=new P,Jt=new P,Jn=new P,Qn=new P,Ua=new P,Xs=new P,qs=new P,Ys=new P;class zt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nt.subVectors(e,t),i.cross(Nt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nt.subVectors(i,t),Zt.subVectors(n,t),$s.subVectors(e,t);const o=Nt.dot(Nt),a=Nt.dot(Zt),l=Nt.dot($s),c=Zt.dot(Zt),h=Zt.dot($s),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jt.x),l.addScaledVector(o,Jt.y),l.addScaledVector(a,Jt.z),l)}static isFrontFacing(e,t,n,i){return Nt.subVectors(n,t),Zt.subVectors(e,t),Nt.cross(Zt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),Nt.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Jn.subVectors(i,n),Qn.subVectors(r,n),Xs.subVectors(e,n);const l=Jn.dot(Xs),c=Qn.dot(Xs);if(l<=0&&c<=0)return t.copy(n);qs.subVectors(e,i);const h=Jn.dot(qs),u=Qn.dot(qs);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Jn,o);Ys.subVectors(e,r);const m=Jn.dot(Ys),_=Qn.dot(Ys);if(_>=0&&m<=_)return t.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Qn,a);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return Ua.subVectors(r,i),a=(u-h)/(u-h+(m-_)),t.copy(i).addScaledVector(Ua,a);const d=1/(p+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(Jn,o).addScaledVector(Qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function js(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Mr(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=js(o,r,e+1/3),this.g=js(o,r,e),this.b=js(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=zo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ke.fromWorkingColorSpace(mt.copy(this),e),Math.round(gt(mt.r*255,0,255))*65536+Math.round(gt(mt.g*255,0,255))*256+Math.round(gt(mt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,i=mt.g,r=mt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Ft){Ke.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,i=mt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Yi);const n=Li(un.h,Yi.h,t),i=Li(un.s,Yi.s,t),r=Li(un.l,Yi.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Ge;Ge.NAMES=zo;let dh=0;class Oi extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=hi,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=ur,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xe extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new P,ji=new Se;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xa&&(e.usage=this.usage),e}}class Go extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vo extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uh=0;const Ct=new it,Ks=new _t,ei=new P,wt=new Fi,Ai=new Fi,ht=new P;class $t extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bo(e)?Vo:Go)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(wt.min,Ai.min),wt.expandByPoint(ht),ht.addVectors(wt.max,Ai.max),wt.expandByPoint(ht)):(wt.expandByPoint(Ai.min),wt.expandByPoint(Ai.max))}wt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ht.fromBufferAttribute(a,c),l&&(ei.fromBufferAttribute(e,c),ht.add(ei)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<n.count;k++)a[k]=new P,l[k]=new P;const c=new P,h=new P,u=new P,f=new Se,m=new Se,_=new Se,x=new P,p=new P;function d(k,S,v){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,k),m.fromBufferAttribute(r,S),_.fromBufferAttribute(r,v),h.sub(c),u.sub(c),m.sub(f),_.sub(f);const N=1/(m.x*_.y-_.x*m.y);isFinite(N)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(N),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(N),a[k].add(x),a[S].add(x),a[v].add(x),l[k].add(p),l[S].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,S=b.length;k<S;++k){const v=b[k],N=v.start,G=v.count;for(let C=N,$=N+G;C<$;C+=3)d(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const E=new P,T=new P,U=new P,R=new P;function A(k){U.fromBufferAttribute(i,k),R.copy(U);const S=a[k];E.copy(S),E.sub(U.multiplyScalar(U.dot(S))).normalize(),T.crossVectors(R,S);const N=T.dot(l[k])<0?-1:1;o.setXYZW(k,E.x,E.y,E.z,N)}for(let k=0,S=b.length;k<S;++k){const v=b[k],N=v.start,G=v.count;for(let C=N,$=N+G;C<$;C+=3)A(e.getX(C+0)),A(e.getX(C+1)),A(e.getX(C+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let d=0;d<h;d++)f[_++]=c[m++]}return new Vt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new it,An=new Er,Ki=new Sr,Fa=new P,ti=new P,ni=new P,ii=new P,Zs=new P,Zi=new P,Ji=new Se,Qi=new Se,es=new Se,Oa=new P,Ba=new P,ka=new P,ts=new P,ns=new P;class Me extends _t{constructor(e=new $t,t=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Zi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Zs.fromBufferAttribute(u,e),o?Zi.addScaledVector(Zs,h):Zi.addScaledVector(Zs.sub(t),h))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),An.copy(e.ray).recast(e.near),!(Ki.containsPoint(An.origin)===!1&&(An.intersectSphere(Ki,Fa)===null||An.origin.distanceToSquared(Fa)>(e.far-e.near)**2))&&(Na.copy(r).invert(),An.copy(e.ray).applyMatrix4(Na),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],d=o[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,U=E;T<U;T+=3){const R=a.getX(T),A=a.getX(T+1),k=a.getX(T+2);i=is(this,d,e,n,c,h,u,R,A,k),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const b=a.getX(p),E=a.getX(p+1),T=a.getX(p+2);i=is(this,o,e,n,c,h,u,b,E,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],d=o[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,U=E;T<U;T+=3){const R=T,A=T+1,k=T+2;i=is(this,d,e,n,c,h,u,R,A,k),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const b=p,E=p+1,T=p+2;i=is(this,o,e,n,c,h,u,b,E,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function fh(s,e,t,n,i,r,o,a){let l;if(e.side===Et?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===yn,a),l===null)return null;ns.copy(a),ns.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ns);return c<t.near||c>t.far?null:{distance:c,point:ns.clone(),object:s}}function is(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ti),s.getVertexPosition(l,ni),s.getVertexPosition(c,ii);const h=fh(s,e,t,n,ti,ni,ii,ts);if(h){i&&(Ji.fromBufferAttribute(i,a),Qi.fromBufferAttribute(i,l),es.fromBufferAttribute(i,c),h.uv=zt.getInterpolation(ts,ti,ni,ii,Ji,Qi,es,new Se)),r&&(Ji.fromBufferAttribute(r,a),Qi.fromBufferAttribute(r,l),es.fromBufferAttribute(r,c),h.uv1=zt.getInterpolation(ts,ti,ni,ii,Ji,Qi,es,new Se)),o&&(Oa.fromBufferAttribute(o,a),Ba.fromBufferAttribute(o,l),ka.fromBufferAttribute(o,c),h.normal=zt.getInterpolation(ts,ti,ni,ii,Oa,Ba,ka,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};zt.getNormal(ti,ni,ii,u.normal),h.face=u}return h}class kn extends $t{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(u,2));function _(x,p,d,b,E,T,U,R,A,k,S){const v=T/A,N=U/k,G=T/2,C=U/2,$=R/2,X=A+1,Z=k+1;let Q=0,V=0;const te=new P;for(let ee=0;ee<Z;ee++){const fe=ee*N-C;for(let Oe=0;Oe<X;Oe++){const $e=Oe*v-G;te[x]=$e*b,te[p]=fe*E,te[d]=$,c.push(te.x,te.y,te.z),te[x]=0,te[p]=0,te[d]=R>0?1:-1,h.push(te.x,te.y,te.z),u.push(Oe/A),u.push(1-ee/k),Q+=1}}for(let ee=0;ee<k;ee++)for(let fe=0;fe<A;fe++){const Oe=f+fe+X*ee,$e=f+fe+X*(ee+1),W=f+(fe+1)+X*(ee+1),ne=f+(fe+1)+X*ee;l.push(Oe,$e,ne),l.push($e,W,ne),V+=6}a.addGroup(m,V,S),m+=V,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xt(s){const e={};for(let t=0;t<s.length;t++){const n=_i(s[t]);for(const i in n)e[i]=n[i]}return e}function ph(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wo(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const mh={clone:_i,merge:xt};var gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gh,this.fragmentShader=_h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $o extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new P,Ha=new Se,za=new Se;class Pt extends $o{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ui*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fn.x,fn.y).multiplyScalar(-e/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fn.x,fn.y).multiplyScalar(-e/fn.z)}getViewSize(e,t){return this.getViewBounds(e,Ha,za),t.subVectors(za,Ha)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Di*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ri=1;class vh extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pt(si,ri,e,t);i.layers=this.layers,this.add(i);const r=new Pt(si,ri,e,t);r.layers=this.layers,this.add(r);const o=new Pt(si,ri,e,t);o.layers=this.layers,this.add(o);const a=new Pt(si,ri,e,t);a.layers=this.layers,this.add(a);const l=new Pt(si,ri,e,t);l.layers=this.layers,this.add(l);const c=new Pt(si,ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Xo extends St{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yh extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new kn(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:_n});r.uniforms.tEquirect.value=t;const o=new Me(i,r),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Ot),new vh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Js=new P,xh=new P,Mh=new Le;class pn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Js.subVectors(n,t).cross(xh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Js),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mh.getNormalMatrix(e),i=this.coplanarPoint(Js).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Sr,ss=new P;class Tr{constructor(e=new pn,t=new pn,n=new pn,i=new pn,r=new pn,o=new pn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],_=i[9],x=i[10],p=i[11],d=i[12],b=i[13],E=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,p-m,T-d).normalize(),n[1].setComponents(l+r,f+c,p+m,T+d).normalize(),n[2].setComponents(l+o,f+h,p+_,T+b).normalize(),n[3].setComponents(l-o,f-h,p-_,T-b).normalize(),n[4].setComponents(l-a,f-u,p-x,T-E).normalize(),t===tn)n[5].setComponents(l+a,f+u,p+x,T+E).normalize();else if(t===ps)n[5].setComponents(a,u,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ss.x=i.normal.x>0?e.max.x:e.min.x,ss.y=i.normal.y>0?e.max.y:e.min.y,ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qo(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Sh(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(s.bindBuffer(c,a),u.count===-1&&f.length===0&&s.bufferSubData(c,0,h),f.length!==0){for(let m=0,_=f.length;m<_;m++){const x=f[m];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class nn extends $t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,m=[],_=[],x=[],p=[];for(let d=0;d<h;d++){const b=d*f-o;for(let E=0;E<c;E++){const T=E*u-r;_.push(T,-b,0),x.push(0,0,1),p.push(E/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const E=b+c*d,T=b+c*(d+1),U=b+1+c*(d+1),R=b+1+c*d;m.push(E,T,R),m.push(T,U,R)}this.setIndex(m),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Md=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ld=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,su=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ru=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,au=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ou=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,du=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_u=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Su=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Au=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Du=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ku=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$u=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ju=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ju=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ef=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Eh,alphahash_pars_fragment:bh,alphamap_fragment:Th,alphamap_pars_fragment:wh,alphatest_fragment:Ah,alphatest_pars_fragment:Rh,aomap_fragment:Ch,aomap_pars_fragment:Ph,batching_pars_vertex:Dh,batching_vertex:Lh,begin_vertex:Ih,beginnormal_vertex:Uh,bsdfs:Nh,iridescence_fragment:Fh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:zh,color_fragment:Gh,color_pars_fragment:Vh,color_pars_vertex:Wh,color_vertex:$h,common:Xh,cube_uv_reflection_fragment:qh,defaultnormal_vertex:Yh,displacementmap_pars_vertex:jh,displacementmap_vertex:Kh,emissivemap_fragment:Zh,emissivemap_pars_fragment:Jh,colorspace_fragment:Qh,colorspace_pars_fragment:ed,envmap_fragment:td,envmap_common_pars_fragment:nd,envmap_pars_fragment:id,envmap_pars_vertex:sd,envmap_physical_pars_fragment:md,envmap_vertex:rd,fog_vertex:ad,fog_pars_vertex:od,fog_fragment:ld,fog_pars_fragment:cd,gradientmap_pars_fragment:hd,lightmap_pars_fragment:dd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:fd,lights_pars_begin:pd,lights_toon_fragment:gd,lights_toon_pars_fragment:_d,lights_phong_fragment:vd,lights_phong_pars_fragment:yd,lights_physical_fragment:xd,lights_physical_pars_fragment:Md,lights_fragment_begin:Sd,lights_fragment_maps:Ed,lights_fragment_end:bd,logdepthbuf_fragment:Td,logdepthbuf_pars_fragment:wd,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:Rd,map_fragment:Cd,map_pars_fragment:Pd,map_particle_fragment:Dd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Ud,morphinstance_vertex:Nd,morphcolor_vertex:Fd,morphnormal_vertex:Od,morphtarget_pars_vertex:Bd,morphtarget_vertex:kd,normal_fragment_begin:Hd,normal_fragment_maps:zd,normal_pars_fragment:Gd,normal_pars_vertex:Vd,normal_vertex:Wd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:Yd,iridescence_pars_fragment:jd,opaque_fragment:Kd,packing:Zd,premultiplied_alpha_fragment:Jd,project_vertex:Qd,dithering_fragment:eu,dithering_pars_fragment:tu,roughnessmap_fragment:nu,roughnessmap_pars_fragment:iu,shadowmap_pars_fragment:su,shadowmap_pars_vertex:ru,shadowmap_vertex:au,shadowmask_pars_fragment:ou,skinbase_vertex:lu,skinning_pars_vertex:cu,skinning_vertex:hu,skinnormal_vertex:du,specularmap_fragment:uu,specularmap_pars_fragment:fu,tonemapping_fragment:pu,tonemapping_pars_fragment:mu,transmission_fragment:gu,transmission_pars_fragment:_u,uv_pars_fragment:vu,uv_pars_vertex:yu,uv_vertex:xu,worldpos_vertex:Mu,background_vert:Su,background_frag:Eu,backgroundCube_vert:bu,backgroundCube_frag:Tu,cube_vert:wu,cube_frag:Au,depth_vert:Ru,depth_frag:Cu,distanceRGBA_vert:Pu,distanceRGBA_frag:Du,equirect_vert:Lu,equirect_frag:Iu,linedashed_vert:Uu,linedashed_frag:Nu,meshbasic_vert:Fu,meshbasic_frag:Ou,meshlambert_vert:Bu,meshlambert_frag:ku,meshmatcap_vert:Hu,meshmatcap_frag:zu,meshnormal_vert:Gu,meshnormal_frag:Vu,meshphong_vert:Wu,meshphong_frag:$u,meshphysical_vert:Xu,meshphysical_frag:qu,meshtoon_vert:Yu,meshtoon_frag:ju,points_vert:Ku,points_frag:Zu,shadow_vert:Ju,shadow_frag:Qu,sprite_vert:ef,sprite_frag:tf},ae={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Ht={basic:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:xt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:xt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:xt([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:xt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:xt([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:xt([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:xt([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:xt([ae.lights,ae.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Ht.physical={uniforms:xt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const rs={r:0,b:0,g:0},Cn=new Wt,nf=new it;function sf(s,e,t,n,i,r,o){const a=new Ge(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function x(b){let E=!1;const T=_(b);T===null?d(a,l):T&&T.isColor&&(d(T,1),E=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function p(b,E){const T=_(E);T&&(T.isCubeTexture||T.mapping===gs)?(h===void 0&&(h=new Me(new kn(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:_i(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Cn.copy(E.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nf.makeRotationFromEuler(Cn)),h.material.toneMapped=Ke.getTransfer(T.colorSpace)!==Qe,(u!==T||f!==T.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,m=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Me(new nn(2,2),new Mn({name:"BackgroundMaterial",uniforms:_i(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(T.colorSpace)!==Qe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,m=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,E){b.getRGB(rs,Wo(s)),n.buffers.color.setClear(rs.r,rs.g,rs.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:x,addToRenderList:p}}function rf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(v,N,G,C,$){let X=!1;const Z=u(C,G,N);r!==Z&&(r=Z,c(r.object)),X=m(v,C,G,$),X&&_(v,C,G,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,T(v,N,G,C),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,N,G){const C=G.wireframe===!0;let $=n[v.id];$===void 0&&($={},n[v.id]=$);let X=$[N.id];X===void 0&&(X={},$[N.id]=X);let Z=X[C];return Z===void 0&&(Z=f(l()),X[C]=Z),Z}function f(v){const N=[],G=[],C=[];for(let $=0;$<t;$++)N[$]=0,G[$]=0,C[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:C,object:v,attributes:{},index:null}}function m(v,N,G,C){const $=r.attributes,X=N.attributes;let Z=0;const Q=G.getAttributes();for(const V in Q)if(Q[V].location>=0){const ee=$[V];let fe=X[V];if(fe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),ee===void 0||ee.attribute!==fe||fe&&ee.data!==fe.data)return!0;Z++}return r.attributesNum!==Z||r.index!==C}function _(v,N,G,C){const $={},X=N.attributes;let Z=0;const Q=G.getAttributes();for(const V in Q)if(Q[V].location>=0){let ee=X[V];ee===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor));const fe={};fe.attribute=ee,ee&&ee.data&&(fe.data=ee.data),$[V]=fe,Z++}r.attributes=$,r.attributesNum=Z,r.index=C}function x(){const v=r.newAttributes;for(let N=0,G=v.length;N<G;N++)v[N]=0}function p(v){d(v,0)}function d(v,N){const G=r.newAttributes,C=r.enabledAttributes,$=r.attributeDivisors;G[v]=1,C[v]===0&&(s.enableVertexAttribArray(v),C[v]=1),$[v]!==N&&(s.vertexAttribDivisor(v,N),$[v]=N)}function b(){const v=r.newAttributes,N=r.enabledAttributes;for(let G=0,C=N.length;G<C;G++)N[G]!==v[G]&&(s.disableVertexAttribArray(G),N[G]=0)}function E(v,N,G,C,$,X,Z){Z===!0?s.vertexAttribIPointer(v,N,G,$,X):s.vertexAttribPointer(v,N,G,C,$,X)}function T(v,N,G,C){x();const $=C.attributes,X=G.getAttributes(),Z=N.defaultAttributeValues;for(const Q in X){const V=X[Q];if(V.location>=0){let te=$[Q];if(te===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){const ee=te.normalized,fe=te.itemSize,Oe=e.get(te);if(Oe===void 0)continue;const $e=Oe.buffer,W=Oe.type,ne=Oe.bytesPerElement,de=W===s.INT||W===s.UNSIGNED_INT||te.gpuType===Po;if(te.isInterleavedBufferAttribute){const re=te.data,Be=re.stride,Ie=te.offset;if(re.isInstancedInterleavedBuffer){for(let I=0;I<V.locationSize;I++)d(V.location+I,re.meshPerAttribute);v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let I=0;I<V.locationSize;I++)p(V.location+I);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let I=0;I<V.locationSize;I++)E(V.location+I,fe/V.locationSize,W,ee,Be*ne,(Ie+fe/V.locationSize*I)*ne,de)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)d(V.location+re,te.meshPerAttribute);v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<V.locationSize;re++)p(V.location+re);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let re=0;re<V.locationSize;re++)E(V.location+re,fe/V.locationSize,W,ee,fe*ne,fe/V.locationSize*re*ne,de)}}else if(Z!==void 0){const ee=Z[Q];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(V.location,ee);break;case 3:s.vertexAttrib3fv(V.location,ee);break;case 4:s.vertexAttrib4fv(V.location,ee);break;default:s.vertexAttrib1fv(V.location,ee)}}}}b()}function U(){k();for(const v in n){const N=n[v];for(const G in N){const C=N[G];for(const $ in C)h(C[$].object),delete C[$];delete N[G]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const N=n[v.id];for(const G in N){const C=N[G];for(const $ in C)h(C[$].object),delete C[$];delete N[G]}delete n[v.id]}function A(v){for(const N in n){const G=n[N];if(G[v.id]===void 0)continue;const C=G[v.id];for(const $ in C)h(C[$].object),delete C[$];delete G[v.id]}}function k(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:k,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function af(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u;m++)this.render(c[m],h[m]);else{f.multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];t.update(m,n,1)}}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<f.length;x++)t.update(_,n,f[x])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function of(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Gt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===_s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==gn&&!A)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),d=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:T,maxSamples:U}}function lf(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new pn,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const b=r?0:n,E=b*4;let T=d.clippingState||null;l.value=T,T=h(_,f,E,m);for(let U=0;U!==E;++U)T[U]=t[U];d.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,_){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const d=m+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,T=m;E!==x;++E,T+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function cf(s){let e=new WeakMap;function t(o,a){return a===fr?o.mapping=pi:a===pr&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fr||a===pr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yh(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Yo extends $o{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=4,Ga=[.125,.215,.35,.446,.526,.582],Un=20,Qs=new Yo,Va=new Ge;let er=null,tr=0,nr=0,ir=!1;const Dn=(1+Math.sqrt(5))/2,ai=1/Dn,Wa=[new P(-Dn,ai,0),new P(Dn,ai,0),new P(-ai,0,Dn),new P(ai,0,Dn),new P(0,Dn,-ai),new P(0,Dn,ai),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class $a{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){er=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(er,tr,nr),this._renderer.xr.enabled=ir,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),er=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:_s,format:Gt,colorSpace:Sn,depthBuffer:!1},i=Xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hf(r)),this._blurMaterial=df(r,e,t)}return i}_compileMaterial(e){const t=new Me(this._lodPlanes[0],e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,i){const a=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Va),h.toneMapping=vn,h.autoClear=!1;const m=new Xe({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),_=new Me(new kn,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Va),x=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const E=this._cubeSize;as(i,b*E,d>2?E:0,E,E),h.setRenderTarget(i),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;as(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wa[(i-r-1)%Wa.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Me(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Un-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):Un;p>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Un}`);const d=[];let b=0;for(let A=0;A<Un;++A){const k=A/x,S=Math.exp(-k*k/2);d.push(S),A===0?b+=S:A<p&&(b+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;const T=this._sizeLods[i],U=3*T*(i>E-ci?i-E+ci:0),R=4*(this._cubeSize-T);as(t,U,R,3*T,2*T),l.setRenderTarget(t),l.render(u,Qs)}}function hf(s){const e=[],t=[],n=[];let i=s;const r=s-ci+1+Ga.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ci?l=Ga[o-s+ci-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,x=3,p=2,d=1,b=new Float32Array(x*_*m),E=new Float32Array(p*_*m),T=new Float32Array(d*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,k=R>2?0:-1,S=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];b.set(S,x*_*R),E.set(f,p*_*R);const v=[R,R,R,R,R,R];T.set(v,d*_*R)}const U=new $t;U.setAttribute("position",new Vt(b,x)),U.setAttribute("uv",new Vt(E,p)),U.setAttribute("faceIndex",new Vt(T,d)),e.push(U),i>ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xa(s,e,t){const n=new On(s,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function df(s,e,t){const n=new Float32Array(Un),i=new P(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function qa(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ya(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function wr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uf(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fr||l===pr,h=l===pi||l===mi;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new $a(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&i(m)?(t===null&&(t=new $a(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ff(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pf(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,d=x.length;p<d;p++)e.update(x[p],s.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let E=0,T=b.length;E<T;E+=3){const U=b[E+0],R=b[E+1],A=b[E+2];f.push(U,R,R,A,A,U)}}else if(_!==void 0){const b=_.array;x=_.version;for(let E=0,T=b.length/3-1;E<T;E+=3){const U=E+0,R=E+1,A=E+2;f.push(U,R,R,A,A,U)}}else return;const p=new(Bo(f)?Vo:Go)(f,1);p.version=x;const d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function mf(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){s.drawElements(n,m,r,f*o),t.update(m,n,1)}function c(f,m,_){_!==0&&(s.drawElementsInstanced(n,m,r,f*o,_),t.update(m,n,_))}function h(f,m,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<_;p++)this.render(f[p]/o,m[p]);else{x.multiDrawElementsWEBGL(n,m,0,r,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,n,1)}}function u(f,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,x,0,_);let d=0;for(let b=0;b<_;b++)d+=m[b];for(let b=0;b<x.length;b++)t.update(d,n,x[b])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _f(s,e,t){const n=new WeakMap,i=new dt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let v=function(){k.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var m=v;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),p===!0&&(T=3);let U=a.attributes.position.count*T,R=1;U>e.maxTextureSize&&(R=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const A=new Float32Array(U*R*4*u),k=new Ho(A,U,R,u);k.type=gn,k.needsUpdate=!0;const S=T*4;for(let N=0;N<u;N++){const G=d[N],C=b[N],$=E[N],X=U*R*4*N;for(let Z=0;Z<G.count;Z++){const Q=Z*S;_===!0&&(i.fromBufferAttribute(G,Z),A[X+Q+0]=i.x,A[X+Q+1]=i.y,A[X+Q+2]=i.z,A[X+Q+3]=0),x===!0&&(i.fromBufferAttribute(C,Z),A[X+Q+4]=i.x,A[X+Q+5]=i.y,A[X+Q+6]=i.z,A[X+Q+7]=0),p===!0&&(i.fromBufferAttribute($,Z),A[X+Q+8]=i.x,A[X+Q+9]=i.y,A[X+Q+10]=i.z,A[X+Q+11]=$.itemSize===4?i.w:1)}}f={count:u,texture:k,size:new Se(U,R)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function vf(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class jo extends St{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:di,h!==di&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=gi),n===void 0&&h===Ii&&(n=Ni),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ko=new St,Zo=new jo(1,1);Zo.compareFunction=Oo;const Jo=new Ho,Qo=new ih,el=new Xo,ja=[],Ka=[],Za=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function xi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ja[i];if(r===void 0&&(r=new Float32Array(i),ja[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ys(s,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function yf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2fv(this.addr,e),lt(t,e)}}function Mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;s.uniform3fv(this.addr,e),lt(t,e)}}function Sf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4fv(this.addr,e),lt(t,e)}}function Ef(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Qa.set(n),s.uniformMatrix2fv(this.addr,!1,Qa),lt(t,n)}}function bf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Ja.set(n),s.uniformMatrix3fv(this.addr,!1,Ja),lt(t,n)}}function Tf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Za.set(n),s.uniformMatrix4fv(this.addr,!1,Za),lt(t,n)}}function wf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Af(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2iv(this.addr,e),lt(t,e)}}function Rf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;s.uniform3iv(this.addr,e),lt(t,e)}}function Cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4iv(this.addr,e),lt(t,e)}}function Pf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Df(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2uiv(this.addr,e),lt(t,e)}}function Lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;s.uniform3uiv(this.addr,e),lt(t,e)}}function If(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4uiv(this.addr,e),lt(t,e)}}function Uf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Zo:Ko;t.setTexture2D(e||r,i)}function Nf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qo,i)}function Ff(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||el,i)}function Of(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jo,i)}function Bf(s){switch(s){case 5126:return yf;case 35664:return xf;case 35665:return Mf;case 35666:return Sf;case 35674:return Ef;case 35675:return bf;case 35676:return Tf;case 5124:case 35670:return wf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return Df;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}function kf(s,e){s.uniform1fv(this.addr,e)}function Hf(s,e){const t=xi(e,this.size,2);s.uniform2fv(this.addr,t)}function zf(s,e){const t=xi(e,this.size,3);s.uniform3fv(this.addr,t)}function Gf(s,e){const t=xi(e,this.size,4);s.uniform4fv(this.addr,t)}function Vf(s,e){const t=xi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wf(s,e){const t=xi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $f(s,e){const t=xi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xf(s,e){s.uniform1iv(this.addr,e)}function qf(s,e){s.uniform2iv(this.addr,e)}function Yf(s,e){s.uniform3iv(this.addr,e)}function jf(s,e){s.uniform4iv(this.addr,e)}function Kf(s,e){s.uniform1uiv(this.addr,e)}function Zf(s,e){s.uniform2uiv(this.addr,e)}function Jf(s,e){s.uniform3uiv(this.addr,e)}function Qf(s,e){s.uniform4uiv(this.addr,e)}function ep(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ko,r[o])}function tp(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qo,r[o])}function np(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||el,r[o])}function ip(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jo,r[o])}function sp(s){switch(s){case 5126:return kf;case 35664:return Hf;case 35665:return zf;case 35666:return Gf;case 35674:return Vf;case 35675:return Wf;case 35676:return $f;case 5124:case 35670:return Xf;case 35667:case 35671:return qf;case 35668:case 35672:return Yf;case 35669:case 35673:return jf;case 5125:return Kf;case 36294:return Zf;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class rp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bf(t.type)}}class ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sp(t.type)}}class op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function eo(s,e){s.seq.push(e),s.map[e.id]=e}function lp(s,e,t){const n=s.name,i=n.length;for(sr.lastIndex=0;;){const r=sr.exec(n),o=sr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){eo(t,c===void 0?new rp(a,s,e):new ap(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new op(a),eo(t,u)),t=u}}}class ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);lp(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function to(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const cp=37297;let hp=0;function dp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function up(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let n;switch(e===t?n="":e===fs&&t===us?n="LinearDisplayP3ToLinearSRGB":e===us&&t===fs&&(n="LinearSRGBToLinearDisplayP3"),s){case Sn:case vs:return[n,"LinearTransferOETF"];case Ft:case xr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function no(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+dp(s.getShaderSource(e),o)}else return i}function fp(s,e){const t=up(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pp(s,e){let t;switch(e){case rc:t="Linear";break;case ac:t="Reinhard";break;case oc:t="OptimizedCineon";break;case lc:t="ACESFilmic";break;case hc:t="AgX";break;case dc:t="Neutral";break;case cc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pi).join(`
`)}function gp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _p(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Pi(s){return s!==""}function io(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function so(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function _r(s){return s.replace(vp,xp)}const yp=new Map;function xp(s,e){let t=De[e];if(t===void 0){const n=yp.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _r(t)}const Mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ro(s){return s.replace(Mp,Sp)}function Sp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ao(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ep(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===To?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function bp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function wp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ao:e="ENVMAP_BLENDING_MULTIPLY";break;case ic:e="ENVMAP_BLENDING_MIX";break;case sc:e="ENVMAP_BLENDING_ADD";break}return e}function Ap(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rp(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ep(t),c=bp(t),h=Tp(t),u=wp(t),f=Ap(t),m=mp(t),_=gp(r),x=i.createProgram();let p,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pi).join(`
`),d.length>0&&(d+=`
`)):(p=[ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),d=[ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?De.tonemapping_pars_fragment:"",t.toneMapping!==vn?pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,fp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=_r(o),o=io(o,t),o=so(o,t),a=_r(a),a=io(a,t),a=so(a,t),o=ro(o),a=ro(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=b+p+o,T=b+d+a,U=to(i,i.VERTEX_SHADER,E),R=to(i,i.FRAGMENT_SHADER,T);i.attachShader(x,U),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(N){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(x).trim(),C=i.getShaderInfoLog(U).trim(),$=i.getShaderInfoLog(R).trim();let X=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,U,R);else{const Q=no(i,U,"vertex"),V=no(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+Q+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(C===""||$==="")&&(Z=!1);Z&&(N.diagnostics={runnable:X,programLog:G,vertexShader:{log:C,prefix:p},fragmentShader:{log:$,prefix:d}})}i.deleteShader(U),i.deleteShader(R),k=new ls(i,x),S=_p(i,x)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,cp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=R,this}let Cp=0;class Pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dp(e),t.set(e,n)),n}}class Dp{constructor(e){this.id=Cp++,this.code=e,this.usedTimes=0}}function Lp(s,e,t,n,i,r,o){const a=new br,l=new Pp,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,v,N,G,C){const $=G.fog,X=C.geometry,Z=S.isMeshStandardMaterial?G.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),V=Q&&Q.mapping===gs?Q.image.height:null,te=_[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ee=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=ee!==void 0?ee.length:0;let Oe=0;X.morphAttributes.position!==void 0&&(Oe=1),X.morphAttributes.normal!==void 0&&(Oe=2),X.morphAttributes.color!==void 0&&(Oe=3);let $e,W,ne,de;if(te){const Ve=Ht[te];$e=Ve.vertexShader,W=Ve.fragmentShader}else $e=S.vertexShader,W=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const re=s.getRenderTarget(),Be=C.isInstancedMesh===!0,Ie=C.isBatchedMesh===!0,I=!!S.map,qe=!!S.matcap,_e=!!Q,Ye=!!S.aoMap,ye=!!S.lightMap,ke=!!S.bumpMap,we=!!S.normalMap,He=!!S.displacementMap,et=!!S.emissiveMap,w=!!S.metalnessMap,y=!!S.roughnessMap,z=S.anisotropy>0,q=S.clearcoat>0,K=S.dispersion>0,J=S.iridescence>0,ge=S.sheen>0,le=S.transmission>0,oe=z&&!!S.anisotropyMap,Ee=q&&!!S.clearcoatMap,se=q&&!!S.clearcoatNormalMap,me=q&&!!S.clearcoatRoughnessMap,ze=J&&!!S.iridescenceMap,ve=J&&!!S.iridescenceThicknessMap,he=ge&&!!S.sheenColorMap,Ae=ge&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,je=!!S.specularColorMap,Ce=!!S.specularIntensityMap,g=le&&!!S.transmissionMap,D=le&&!!S.thicknessMap,F=!!S.gradientMap,Y=!!S.alphaMap,ie=S.alphaTest>0,Re=!!S.alphaHash,Ne=!!S.extensions;let nt=vn;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(nt=s.toneMapping);const ct={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:W,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ie,instancing:Be,instancingColor:Be&&C.instanceColor!==null,instancingMorph:Be&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Sn,alphaToCoverage:!!S.alphaToCoverage,map:I,matcap:qe,envMap:_e,envMapMode:_e&&Q.mapping,envMapCubeUVHeight:V,aoMap:Ye,lightMap:ye,bumpMap:ke,normalMap:we,displacementMap:f&&He,emissiveMap:et,normalMapObjectSpace:we&&S.normalMapType===Tc,normalMapTangentSpace:we&&S.normalMapType===Fo,metalnessMap:w,roughnessMap:y,anisotropy:z,anisotropyMap:oe,clearcoat:q,clearcoatMap:Ee,clearcoatNormalMap:se,clearcoatRoughnessMap:me,dispersion:K,iridescence:J,iridescenceMap:ze,iridescenceThicknessMap:ve,sheen:ge,sheenColorMap:he,sheenRoughnessMap:Ae,specularMap:Ue,specularColorMap:je,specularIntensityMap:Ce,transmission:le,transmissionMap:g,thicknessMap:D,gradientMap:F,opaque:S.transparent===!1&&S.blending===hi&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:ie,alphaHash:Re,combine:S.combine,mapUv:I&&x(S.map.channel),aoMapUv:Ye&&x(S.aoMap.channel),lightMapUv:ye&&x(S.lightMap.channel),bumpMapUv:ke&&x(S.bumpMap.channel),normalMapUv:we&&x(S.normalMap.channel),displacementMapUv:He&&x(S.displacementMap.channel),emissiveMapUv:et&&x(S.emissiveMap.channel),metalnessMapUv:w&&x(S.metalnessMap.channel),roughnessMapUv:y&&x(S.roughnessMap.channel),anisotropyMapUv:oe&&x(S.anisotropyMap.channel),clearcoatMapUv:Ee&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(S.sheenRoughnessMap.channel),specularMapUv:Ue&&x(S.specularMap.channel),specularColorMapUv:je&&x(S.specularColorMap.channel),specularIntensityMapUv:Ce&&x(S.specularIntensityMap.channel),transmissionMapUv:g&&x(S.transmissionMap.channel),thicknessMapUv:D&&x(S.thicknessMap.channel),alphaMapUv:Y&&x(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(we||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!X.attributes.uv&&(I||Y),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:C.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Oe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:I&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===Qe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dt,flipSided:S.side===Et,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ne&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function d(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)v.push(N),v.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(b(v,S),E(v,S),v.push(s.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function b(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function E(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),S.push(a.mask)}function T(S){const v=_[S.type];let N;if(v){const G=Ht[v];N=mh.clone(G.uniforms)}else N=S.uniforms;return N}function U(S,v){let N;for(let G=0,C=h.length;G<C;G++){const $=h[G];if($.cacheKey===v){N=$,++N.usedTimes;break}}return N===void 0&&(N=new Rp(s,v,S,r),h.push(N)),N}function R(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:T,acquireProgram:U,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:k}}function Ip(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Up(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function oo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,m,_,x,p){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:x,group:p},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=x,d.group=p),e++,d}function a(u,f,m,_,x,p){const d=o(u,f,m,_,x,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(u,f,m,_,x,p){const d=o(u,f,m,_,x,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Up),n.length>1&&n.sort(f||oo),i.length>1&&i.sort(f||oo)}function h(){for(let u=e,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Np(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new lo,s.set(n,[o])):i>=r.length?(o=new lo,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Fp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ge};break;case"SpotLight":t={position:new P,direction:new P,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Op(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Bp=0;function kp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Hp(s){const e=new Fp,t=Op(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new it,o=new it;function a(c,h){let u=0,f=0,m=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let _=0,x=0,p=0,d=0,b=0,E=0,T=0,U=0,R=0,A=0,k=0;c.sort(kp);const S=h===!0?Math.PI:1;for(let N=0,G=c.length;N<G;N++){const C=c[N],$=C.color,X=C.intensity,Z=C.distance,Q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=$.r*X*S,f+=$.g*X*S,m+=$.b*X*S;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],X);k++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*S),C.castShadow){const te=C.shadow,ee=t.get(C);ee.shadowBias=te.bias,ee.shadowNormalBias=te.normalBias,ee.shadowRadius=te.radius,ee.shadowMapSize=te.mapSize,n.directionalShadow[_]=ee,n.directionalShadowMap[_]=Q,n.directionalShadowMatrix[_]=C.shadow.matrix,E++}n.directional[_]=V,_++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy($).multiplyScalar(X*S),V.distance=Z,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[p]=V;const te=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,te.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[p]=te.matrix,C.castShadow){const ee=t.get(C);ee.shadowBias=te.bias,ee.shadowNormalBias=te.normalBias,ee.shadowRadius=te.radius,ee.shadowMapSize=te.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=Q,U++}p++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy($).multiplyScalar(X),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[d]=V,d++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*S),V.distance=C.distance,V.decay=C.decay,C.castShadow){const te=C.shadow,ee=t.get(C);ee.shadowBias=te.bias,ee.shadowNormalBias=te.normalBias,ee.shadowRadius=te.radius,ee.shadowMapSize=te.mapSize,ee.shadowCameraNear=te.camera.near,ee.shadowCameraFar=te.camera.far,n.pointShadow[x]=ee,n.pointShadowMap[x]=Q,n.pointShadowMatrix[x]=C.shadow.matrix,T++}n.point[x]=V,x++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(X*S),V.groundColor.copy(C.groundColor).multiplyScalar(X*S),n.hemi[b]=V,b++}}d>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=m;const v=n.hash;(v.directionalLength!==_||v.pointLength!==x||v.spotLength!==p||v.rectAreaLength!==d||v.hemiLength!==b||v.numDirectionalShadows!==E||v.numPointShadows!==T||v.numSpotShadows!==U||v.numSpotMaps!==R||v.numLightProbes!==k)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=d,n.point.length=x,n.hemi.length=b,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=U,n.spotShadowMap.length=U,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=U+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=k,v.directionalLength=_,v.pointLength=x,v.spotLength=p,v.rectAreaLength=d,v.hemiLength=b,v.numDirectionalShadows=E,v.numPointShadows=T,v.numSpotShadows=U,v.numSpotMaps=R,v.numLightProbes=k,n.version=Bp++)}function l(c,h){let u=0,f=0,m=0,_=0,x=0;const p=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const E=c[d];if(E.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),u++}else if(E.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const T=n.hemi[x];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function co(s){const e=new Hp(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(h){e.setup(t,h)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zp(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new co(s),e.set(i,[a])):r>=o.length?(a=new co(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Gp extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vp extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$p=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xp(s,e,t){let n=new Tr;const i=new Se,r=new Se,o=new dt,a=new Gp({depthPacking:bc}),l=new Vp,c={},h=t.maxTextureSize,u={[yn]:Et,[Et]:yn,[Dt]:Dt},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Wp,fragmentShader:$p}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new $t;_.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Me(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let d=this.type;this.render=function(R,A,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const S=s.getRenderTarget(),v=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),G=s.state;G.setBlending(_n),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const C=d!==Qt&&this.type===Qt,$=d===Qt&&this.type!==Qt;for(let X=0,Z=R.length;X<Z;X++){const Q=R[X],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const te=V.getFrameExtents();if(i.multiply(te),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,V.mapSize.y=r.y)),V.map===null||C===!0||$===!0){const fe=this.type!==Qt?{minFilter:Lt,magFilter:Lt}:{};V.map!==null&&V.map.dispose(),V.map=new On(i.x,i.y,fe),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ee=V.getViewportCount();for(let fe=0;fe<ee;fe++){const Oe=V.getViewport(fe);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),G.viewport(o),V.updateMatrices(Q,fe),n=V.getFrustum(),T(A,k,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Qt&&b(V,k),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(S,v,N)};function b(R,A){const k=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new On(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,k,f,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,k,m,x,null)}function E(R,A,k,S){let v=null;const N=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)v=N;else if(v=k.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=v.uuid,C=A.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let X=$[C];X===void 0&&(X=v.clone(),$[C]=X,A.addEventListener("dispose",U)),v=X}if(v.visible=A.visible,v.wireframe=A.wireframe,S===Qt?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,k.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=s.properties.get(v);G.light=k}return v}function T(R,A,k,S,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Qt)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);const C=e.update(R),$=R.material;if(Array.isArray($)){const X=C.groups;for(let Z=0,Q=X.length;Z<Q;Z++){const V=X[Z],te=$[V.materialIndex];if(te&&te.visible){const ee=E(R,te,S,v);R.onBeforeShadow(s,R,A,k,C,ee,V),s.renderBufferDirect(k,null,C,ee,R,V),R.onAfterShadow(s,R,A,k,C,ee,V)}}}else if($.visible){const X=E(R,$,S,v);R.onBeforeShadow(s,R,A,k,C,X,null),s.renderBufferDirect(k,null,C,X,R,null),R.onAfterShadow(s,R,A,k,C,X,null)}}const G=R.children;for(let C=0,$=G.length;C<$;C++)T(G[C],A,k,S,v)}function U(R){R.target.removeEventListener("dispose",U);for(const k in c){const S=c[k],v=R.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}function qp(s){function e(){let g=!1;const D=new dt;let F=null;const Y=new dt(0,0,0,0);return{setMask:function(ie){F!==ie&&!g&&(s.colorMask(ie,ie,ie,ie),F=ie)},setLocked:function(ie){g=ie},setClear:function(ie,Re,Ne,nt,ct){ct===!0&&(ie*=nt,Re*=nt,Ne*=nt),D.set(ie,Re,Ne,nt),Y.equals(D)===!1&&(s.clearColor(ie,Re,Ne,nt),Y.copy(D))},reset:function(){g=!1,F=null,Y.set(-1,0,0,0)}}}function t(){let g=!1,D=null,F=null,Y=null;return{setTest:function(ie){ie?de(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(ie){D!==ie&&!g&&(s.depthMask(ie),D=ie)},setFunc:function(ie){if(F!==ie){switch(ie){case Kl:s.depthFunc(s.NEVER);break;case Zl:s.depthFunc(s.ALWAYS);break;case Jl:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case Ql:s.depthFunc(s.EQUAL);break;case ec:s.depthFunc(s.GEQUAL);break;case tc:s.depthFunc(s.GREATER);break;case nc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}F=ie}},setLocked:function(ie){g=ie},setClear:function(ie){Y!==ie&&(s.clearDepth(ie),Y=ie)},reset:function(){g=!1,D=null,F=null,Y=null}}}function n(){let g=!1,D=null,F=null,Y=null,ie=null,Re=null,Ne=null,nt=null,ct=null;return{setTest:function(Ve){g||(Ve?de(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(Ve){D!==Ve&&!g&&(s.stencilMask(Ve),D=Ve)},setFunc:function(Ve,st,Je){(F!==Ve||Y!==st||ie!==Je)&&(s.stencilFunc(Ve,st,Je),F=Ve,Y=st,ie=Je)},setOp:function(Ve,st,Je){(Re!==Ve||Ne!==st||nt!==Je)&&(s.stencilOp(Ve,st,Je),Re=Ve,Ne=st,nt=Je)},setLocked:function(Ve){g=Ve},setClear:function(Ve){ct!==Ve&&(s.clearStencil(Ve),ct=Ve)},reset:function(){g=!1,D=null,F=null,Y=null,ie=null,Re=null,Ne=null,nt=null,ct=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],m=null,_=!1,x=null,p=null,d=null,b=null,E=null,T=null,U=null,R=new Ge(0,0,0),A=0,k=!1,S=null,v=null,N=null,G=null,C=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=Z>=2);let V=null,te={};const ee=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),Oe=new dt().fromArray(ee),$e=new dt().fromArray(fe);function W(g,D,F,Y){const ie=new Uint8Array(4),Re=s.createTexture();s.bindTexture(g,Re),s.texParameteri(g,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(g,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<F;Ne++)g===s.TEXTURE_3D||g===s.TEXTURE_2D_ARRAY?s.texImage3D(D,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(D+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return Re}const ne={};ne[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),de(s.DEPTH_TEST),r.setFunc(hs),ke(!1),we(Vr),de(s.CULL_FACE),Ye(_n);function de(g){c[g]!==!0&&(s.enable(g),c[g]=!0)}function re(g){c[g]!==!1&&(s.disable(g),c[g]=!1)}function Be(g,D){return h[g]!==D?(s.bindFramebuffer(g,D),h[g]=D,g===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=D),g===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=D),!0):!1}function Ie(g,D){let F=f,Y=!1;if(g){F=u.get(D),F===void 0&&(F=[],u.set(D,F));const ie=g.textures;if(F.length!==ie.length||F[0]!==s.COLOR_ATTACHMENT0){for(let Re=0,Ne=ie.length;Re<Ne;Re++)F[Re]=s.COLOR_ATTACHMENT0+Re;F.length=ie.length,Y=!0}}else F[0]!==s.BACK&&(F[0]=s.BACK,Y=!0);Y&&s.drawBuffers(F)}function I(g){return m!==g?(s.useProgram(g),m=g,!0):!1}const qe={[In]:s.FUNC_ADD,[Il]:s.FUNC_SUBTRACT,[Ul]:s.FUNC_REVERSE_SUBTRACT};qe[Nl]=s.MIN,qe[Fl]=s.MAX;const _e={[Ol]:s.ZERO,[Bl]:s.ONE,[kl]:s.SRC_COLOR,[dr]:s.SRC_ALPHA,[$l]:s.SRC_ALPHA_SATURATE,[Vl]:s.DST_COLOR,[zl]:s.DST_ALPHA,[Hl]:s.ONE_MINUS_SRC_COLOR,[ur]:s.ONE_MINUS_SRC_ALPHA,[Wl]:s.ONE_MINUS_DST_COLOR,[Gl]:s.ONE_MINUS_DST_ALPHA,[Xl]:s.CONSTANT_COLOR,[ql]:s.ONE_MINUS_CONSTANT_COLOR,[Yl]:s.CONSTANT_ALPHA,[jl]:s.ONE_MINUS_CONSTANT_ALPHA};function Ye(g,D,F,Y,ie,Re,Ne,nt,ct,Ve){if(g===_n){_===!0&&(re(s.BLEND),_=!1);return}if(_===!1&&(de(s.BLEND),_=!0),g!==Ll){if(g!==x||Ve!==k){if((p!==In||E!==In)&&(s.blendEquation(s.FUNC_ADD),p=In,E=In),Ve)switch(g){case hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wr:s.blendFunc(s.ONE,s.ONE);break;case $r:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $r:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}d=null,b=null,T=null,U=null,R.set(0,0,0),A=0,x=g,k=Ve}return}ie=ie||D,Re=Re||F,Ne=Ne||Y,(D!==p||ie!==E)&&(s.blendEquationSeparate(qe[D],qe[ie]),p=D,E=ie),(F!==d||Y!==b||Re!==T||Ne!==U)&&(s.blendFuncSeparate(_e[F],_e[Y],_e[Re],_e[Ne]),d=F,b=Y,T=Re,U=Ne),(nt.equals(R)===!1||ct!==A)&&(s.blendColor(nt.r,nt.g,nt.b,ct),R.copy(nt),A=ct),x=g,k=!1}function ye(g,D){g.side===Dt?re(s.CULL_FACE):de(s.CULL_FACE);let F=g.side===Et;D&&(F=!F),ke(F),g.blending===hi&&g.transparent===!1?Ye(_n):Ye(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),r.setFunc(g.depthFunc),r.setTest(g.depthTest),r.setMask(g.depthWrite),i.setMask(g.colorWrite);const Y=g.stencilWrite;o.setTest(Y),Y&&(o.setMask(g.stencilWriteMask),o.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),o.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),et(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ke(g){S!==g&&(g?s.frontFace(s.CW):s.frontFace(s.CCW),S=g)}function we(g){g!==Pl?(de(s.CULL_FACE),g!==v&&(g===Vr?s.cullFace(s.BACK):g===Dl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),v=g}function He(g){g!==N&&(X&&s.lineWidth(g),N=g)}function et(g,D,F){g?(de(s.POLYGON_OFFSET_FILL),(G!==D||C!==F)&&(s.polygonOffset(D,F),G=D,C=F)):re(s.POLYGON_OFFSET_FILL)}function w(g){g?de(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function y(g){g===void 0&&(g=s.TEXTURE0+$-1),V!==g&&(s.activeTexture(g),V=g)}function z(g,D,F){F===void 0&&(V===null?F=s.TEXTURE0+$-1:F=V);let Y=te[F];Y===void 0&&(Y={type:void 0,texture:void 0},te[F]=Y),(Y.type!==g||Y.texture!==D)&&(V!==F&&(s.activeTexture(F),V=F),s.bindTexture(g,D||ne[g]),Y.type=g,Y.texture=D)}function q(){const g=te[V];g!==void 0&&g.type!==void 0&&(s.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ge(){try{s.texSubImage2D.apply(s,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function le(){try{s.texSubImage3D.apply(s,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ee(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function se(){try{s.texStorage2D.apply(s,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ve(){try{s.texImage3D.apply(s,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function he(g){Oe.equals(g)===!1&&(s.scissor(g.x,g.y,g.z,g.w),Oe.copy(g))}function Ae(g){$e.equals(g)===!1&&(s.viewport(g.x,g.y,g.z,g.w),$e.copy(g))}function Ue(g,D){let F=l.get(D);F===void 0&&(F=new WeakMap,l.set(D,F));let Y=F.get(g);Y===void 0&&(Y=s.getUniformBlockIndex(D,g.name),F.set(g,Y))}function je(g,D){const Y=l.get(D).get(g);a.get(D)!==Y&&(s.uniformBlockBinding(D,Y,g.__bindingPointIndex),a.set(D,Y))}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},V=null,te={},h={},u=new WeakMap,f=[],m=null,_=!1,x=null,p=null,d=null,b=null,E=null,T=null,U=null,R=new Ge(0,0,0),A=0,k=!1,S=null,v=null,N=null,G=null,C=null,Oe.set(0,0,s.canvas.width,s.canvas.height),$e.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:de,disable:re,bindFramebuffer:Be,drawBuffers:Ie,useProgram:I,setBlending:Ye,setMaterial:ye,setFlipSided:ke,setCullFace:we,setLineWidth:He,setPolygonOffset:et,setScissorTest:w,activeTexture:y,bindTexture:z,unbindTexture:q,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ze,texImage3D:ve,updateUBOMapping:Ue,uniformBlockBinding:je,texStorage2D:se,texStorage3D:me,texSubImage2D:ge,texSubImage3D:le,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ee,scissor:he,viewport:Ae,reset:Ce}}function Yp(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,y){return m?new OffscreenCanvas(w,y):ms("canvas")}function x(w,y,z){let q=1;const K=et(w);if((K.width>z||K.height>z)&&(q=z/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(q*K.width),ge=Math.floor(q*K.height);u===void 0&&(u=_(J,ge));const le=y?_(J,ge):u;return le.width=J,le.height=ge,le.getContext("2d").drawImage(w,0,0,J,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+ge+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==Lt&&w.minFilter!==Ot}function d(w){s.generateMipmap(w)}function b(w,y,z,q,K=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=y;if(y===s.RED&&(z===s.FLOAT&&(J=s.R32F),z===s.HALF_FLOAT&&(J=s.R16F),z===s.UNSIGNED_BYTE&&(J=s.R8)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.R8UI),z===s.UNSIGNED_SHORT&&(J=s.R16UI),z===s.UNSIGNED_INT&&(J=s.R32UI),z===s.BYTE&&(J=s.R8I),z===s.SHORT&&(J=s.R16I),z===s.INT&&(J=s.R32I)),y===s.RG&&(z===s.FLOAT&&(J=s.RG32F),z===s.HALF_FLOAT&&(J=s.RG16F),z===s.UNSIGNED_BYTE&&(J=s.RG8)),y===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RG8UI),z===s.UNSIGNED_SHORT&&(J=s.RG16UI),z===s.UNSIGNED_INT&&(J=s.RG32UI),z===s.BYTE&&(J=s.RG8I),z===s.SHORT&&(J=s.RG16I),z===s.INT&&(J=s.RG32I)),y===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),y===s.RGBA){const ge=K?ds:Ke.getTransfer(q);z===s.FLOAT&&(J=s.RGBA32F),z===s.HALF_FLOAT&&(J=s.RGBA16F),z===s.UNSIGNED_BYTE&&(J=ge===Qe?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(w,y){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){const y=w.target;y.removeEventListener("dispose",T),R(y),y.isVideoTexture&&h.delete(y)}function U(w){const y=w.target;y.removeEventListener("dispose",U),k(y)}function R(w){const y=n.get(w);if(y.__webglInit===void 0)return;const z=w.source,q=f.get(z);if(q){const K=q[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(w),Object.keys(q).length===0&&f.delete(z)}n.remove(w)}function A(w){const y=n.get(w);s.deleteTexture(y.__webglTexture);const z=w.source,q=f.get(z);delete q[y.__cacheKey],o.memory.textures--}function k(w){const y=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let K=0;K<y.__webglFramebuffer[q].length;K++)s.deleteFramebuffer(y.__webglFramebuffer[q][K]);else s.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)s.deleteFramebuffer(y.__webglFramebuffer[q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=w.textures;for(let q=0,K=z.length;q<K;q++){const J=n.get(z[q]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(w)}let S=0;function v(){S=0}function N(){const w=S;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),S+=1,w}function G(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function C(w,y){const z=n.get(w);if(w.isVideoTexture&&we(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(z,w,y);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function $(w,y){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Oe(z,w,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function X(w,y){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Oe(z,w,y);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function Z(w,y){const z=n.get(w);if(w.version>0&&z.__version!==w.version){$e(z,w,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}const Q={[mr]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[gr]:s.MIRRORED_REPEAT},V={[Lt]:s.NEAREST,[uc]:s.NEAREST_MIPMAP_NEAREST,[ki]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[Cs]:s.LINEAR_MIPMAP_NEAREST,[Fn]:s.LINEAR_MIPMAP_LINEAR},te={[wc]:s.NEVER,[Lc]:s.ALWAYS,[Ac]:s.LESS,[Oo]:s.LEQUAL,[Rc]:s.EQUAL,[Dc]:s.GEQUAL,[Cc]:s.GREATER,[Pc]:s.NOTEQUAL};function ee(w,y){if(y.type===gn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ot||y.magFilter===Cs||y.magFilter===ki||y.magFilter===Fn||y.minFilter===Ot||y.minFilter===Cs||y.minFilter===ki||y.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,Q[y.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Q[y.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Q[y.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,V[y.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,V[y.minFilter]),y.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,te[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Lt||y.minFilter!==ki&&y.minFilter!==Fn||y.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function fe(w,y){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",T));const q=y.source;let K=f.get(q);K===void 0&&(K={},f.set(q,K));const J=G(y);if(J!==w.__cacheKey){K[J]===void 0&&(K[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[J].usedTimes++;const ge=K[w.__cacheKey];ge!==void 0&&(K[w.__cacheKey].usedTimes--,ge.usedTimes===0&&A(y)),w.__cacheKey=J,w.__webglTexture=K[J].texture}return z}function Oe(w,y,z){let q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=s.TEXTURE_3D);const K=fe(w,y),J=y.source;t.bindTexture(q,w.__webglTexture,s.TEXTURE0+z);const ge=n.get(J);if(J.version!==ge.__version||K===!0){t.activeTexture(s.TEXTURE0+z);const le=Ke.getPrimaries(Ke.workingColorSpace),oe=y.colorSpace===mn?null:Ke.getPrimaries(y.colorSpace),Ee=y.colorSpace===mn||le===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let se=x(y.image,!1,i.maxTextureSize);se=He(y,se);const me=r.convert(y.format,y.colorSpace),ze=r.convert(y.type);let ve=b(y.internalFormat,me,ze,y.colorSpace,y.isVideoTexture);ee(q,y);let he;const Ae=y.mipmaps,Ue=y.isVideoTexture!==!0,je=ge.__version===void 0||K===!0,Ce=J.dataReady,g=E(y,se);if(y.isDepthTexture)ve=s.DEPTH_COMPONENT16,y.type===gn?ve=s.DEPTH_COMPONENT32F:y.type===gi?ve=s.DEPTH_COMPONENT24:y.type===Ni&&(ve=s.DEPTH24_STENCIL8),je&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,ve,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,ve,se.width,se.height,0,me,ze,null));else if(y.isDataTexture)if(Ae.length>0){Ue&&je&&t.texStorage2D(s.TEXTURE_2D,g,ve,Ae[0].width,Ae[0].height);for(let D=0,F=Ae.length;D<F;D++)he=Ae[D],Ue?Ce&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,he.width,he.height,me,ze,he.data):t.texImage2D(s.TEXTURE_2D,D,ve,he.width,he.height,0,me,ze,he.data);y.generateMipmaps=!1}else Ue?(je&&t.texStorage2D(s.TEXTURE_2D,g,ve,se.width,se.height),Ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,me,ze,se.data)):t.texImage2D(s.TEXTURE_2D,0,ve,se.width,se.height,0,me,ze,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,g,ve,Ae[0].width,Ae[0].height,se.depth);for(let D=0,F=Ae.length;D<F;D++)he=Ae[D],y.format!==Gt?me!==null?Ue?Ce&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,he.width,he.height,se.depth,me,he.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,D,ve,he.width,he.height,se.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?Ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,he.width,he.height,se.depth,me,ze,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,D,ve,he.width,he.height,se.depth,0,me,ze,he.data)}else{Ue&&je&&t.texStorage2D(s.TEXTURE_2D,g,ve,Ae[0].width,Ae[0].height);for(let D=0,F=Ae.length;D<F;D++)he=Ae[D],y.format!==Gt?me!==null?Ue?Ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,D,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(s.TEXTURE_2D,D,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?Ce&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,he.width,he.height,me,ze,he.data):t.texImage2D(s.TEXTURE_2D,D,ve,he.width,he.height,0,me,ze,he.data)}else if(y.isDataArrayTexture)Ue?(je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,g,ve,se.width,se.height,se.depth),Ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,ze,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,se.width,se.height,se.depth,0,me,ze,se.data);else if(y.isData3DTexture)Ue?(je&&t.texStorage3D(s.TEXTURE_3D,g,ve,se.width,se.height,se.depth),Ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,ze,se.data)):t.texImage3D(s.TEXTURE_3D,0,ve,se.width,se.height,se.depth,0,me,ze,se.data);else if(y.isFramebufferTexture){if(je)if(Ue)t.texStorage2D(s.TEXTURE_2D,g,ve,se.width,se.height);else{let D=se.width,F=se.height;for(let Y=0;Y<g;Y++)t.texImage2D(s.TEXTURE_2D,Y,ve,D,F,0,me,ze,null),D>>=1,F>>=1}}else if(Ae.length>0){if(Ue&&je){const D=et(Ae[0]);t.texStorage2D(s.TEXTURE_2D,g,ve,D.width,D.height)}for(let D=0,F=Ae.length;D<F;D++)he=Ae[D],Ue?Ce&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,me,ze,he):t.texImage2D(s.TEXTURE_2D,D,ve,me,ze,he);y.generateMipmaps=!1}else if(Ue){if(je){const D=et(se);t.texStorage2D(s.TEXTURE_2D,g,ve,D.width,D.height)}Ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,ze,se)}else t.texImage2D(s.TEXTURE_2D,0,ve,me,ze,se);p(y)&&d(q),ge.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function $e(w,y,z){if(y.image.length!==6)return;const q=fe(w,y),K=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+z);const J=n.get(K);if(K.version!==J.__version||q===!0){t.activeTexture(s.TEXTURE0+z);const ge=Ke.getPrimaries(Ke.workingColorSpace),le=y.colorSpace===mn?null:Ke.getPrimaries(y.colorSpace),oe=y.colorSpace===mn||ge===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,me=[];for(let F=0;F<6;F++)!Ee&&!se?me[F]=x(y.image[F],!0,i.maxCubemapSize):me[F]=se?y.image[F].image:y.image[F],me[F]=He(y,me[F]);const ze=me[0],ve=r.convert(y.format,y.colorSpace),he=r.convert(y.type),Ae=b(y.internalFormat,ve,he,y.colorSpace),Ue=y.isVideoTexture!==!0,je=J.__version===void 0||q===!0,Ce=K.dataReady;let g=E(y,ze);ee(s.TEXTURE_CUBE_MAP,y);let D;if(Ee){Ue&&je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,g,Ae,ze.width,ze.height);for(let F=0;F<6;F++){D=me[F].mipmaps;for(let Y=0;Y<D.length;Y++){const ie=D[Y];y.format!==Gt?ve!==null?Ue?Ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y,0,0,ie.width,ie.height,ve,ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y,Ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y,0,0,ie.width,ie.height,ve,he,ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y,Ae,ie.width,ie.height,0,ve,he,ie.data)}}}else{if(D=y.mipmaps,Ue&&je){D.length>0&&g++;const F=et(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,g,Ae,F.width,F.height)}for(let F=0;F<6;F++)if(se){Ue?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,me[F].width,me[F].height,ve,he,me[F].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ae,me[F].width,me[F].height,0,ve,he,me[F].data);for(let Y=0;Y<D.length;Y++){const Re=D[Y].image[F].image;Ue?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y+1,0,0,Re.width,Re.height,ve,he,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y+1,Ae,Re.width,Re.height,0,ve,he,Re.data)}}else{Ue?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ve,he,me[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ae,ve,he,me[F]);for(let Y=0;Y<D.length;Y++){const ie=D[Y];Ue?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y+1,0,0,ve,he,ie.image[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,Y+1,Ae,ve,he,ie.image[F])}}}p(y)&&d(s.TEXTURE_CUBE_MAP),J.__version=K.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function W(w,y,z,q,K,J){const ge=r.convert(z.format,z.colorSpace),le=r.convert(z.type),oe=b(z.internalFormat,ge,le,z.colorSpace);if(!n.get(y).__hasExternalTextures){const se=Math.max(1,y.width>>J),me=Math.max(1,y.height>>J);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,J,oe,se,me,y.depth,0,ge,le,null):t.texImage2D(K,J,oe,se,me,0,ge,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ke(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,K,n.get(z).__webglTexture,0,ye(y)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,K,n.get(z).__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(w,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let q=s.DEPTH_COMPONENT24;if(z||ke(y)){const K=y.depthTexture;K&&K.isDepthTexture&&(K.type===gn?q=s.DEPTH_COMPONENT32F:K.type===gi&&(q=s.DEPTH_COMPONENT24));const J=ye(y);ke(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,q,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,J,q,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,q,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const q=ye(y);z&&ke(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,q,s.DEPTH24_STENCIL8,y.width,y.height):ke(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,q,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const q=y.textures;for(let K=0;K<q.length;K++){const J=q[K],ge=r.convert(J.format,J.colorSpace),le=r.convert(J.type),oe=b(J.internalFormat,ge,le,J.colorSpace),Ee=ye(y);z&&ke(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,oe,y.width,y.height):ke(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,oe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,oe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function de(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),C(y.depthTexture,0);const q=n.get(y.depthTexture).__webglTexture,K=ye(y);if(y.depthTexture.format===di)ke(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0);else if(y.depthTexture.format===Ii)ke(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function re(w){const y=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");de(y.__webglFramebuffer,w)}else if(z){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]=s.createRenderbuffer(),ne(y.__webglDepthbuffer[q],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),ne(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(w,y,z){const q=n.get(w);y!==void 0&&W(q.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&re(w)}function Ie(w){const y=w.texture,z=n.get(w),q=n.get(y);w.addEventListener("dispose",U);const K=w.textures,J=w.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=y.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let oe=0;oe<y.mipmaps.length;oe++)z.__webglFramebuffer[le][oe]=s.createFramebuffer()}else z.__webglFramebuffer[le]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)z.__webglFramebuffer[le]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ge)for(let le=0,oe=K.length;le<oe;le++){const Ee=n.get(K[le]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&ke(w)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){const oe=K[le];z.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[le]);const Ee=r.convert(oe.format,oe.colorSpace),se=r.convert(oe.type),me=b(oe.internalFormat,Ee,se,oe.colorSpace,w.isXRRenderTarget===!0),ze=ye(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,z.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),ee(s.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)W(z.__webglFramebuffer[le][oe],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,oe);else W(z.__webglFramebuffer[le],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(y)&&d(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let le=0,oe=K.length;le<oe;le++){const Ee=K[le],se=n.get(Ee);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),ee(s.TEXTURE_2D,Ee),W(z.__webglFramebuffer,w,Ee,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),p(Ee)&&d(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,q.__webglTexture),ee(le,y),y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)W(z.__webglFramebuffer[oe],w,y,s.COLOR_ATTACHMENT0,le,oe);else W(z.__webglFramebuffer,w,y,s.COLOR_ATTACHMENT0,le,0);p(y)&&d(le),t.unbindTexture()}w.depthBuffer&&re(w)}function I(w){const y=w.textures;for(let z=0,q=y.length;z<q;z++){const K=y[z];if(p(K)){const J=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ge=n.get(K).__webglTexture;t.bindTexture(J,ge),d(J),t.unbindTexture()}}}const qe=[],_e=[];function Ye(w){if(w.samples>0){if(ke(w)===!1){const y=w.textures,z=w.width,q=w.height;let K=s.COLOR_BUFFER_BIT;const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(w),le=y.length>1;if(le)for(let oe=0;oe<y.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let oe=0;oe<y.length;oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[oe]);const Ee=n.get(y[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,z,q,0,0,z,q,K,s.NEAREST),l===!0&&(qe.length=0,_e.length=0,qe.push(s.COLOR_ATTACHMENT0+oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(qe.push(J),_e.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let oe=0;oe<y.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,ge.__webglColorRenderbuffer[oe]);const Ee=n.get(y[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ye(w){return Math.min(i.maxSamples,w.samples)}function ke(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function we(w){const y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function He(w,y){const z=w.colorSpace,q=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Sn&&z!==mn&&(Ke.getTransfer(z)===Qe?(q!==Gt||K!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function et(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=v,this.setTexture2D=C,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=Be,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=W,this.useMultisampledRTT=ke}function jp(s,e){function t(n,i=mn){let r;const o=Ke.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===Do)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===mc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return s.BYTE;if(n===pc)return s.SHORT;if(n===Co)return s.UNSIGNED_SHORT;if(n===Po)return s.INT;if(n===gi)return s.UNSIGNED_INT;if(n===gn)return s.FLOAT;if(n===_s)return s.HALF_FLOAT;if(n===gc)return s.ALPHA;if(n===_c)return s.RGB;if(n===Gt)return s.RGBA;if(n===vc)return s.LUMINANCE;if(n===yc)return s.LUMINANCE_ALPHA;if(n===di)return s.DEPTH_COMPONENT;if(n===Ii)return s.DEPTH_STENCIL;if(n===xc)return s.RED;if(n===Io)return s.RED_INTEGER;if(n===Mc)return s.RG;if(n===Uo)return s.RG_INTEGER;if(n===No)return s.RGBA_INTEGER;if(n===Ps||n===Ds||n===Ls||n===Is)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qr||n===Yr||n===jr||n===Kr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zr||n===Jr||n===Qr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zr||n===Jr)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qr)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===da||n===ua||n===fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ta)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ua)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===pa||n===ma)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Us)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sc||n===ga||n===_a||n===va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Us)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Kp extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zp={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new St,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Mn({vertexShader:Jp,fragmentShader:Qp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Me(new nn(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class tm extends Hn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null;const x=new em,p=t.getContextAttributes();let d=null,b=null;const E=[],T=[],U=new Se;let R=null;const A=new Pt;A.layers.enable(1),A.viewport=new dt;const k=new Pt;k.layers.enable(2),k.viewport=new dt;const S=[A,k],v=new Kp;v.layers.enable(1),v.layers.enable(2);let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=E[W];return ne===void 0&&(ne=new rr,E[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=E[W];return ne===void 0&&(ne=new rr,E[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=E[W];return ne===void 0&&(ne=new rr,E[W]=ne),ne.getHandSpace()};function C(W){const ne=T.indexOf(W.inputSource);if(ne===-1)return;const de=E[ne];de!==void 0&&(de.update(W.inputSource,W.frame,c||o),de.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",X);for(let W=0;W<E.length;W++){const ne=T[W];ne!==null&&(T[W]=null,E[W].disconnect(ne))}N=null,G=null,x.reset(),e.setRenderTarget(d),m=null,f=null,u=null,i=null,b=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",$),i.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new On(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,de=null,re=null;p.depth&&(re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?Ii:di,de=p.stencil?Ni:gi);const Be={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new On(f.textureWidth,f.textureHeight,{format:Gt,type:xn,depthTexture:new jo(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(W){for(let ne=0;ne<W.removed.length;ne++){const de=W.removed[ne],re=T.indexOf(de);re>=0&&(T[re]=null,E[re].disconnect(de))}for(let ne=0;ne<W.added.length;ne++){const de=W.added[ne];let re=T.indexOf(de);if(re===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=T.length){T.push(de),re=Ie;break}else if(T[Ie]===null){T[Ie]=de,re=Ie;break}if(re===-1)break}const Be=E[re];Be&&Be.connect(de)}}const Z=new P,Q=new P;function V(W,ne,de){Z.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(de.matrixWorld);const re=Z.distanceTo(Q),Be=ne.projectionMatrix.elements,Ie=de.projectionMatrix.elements,I=Be[14]/(Be[10]-1),qe=Be[14]/(Be[10]+1),_e=(Be[9]+1)/Be[5],Ye=(Be[9]-1)/Be[5],ye=(Be[8]-1)/Be[0],ke=(Ie[8]+1)/Ie[0],we=I*ye,He=I*ke,et=re/(-ye+ke),w=et*-ye;ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(w),W.translateZ(et),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const y=I+et,z=qe+et,q=we-w,K=He+(re-w),J=_e*qe/z*y,ge=Ye*qe/z*y;W.projectionMatrix.makePerspective(q,K,J,ge,y,z),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function te(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),v.near=k.near=A.near=W.near,v.far=k.far=A.far=W.far,(N!==v.near||G!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),N=v.near,G=v.far,A.near=N,A.far=G,k.near=N,k.far=G,A.updateProjectionMatrix(),k.updateProjectionMatrix(),W.updateProjectionMatrix());const ne=W.parent,de=v.cameras;te(v,ne);for(let re=0;re<de.length;re++)te(de[re],ne);de.length===2?V(v,A,k):v.projectionMatrix.copy(A.projectionMatrix),ee(W,v,ne)};function ee(W,ne,de){de===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ui*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null};let fe=null;function Oe(W,ne){if(h=ne.getViewerPose(c||o),_=ne,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let re=!1;de.length!==v.cameras.length&&(v.cameras.length=0,re=!0);for(let Ie=0;Ie<de.length;Ie++){const I=de[Ie];let qe=null;if(m!==null)qe=m.getViewport(I);else{const Ye=u.getViewSubImage(f,I);qe=Ye.viewport,Ie===0&&(e.setRenderTargetTextures(b,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(b))}let _e=S[Ie];_e===void 0&&(_e=new Pt,_e.layers.enable(Ie),_e.viewport=new dt,S[Ie]=_e),_e.matrix.fromArray(I.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(I.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(qe.x,qe.y,qe.width,qe.height),Ie===0&&(v.matrix.copy(_e.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),re===!0&&v.cameras.push(_e)}const Be=i.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ie=u.getDepthInformation(de[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,i.renderState)}}for(let de=0;de<E.length;de++){const re=T[de],Be=E[de];re!==null&&Be!==void 0&&Be.update(re,ne,c||o)}x.render(e,v),fe&&fe(W,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}const $e=new qo;$e.setAnimationLoop(Oe),this.setAnimationLoop=function(W){fe=W},this.dispose=function(){}}}const Pn=new Wt,nm=new it;function im(s,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Wo(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,b,E,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,T)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,b,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Et&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Et&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d),E=b.envMap,T=b.envMapRotation;if(E&&(p.envMap.value=E,Pn.copy(T),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),p.envMapRotation.value.setFromMatrix4(nm.makeRotationFromEuler(Pn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const U=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*U,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=E*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Et&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sm(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const T=E.program;n.uniformBlockBinding(b,T)}function c(b,E){let T=i[b.id];T===void 0&&(_(b),T=h(b),i[b.id]=T,b.addEventListener("dispose",p));const U=E.program;n.updateUBOMapping(b,U);const R=e.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){const E=u();b.__bindingPointIndex=E;const T=s.createBuffer(),U=b.__size,R=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,U,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,T),T}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=i[b.id],T=b.uniforms,U=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let R=0,A=T.length;R<A;R++){const k=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,v=k.length;S<v;S++){const N=k[S];if(m(N,R,S,U)===!0){const G=N.__offset,C=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let X=0;X<C.length;X++){const Z=C[X],Q=x(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,G+$,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(b,E,T,U){const R=b.value,A=E+"_"+T;if(U[A]===void 0)return typeof R=="number"||typeof R=="boolean"?U[A]=R:U[A]=R.clone(),!0;{const k=U[A];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return U[A]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function _(b){const E=b.uniforms;let T=0;const U=16;for(let A=0,k=E.length;A<k;A++){const S=Array.isArray(E[A])?E[A]:[E[A]];for(let v=0,N=S.length;v<N;v++){const G=S[v],C=Array.isArray(G.value)?G.value:[G.value];for(let $=0,X=C.length;$<X;$++){const Z=C[$],Q=x(Z),V=T%U;V!==0&&U-V<Q.boundary&&(T+=U-V),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=Q.storage}}}const R=T%U;return R>0&&(T+=U-R),b.__size=T,b.__cache={},this}function x(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function d(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}class rm{constructor(e={}){const{canvas:t=Kc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const E=this;let T=!1,U=0,R=0,A=null,k=-1,S=null;const v=new dt,N=new dt;let G=null;const C=new Ge(0);let $=0,X=t.width,Z=t.height,Q=1,V=null,te=null;const ee=new dt(0,0,X,Z),fe=new dt(0,0,X,Z);let Oe=!1;const $e=new Tr;let W=!1,ne=!1;const de=new it,re=new P,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return A===null?Q:1}let I=n;function qe(M,L){return t.getContext(M,L)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yr}`),t.addEventListener("webglcontextlost",g,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",F,!1),I===null){const L="webgl2";if(I=qe(L,M),I===null)throw qe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let _e,Ye,ye,ke,we,He,et,w,y,z,q,K,J,ge,le,oe,Ee,se,me,ze,ve,he,Ae,Ue;function je(){_e=new ff(I),_e.init(),he=new jp(I,_e),Ye=new of(I,_e,e,he),ye=new qp(I),ke=new gf(I),we=new Ip,He=new Yp(I,_e,ye,we,Ye,he,ke),et=new cf(E),w=new uf(E),y=new Sh(I),Ae=new rf(I,y),z=new pf(I,y,ke,Ae),q=new vf(I,z,y,ke),me=new _f(I,Ye,He),oe=new lf(we),K=new Lp(E,et,w,_e,Ye,Ae,oe),J=new im(E,we),ge=new Np,le=new zp(_e),se=new sf(E,et,w,ye,q,f,l),Ee=new Xp(E,q,Ye),Ue=new sm(I,ke,Ye,ye),ze=new af(I,_e,ke),ve=new mf(I,_e,ke),ke.programs=K.programs,E.capabilities=Ye,E.extensions=_e,E.properties=we,E.renderLists=ge,E.shadowMap=Ee,E.state=ye,E.info=ke}je();const Ce=new tm(E,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=_e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=_e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(M){M!==void 0&&(Q=M,this.setSize(X,Z,!1))},this.getSize=function(M){return M.set(X,Z)},this.setSize=function(M,L,H=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,Z=L,t.width=Math.floor(M*Q),t.height=Math.floor(L*Q),H===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(X*Q,Z*Q).floor()},this.setDrawingBufferSize=function(M,L,H){X=M,Z=L,Q=H,t.width=Math.floor(M*H),t.height=Math.floor(L*H),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(ee)},this.setViewport=function(M,L,H,O){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,L,H,O),ye.viewport(v.copy(ee).multiplyScalar(Q).round())},this.getScissor=function(M){return M.copy(fe)},this.setScissor=function(M,L,H,O){M.isVector4?fe.set(M.x,M.y,M.z,M.w):fe.set(M,L,H,O),ye.scissor(N.copy(fe).multiplyScalar(Q).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(M){ye.setScissorTest(Oe=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){te=M},this.getClearColor=function(M){return M.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(M=!0,L=!0,H=!0){let O=0;if(M){let B=!1;if(A!==null){const ce=A.texture.format;B=ce===No||ce===Uo||ce===Io}if(B){const ce=A.texture.type,ue=ce===xn||ce===gi||ce===Co||ce===Ni||ce===Do||ce===Lo,pe=se.getClearColor(),xe=se.getClearAlpha(),be=pe.r,Pe=pe.g,Fe=pe.b;ue?(m[0]=be,m[1]=Pe,m[2]=Fe,m[3]=xe,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=be,_[1]=Pe,_[2]=Fe,_[3]=xe,I.clearBufferiv(I.COLOR,0,_))}else O|=I.COLOR_BUFFER_BIT}L&&(O|=I.DEPTH_BUFFER_BIT),H&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",g,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",F,!1),ge.dispose(),le.dispose(),we.dispose(),et.dispose(),w.dispose(),q.dispose(),Ae.dispose(),Ue.dispose(),K.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ve),Ce.removeEventListener("sessionend",st),Je.stop()};function g(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=ke.autoReset,L=Ee.enabled,H=Ee.autoUpdate,O=Ee.needsUpdate,B=Ee.type;je(),ke.autoReset=M,Ee.enabled=L,Ee.autoUpdate=H,Ee.needsUpdate=O,Ee.type=B}function F(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Y(M){const L=M.target;L.removeEventListener("dispose",Y),ie(L)}function ie(M){Re(M),we.remove(M)}function Re(M){const L=we.get(M).programs;L!==void 0&&(L.forEach(function(H){K.releaseProgram(H)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,H,O,B,ce){L===null&&(L=Be);const ue=B.isMesh&&B.matrixWorld.determinant()<0,pe=al(M,L,H,O,B);ye.setMaterial(O,ue);let xe=H.index,be=1;if(O.wireframe===!0){if(xe=z.getWireframeAttribute(H),xe===void 0)return;be=2}const Pe=H.drawRange,Fe=H.attributes.position;let rt=Pe.start*be,ut=(Pe.start+Pe.count)*be;ce!==null&&(rt=Math.max(rt,ce.start*be),ut=Math.min(ut,(ce.start+ce.count)*be)),xe!==null?(rt=Math.max(rt,0),ut=Math.min(ut,xe.count)):Fe!=null&&(rt=Math.max(rt,0),ut=Math.min(ut,Fe.count));const bt=ut-rt;if(bt<0||bt===1/0)return;Ae.setup(B,O,pe,H,xe);let qt,We=ze;if(xe!==null&&(qt=y.get(xe),We=ve,We.setIndex(qt)),B.isMesh)O.wireframe===!0?(ye.setLineWidth(O.wireframeLinewidth*Ie()),We.setMode(I.LINES)):We.setMode(I.TRIANGLES);else if(B.isLine){let Te=O.linewidth;Te===void 0&&(Te=1),ye.setLineWidth(Te*Ie()),B.isLineSegments?We.setMode(I.LINES):B.isLineLoop?We.setMode(I.LINE_LOOP):We.setMode(I.LINE_STRIP)}else B.isPoints?We.setMode(I.POINTS):B.isSprite&&We.setMode(I.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?We.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):We.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)We.renderInstances(rt,bt,B.count);else if(H.isInstancedBufferGeometry){const Te=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Si=Math.min(H.instanceCount,Te);We.renderInstances(rt,bt,Si)}else We.render(rt,bt)};function Ne(M,L,H){M.transparent===!0&&M.side===Dt&&M.forceSinglePass===!1?(M.side=Et,M.needsUpdate=!0,Bi(M,L,H),M.side=yn,M.needsUpdate=!0,Bi(M,L,H),M.side=Dt):Bi(M,L,H)}this.compile=function(M,L,H=null){H===null&&(H=M),p=le.get(H),p.init(L),b.push(p),H.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),M!==H&&M.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(E._useLegacyLights);const O=new Set;return M.traverse(function(B){const ce=B.material;if(ce)if(Array.isArray(ce))for(let ue=0;ue<ce.length;ue++){const pe=ce[ue];Ne(pe,H,B),O.add(pe)}else Ne(ce,H,B),O.add(ce)}),b.pop(),p=null,O},this.compileAsync=function(M,L,H=null){const O=this.compile(M,L,H);return new Promise(B=>{function ce(){if(O.forEach(function(ue){we.get(ue).currentProgram.isReady()&&O.delete(ue)}),O.size===0){B(M);return}setTimeout(ce,10)}_e.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let nt=null;function ct(M){nt&&nt(M)}function Ve(){Je.stop()}function st(){Je.start()}const Je=new qo;Je.setAnimationLoop(ct),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(M){nt=M,Ce.setAnimationLoop(M),M===null?Je.stop():Je.start()},Ce.addEventListener("sessionstart",Ve),Ce.addEventListener("sessionend",st),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(L),L=Ce.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,L,A),p=le.get(M,b.length),p.init(L),b.push(p),de.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$e.setFromProjectionMatrix(de),ne=this.localClippingEnabled,W=oe.init(this.clippingPlanes,ne),x=ge.get(M,d.length),x.init(),d.push(x),sn(M,L,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(V,te);const H=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1;H&&se.addToRenderList(x,M),this.info.render.frame++,W===!0&&oe.beginShadows();const O=p.state.shadowsArray;Ee.render(O,M,L),W===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=x.opaque,ce=x.transmissive;if(p.setupLights(E._useLegacyLights),L.isArrayCamera){const ue=L.cameras;if(ce.length>0)for(let pe=0,xe=ue.length;pe<xe;pe++){const be=ue[pe];rn(B,ce,M,be)}H&&se.render(M);for(let pe=0,xe=ue.length;pe<xe;pe++){const be=ue[pe];At(x,M,be,be.viewport)}}else ce.length>0&&rn(B,ce,M,L),H&&se.render(M),At(x,M,L);A!==null&&(He.updateMultisampleRenderTarget(A),He.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(E,M,L),Ae.resetDefaultState(),k=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],W===!0&&oe.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function sn(M,L,H,O){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$e.intersectsSprite(M)){O&&re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(de);const ue=q.update(M),pe=M.material;pe.visible&&x.push(M,ue,pe,H,re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$e.intersectsObject(M))){const ue=q.update(M),pe=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),re.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),re.copy(ue.boundingSphere.center)),re.applyMatrix4(M.matrixWorld).applyMatrix4(de)),Array.isArray(pe)){const xe=ue.groups;for(let be=0,Pe=xe.length;be<Pe;be++){const Fe=xe[be],rt=pe[Fe.materialIndex];rt&&rt.visible&&x.push(M,ue,rt,H,re.z,Fe)}}else pe.visible&&x.push(M,ue,pe,H,re.z,null)}}const ce=M.children;for(let ue=0,pe=ce.length;ue<pe;ue++)sn(ce[ue],L,H,O)}function At(M,L,H,O){const B=M.opaque,ce=M.transmissive,ue=M.transparent;p.setupLightsView(H),W===!0&&oe.setGlobalState(E.clippingPlanes,H),O&&ye.viewport(v.copy(O)),B.length>0&&Xt(B,L,H),ce.length>0&&Xt(ce,L,H),ue.length>0&&Xt(ue,L,H),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function rn(M,L,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new On(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?_s:xn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ce=p.state.transmissionRenderTarget[O.id],ue=O.viewport||v;ce.setSize(ue.z,ue.w);const pe=E.getRenderTarget();E.setRenderTarget(ce),E.getClearColor(C),$=E.getClearAlpha(),$<1&&E.setClearColor(16777215,.5),E.clear();const xe=E.toneMapping;E.toneMapping=vn;const be=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),W===!0&&oe.setGlobalState(E.clippingPlanes,O),Xt(M,H,O),He.updateMultisampleRenderTarget(ce),He.updateRenderTargetMipmap(ce),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Fe=0,rt=L.length;Fe<rt;Fe++){const ut=L[Fe],bt=ut.object,qt=ut.geometry,We=ut.material,Te=ut.group;if(We.side===Dt&&bt.layers.test(O.layers)){const Si=We.side;We.side=Et,We.needsUpdate=!0,Mi(bt,H,O,qt,We,Te),We.side=Si,We.needsUpdate=!0,Pe=!0}}Pe===!0&&(He.updateMultisampleRenderTarget(ce),He.updateRenderTargetMipmap(ce))}E.setRenderTarget(pe),E.setClearColor(C,$),be!==void 0&&(O.viewport=be),E.toneMapping=xe}function Xt(M,L,H){const O=L.isScene===!0?L.overrideMaterial:null;for(let B=0,ce=M.length;B<ce;B++){const ue=M[B],pe=ue.object,xe=ue.geometry,be=O===null?ue.material:O,Pe=ue.group;pe.layers.test(H.layers)&&Mi(pe,L,H,xe,be,Pe)}}function Mi(M,L,H,O,B,ce){M.onBeforeRender(E,L,H,O,B,ce),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(E,L,H,O,M,ce),B.transparent===!0&&B.side===Dt&&B.forceSinglePass===!1?(B.side=Et,B.needsUpdate=!0,E.renderBufferDirect(H,L,O,B,M,ce),B.side=yn,B.needsUpdate=!0,E.renderBufferDirect(H,L,O,B,M,ce),B.side=Dt):E.renderBufferDirect(H,L,O,B,M,ce),M.onAfterRender(E,L,H,O,B,ce)}function Bi(M,L,H){L.isScene!==!0&&(L=Be);const O=we.get(M),B=p.state.lights,ce=p.state.shadowsArray,ue=B.state.version,pe=K.getParameters(M,B.state,ce,L,H),xe=K.getProgramCacheKey(pe);let be=O.programs;O.environment=M.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(M.isMeshStandardMaterial?w:et).get(M.envMap||O.environment),O.envMapRotation=O.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,be===void 0&&(M.addEventListener("dispose",Y),be=new Map,O.programs=be);let Pe=be.get(xe);if(Pe!==void 0){if(O.currentProgram===Pe&&O.lightsStateVersion===ue)return Pr(M,pe),Pe}else pe.uniforms=K.getUniforms(M),M.onBuild(H,pe,E),M.onBeforeCompile(pe,E),Pe=K.acquireProgram(pe,xe),be.set(xe,Pe),O.uniforms=pe.uniforms;const Fe=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Fe.clippingPlanes=oe.uniform),Pr(M,pe),O.needsLights=ll(M),O.lightsStateVersion=ue,O.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),O.currentProgram=Pe,O.uniformsList=null,Pe}function Cr(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=ls.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Pr(M,L){const H=we.get(M);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function al(M,L,H,O,B){L.isScene!==!0&&(L=Be),He.resetTextureUnits();const ce=L.fog,ue=O.isMeshStandardMaterial?L.environment:null,pe=A===null?E.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Sn,xe=(O.isMeshStandardMaterial?w:et).get(O.envMap||ue),be=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Fe=!!H.morphAttributes.position,rt=!!H.morphAttributes.normal,ut=!!H.morphAttributes.color;let bt=vn;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(bt=E.toneMapping);const qt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,We=qt!==void 0?qt.length:0,Te=we.get(O),Si=p.state.lights;if(W===!0&&(ne===!0||M!==S)){const Rt=M===S&&O.id===k;oe.setState(O,M,Rt)}let tt=!1;O.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Si.state.version||Te.outputColorSpace!==pe||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Te.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Te.instancingMorph===!1&&B.morphTexture!==null||Te.envMap!==xe||O.fog===!0&&Te.fog!==ce||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==oe.numPlanes||Te.numIntersection!==oe.numIntersection)||Te.vertexAlphas!==be||Te.vertexTangents!==Pe||Te.morphTargets!==Fe||Te.morphNormals!==rt||Te.morphColors!==ut||Te.toneMapping!==bt||Te.morphTargetsCount!==We)&&(tt=!0):(tt=!0,Te.__version=O.version);let En=Te.currentProgram;tt===!0&&(En=Bi(O,L,B));let Dr=!1,Ei=!1,xs=!1;const ft=En.getUniforms(),an=Te.uniforms;if(ye.useProgram(En.program)&&(Dr=!0,Ei=!0,xs=!0),O.id!==k&&(k=O.id,Ei=!0),Dr||S!==M){ft.setValue(I,"projectionMatrix",M.projectionMatrix),ft.setValue(I,"viewMatrix",M.matrixWorldInverse);const Rt=ft.map.cameraPosition;Rt!==void 0&&Rt.setValue(I,re.setFromMatrixPosition(M.matrixWorld)),Ye.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ft.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ei=!0,xs=!0)}if(B.isSkinnedMesh){ft.setOptional(I,B,"bindMatrix"),ft.setOptional(I,B,"bindMatrixInverse");const Rt=B.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ft.setValue(I,"boneTexture",Rt.boneTexture,He))}B.isBatchedMesh&&(ft.setOptional(I,B,"batchingTexture"),ft.setValue(I,"batchingTexture",B._matricesTexture,He));const Ms=H.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0)&&me.update(B,H,En),(Ei||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,ft.setValue(I,"receiveShadow",B.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(an.envMap.value=xe,an.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(an.envMapIntensity.value=L.environmentIntensity),Ei&&(ft.setValue(I,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&ol(an,xs),ce&&O.fog===!0&&J.refreshFogUniforms(an,ce),J.refreshMaterialUniforms(an,O,Q,Z,p.state.transmissionRenderTarget[M.id]),ls.upload(I,Cr(Te),an,He)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ls.upload(I,Cr(Te),an,He),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ft.setValue(I,"center",B.center),ft.setValue(I,"modelViewMatrix",B.modelViewMatrix),ft.setValue(I,"normalMatrix",B.normalMatrix),ft.setValue(I,"modelMatrix",B.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Rt=O.uniformsGroups;for(let Ss=0,cl=Rt.length;Ss<cl;Ss++){const Lr=Rt[Ss];Ue.update(Lr,En),Ue.bind(Lr,En)}}return En}function ol(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function ll(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,L,H){we.get(M.texture).__webglTexture=L,we.get(M.depthTexture).__webglTexture=H;const O=we.get(M);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=H===void 0,O.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const H=we.get(M);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,H=0){A=M,U=L,R=H;let O=!0,B=null,ce=!1,ue=!1;if(M){const xe=we.get(M);xe.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(I.FRAMEBUFFER,null),O=!1):xe.__webglFramebuffer===void 0?He.setupRenderTarget(M):xe.__hasExternalTextures&&He.rebindTextures(M,we.get(M.texture).__webglTexture,we.get(M.depthTexture).__webglTexture);const be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ue=!0);const Pe=we.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[L])?B=Pe[L][H]:B=Pe[L],ce=!0):M.samples>0&&He.useMultisampledRTT(M)===!1?B=we.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?B=Pe[H]:B=Pe,v.copy(M.viewport),N.copy(M.scissor),G=M.scissorTest}else v.copy(ee).multiplyScalar(Q).floor(),N.copy(fe).multiplyScalar(Q).floor(),G=Oe;if(ye.bindFramebuffer(I.FRAMEBUFFER,B)&&O&&ye.drawBuffers(M,B),ye.viewport(v),ye.scissor(N),ye.setScissorTest(G),ce){const xe=we.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe.__webglTexture,H)}else if(ue){const xe=we.get(M.texture),be=L||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,xe.__webglTexture,H||0,be)}k=-1},this.readRenderTargetPixels=function(M,L,H,O,B,ce,ue){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){ye.bindFramebuffer(I.FRAMEBUFFER,pe);try{const xe=M.texture,be=xe.format,Pe=xe.type;if(!Ye.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-O&&H>=0&&H<=M.height-B&&I.readPixels(L,H,O,B,he.convert(be),he.convert(Pe),ce)}finally{const xe=A!==null?we.get(A).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(M,L,H=0){const O=Math.pow(2,-H),B=Math.floor(L.image.width*O),ce=Math.floor(L.image.height*O);He.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,M.x,M.y,B,ce),ye.unbindTexture()},this.copyTextureToTexture=function(M,L,H,O=0){const B=L.image.width,ce=L.image.height,ue=he.convert(H.format),pe=he.convert(H.type);He.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment),L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,M.x,M.y,B,ce,ue,pe,L.image.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,ue,L.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,O,M.x,M.y,ue,pe,L.image),O===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(M,L,H,O,B=0){const ce=M.max.x-M.min.x,ue=M.max.y-M.min.y,pe=M.max.z-M.min.z,xe=he.convert(O.format),be=he.convert(O.type);let Pe;if(O.isData3DTexture)He.setTexture3D(O,0),Pe=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)He.setTexture2DArray(O,0),Pe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Fe=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ut=I.getParameter(I.UNPACK_SKIP_PIXELS),bt=I.getParameter(I.UNPACK_SKIP_ROWS),qt=I.getParameter(I.UNPACK_SKIP_IMAGES),We=H.isCompressedTexture?H.mipmaps[B]:H.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,We.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,We.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?I.texSubImage3D(Pe,B,L.x,L.y,L.z,ce,ue,pe,xe,be,We.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Pe,B,L.x,L.y,L.z,ce,ue,pe,xe,We.data):I.texSubImage3D(Pe,B,L.x,L.y,L.z,ce,ue,pe,xe,be,We),I.pixelStorei(I.UNPACK_ROW_LENGTH,Fe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ut),I.pixelStorei(I.UNPACK_SKIP_ROWS,bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt),B===0&&O.generateMipmaps&&I.generateMipmap(Pe),ye.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?He.setTextureCube(M,0):M.isData3DTexture?He.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?He.setTexture2DArray(M,0):He.setTexture2D(M,0),ye.unbindTexture()},this.resetState=function(){U=0,R=0,A=null,ye.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xr?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===vs?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ar{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new Ar(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class am extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class om extends St{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kt extends $t{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],m=[];let _=0;const x=[],p=n/2;let d=0;b(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(m,2));function b(){const T=new P,U=new P;let R=0;const A=(t-e)/n;for(let k=0;k<=r;k++){const S=[],v=k/r,N=v*(t-e)+e;for(let G=0;G<=i;G++){const C=G/i,$=C*l+a,X=Math.sin($),Z=Math.cos($);U.x=N*X,U.y=-v*n+p,U.z=N*Z,u.push(U.x,U.y,U.z),T.set(X,A,Z).normalize(),f.push(T.x,T.y,T.z),m.push(C,1-v),S.push(_++)}x.push(S)}for(let k=0;k<i;k++)for(let S=0;S<r;S++){const v=x[S][k],N=x[S+1][k],G=x[S+1][k+1],C=x[S][k+1];h.push(v,N,C),h.push(N,G,C),R+=6}c.addGroup(d,R,0),d+=R}function E(T){const U=_,R=new Se,A=new P;let k=0;const S=T===!0?e:t,v=T===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,p*v,0),f.push(0,v,0),m.push(.5,.5),_++;const N=_;for(let G=0;G<=i;G++){const $=G/i*l+a,X=Math.cos($),Z=Math.sin($);A.x=S*Z,A.y=p*v,A.z=S*X,u.push(A.x,A.y,A.z),f.push(0,v,0),R.x=X*.5+.5,R.y=Z*.5*v+.5,m.push(R.x,R.y),_++}for(let G=0;G<i;G++){const C=U+G,$=N+G;T===!0?h.push($,$+1,C):h.push($+1,$,C),k+=3}c.addGroup(d,k,T===!0?1:2),d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rr extends $t{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,f=new P,m=[],_=[],x=[],p=[];for(let d=0;d<=n;d++){const b=[],E=d/n;let T=0;d===0&&o===0?T=.5/t:d===n&&l===Math.PI&&(T=-.5/t);for(let U=0;U<=t;U++){const R=U/t;u.x=-e*Math.cos(i+R*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(i+R*r)*Math.sin(o+E*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(R+T,1-E),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){const E=h[d][b+1],T=h[d][b],U=h[d+1][b],R=h[d+1][b+1];(d!==0||o>0)&&m.push(E,T,R),(d!==n-1||l<Math.PI)&&m.push(T,U,R)}this.setIndex(m),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class en extends $t{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let m=0;m<=n;m++)for(let _=0;_<=i;_++){const x=_/i*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=i;_++){const x=(i+1)*m+_-1,p=(i+1)*(m-1)+_-1,d=(i+1)*(m-1)+_,b=(i+1)*m+_;o.push(x,p,b),o.push(p,d,b)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class li extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tl extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ar=new it,ho=new P,uo=new P;class lm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ho.setFromMatrixPosition(e.matrixWorld),t.position.copy(ho),uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uo),t.updateMatrixWorld(),ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ar),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cm extends lm{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fo extends tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new cm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hm extends tl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=po(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=po();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function po(){return(typeof performance>"u"?Date:performance).now()}const mo=new it;class um{constructor(e,t,n=0,i=1/0){this.ray=new Er(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mo),this}intersectObject(e,t=!0,n=[]){return vr(e,this,n,t),n.sort(go),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)vr(e[i],this,n,t);return n.sort(go),n}}function go(s,e){return s.distance-e.distance}function vr(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)vr(i[r],e,t,!0)}}class _o{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yr);const vo={type:"change"},or={type:"start"},yo={type:"end"},os=new Er,xo=new pn,fm=Math.cos(70*jc.DEG2RAD);class pm extends Hn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(g){g.addEventListener("keydown",Ee),this._domElementKeyEvents=g},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vo),n.update(),r=i.NONE},this.update=function(){const g=new P,D=new Bn().setFromUnitVectors(e.up,new P(0,1,0)),F=D.clone().invert(),Y=new P,ie=new Bn,Re=new P,Ne=2*Math.PI;return function(ct=null){const Ve=n.object.position;g.copy(Ve).sub(n.target),g.applyQuaternion(D),a.setFromVector3(g),n.autoRotate&&r===i.NONE&&G(v(ct)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let st=n.minAzimuthAngle,Je=n.maxAzimuthAngle;isFinite(st)&&isFinite(Je)&&(st<-Math.PI?st+=Ne:st>Math.PI&&(st-=Ne),Je<-Math.PI?Je+=Ne:Je>Math.PI&&(Je-=Ne),st<=Je?a.theta=Math.max(st,Math.min(Je,a.theta)):a.theta=a.theta>(st+Je)/2?Math.max(st,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let sn=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=ee(a.radius);else{const At=a.radius;a.radius=ee(a.radius*c),sn=At!=a.radius}if(g.setFromSpherical(a),g.applyQuaternion(F),Ve.copy(n.target).add(g),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&R){let At=null;if(n.object.isPerspectiveCamera){const rn=g.length();At=ee(rn*c);const Xt=rn-At;n.object.position.addScaledVector(T,Xt),n.object.updateMatrixWorld(),sn=!!Xt}else if(n.object.isOrthographicCamera){const rn=new P(U.x,U.y,0);rn.unproject(n.object);const Xt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),sn=Xt!==n.object.zoom;const Mi=new P(U.x,U.y,0);Mi.unproject(n.object),n.object.position.sub(Mi).add(rn),n.object.updateMatrixWorld(),At=g.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;At!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(At).add(n.object.position):(os.origin.copy(n.object.position),os.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(os.direction))<fm?e.lookAt(n.target):(xo.setFromNormalAndCoplanarPoint(n.object.up,n.target),os.intersectPlane(xo,n.target))))}else if(n.object.isOrthographicCamera){const At=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),At!==n.object.zoom&&(n.object.updateProjectionMatrix(),sn=!0)}return c=1,R=!1,sn||Y.distanceToSquared(n.object.position)>o||8*(1-ie.dot(n.object.quaternion))>o||Re.distanceToSquared(n.target)>o?(n.dispatchEvent(vo),Y.copy(n.object.position),ie.copy(n.object.quaternion),Re.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ze),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",J),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",z),n.domElement.getRootNode().removeEventListener("keydown",le,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ee),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new _o,l=new _o;let c=1;const h=new P,u=new Se,f=new Se,m=new Se,_=new Se,x=new Se,p=new Se,d=new Se,b=new Se,E=new Se,T=new P,U=new Se;let R=!1;const A=[],k={};let S=!1;function v(g){return g!==null?2*Math.PI/60*n.autoRotateSpeed*g:2*Math.PI/60/60*n.autoRotateSpeed}function N(g){const D=Math.abs(g*.01);return Math.pow(.95,n.zoomSpeed*D)}function G(g){l.theta-=g}function C(g){l.phi-=g}const $=function(){const g=new P;return function(F,Y){g.setFromMatrixColumn(Y,0),g.multiplyScalar(-F),h.add(g)}}(),X=function(){const g=new P;return function(F,Y){n.screenSpacePanning===!0?g.setFromMatrixColumn(Y,1):(g.setFromMatrixColumn(Y,0),g.crossVectors(n.object.up,g)),g.multiplyScalar(F),h.add(g)}}(),Z=function(){const g=new P;return function(F,Y){const ie=n.domElement;if(n.object.isPerspectiveCamera){const Re=n.object.position;g.copy(Re).sub(n.target);let Ne=g.length();Ne*=Math.tan(n.object.fov/2*Math.PI/180),$(2*F*Ne/ie.clientHeight,n.object.matrix),X(2*Y*Ne/ie.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(F*(n.object.right-n.object.left)/n.object.zoom/ie.clientWidth,n.object.matrix),X(Y*(n.object.top-n.object.bottom)/n.object.zoom/ie.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Q(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(g,D){if(!n.zoomToCursor)return;R=!0;const F=n.domElement.getBoundingClientRect(),Y=g-F.left,ie=D-F.top,Re=F.width,Ne=F.height;U.x=Y/Re*2-1,U.y=-(ie/Ne)*2+1,T.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(g){return Math.max(n.minDistance,Math.min(n.maxDistance,g))}function fe(g){u.set(g.clientX,g.clientY)}function Oe(g){te(g.clientX,g.clientX),d.set(g.clientX,g.clientY)}function $e(g){_.set(g.clientX,g.clientY)}function W(g){f.set(g.clientX,g.clientY),m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const D=n.domElement;G(2*Math.PI*m.x/D.clientHeight),C(2*Math.PI*m.y/D.clientHeight),u.copy(f),n.update()}function ne(g){b.set(g.clientX,g.clientY),E.subVectors(b,d),E.y>0?Q(N(E.y)):E.y<0&&V(N(E.y)),d.copy(b),n.update()}function de(g){x.set(g.clientX,g.clientY),p.subVectors(x,_).multiplyScalar(n.panSpeed),Z(p.x,p.y),_.copy(x),n.update()}function re(g){te(g.clientX,g.clientY),g.deltaY<0?V(N(g.deltaY)):g.deltaY>0&&Q(N(g.deltaY)),n.update()}function Be(g){let D=!1;switch(g.code){case n.keys.UP:g.ctrlKey||g.metaKey||g.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,n.keyPanSpeed),D=!0;break;case n.keys.BOTTOM:g.ctrlKey||g.metaKey||g.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,-n.keyPanSpeed),D=!0;break;case n.keys.LEFT:g.ctrlKey||g.metaKey||g.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(n.keyPanSpeed,0),D=!0;break;case n.keys.RIGHT:g.ctrlKey||g.metaKey||g.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(-n.keyPanSpeed,0),D=!0;break}D&&(g.preventDefault(),n.update())}function Ie(g){if(A.length===1)u.set(g.pageX,g.pageY);else{const D=je(g),F=.5*(g.pageX+D.x),Y=.5*(g.pageY+D.y);u.set(F,Y)}}function I(g){if(A.length===1)_.set(g.pageX,g.pageY);else{const D=je(g),F=.5*(g.pageX+D.x),Y=.5*(g.pageY+D.y);_.set(F,Y)}}function qe(g){const D=je(g),F=g.pageX-D.x,Y=g.pageY-D.y,ie=Math.sqrt(F*F+Y*Y);d.set(0,ie)}function _e(g){n.enableZoom&&qe(g),n.enablePan&&I(g)}function Ye(g){n.enableZoom&&qe(g),n.enableRotate&&Ie(g)}function ye(g){if(A.length==1)f.set(g.pageX,g.pageY);else{const F=je(g),Y=.5*(g.pageX+F.x),ie=.5*(g.pageY+F.y);f.set(Y,ie)}m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const D=n.domElement;G(2*Math.PI*m.x/D.clientHeight),C(2*Math.PI*m.y/D.clientHeight),u.copy(f)}function ke(g){if(A.length===1)x.set(g.pageX,g.pageY);else{const D=je(g),F=.5*(g.pageX+D.x),Y=.5*(g.pageY+D.y);x.set(F,Y)}p.subVectors(x,_).multiplyScalar(n.panSpeed),Z(p.x,p.y),_.copy(x)}function we(g){const D=je(g),F=g.pageX-D.x,Y=g.pageY-D.y,ie=Math.sqrt(F*F+Y*Y);b.set(0,ie),E.set(0,Math.pow(b.y/d.y,n.zoomSpeed)),Q(E.y),d.copy(b);const Re=(g.pageX+D.x)*.5,Ne=(g.pageY+D.y)*.5;te(Re,Ne)}function He(g){n.enableZoom&&we(g),n.enablePan&&ke(g)}function et(g){n.enableZoom&&we(g),n.enableRotate&&ye(g)}function w(g){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(g.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",z)),!Ae(g)&&(ve(g),g.pointerType==="touch"?se(g):q(g)))}function y(g){n.enabled!==!1&&(g.pointerType==="touch"?me(g):K(g))}function z(g){switch(he(g),A.length){case 0:n.domElement.releasePointerCapture(g.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",z),n.dispatchEvent(yo),r=i.NONE;break;case 1:const D=A[0],F=k[D];se({pointerId:D,pageX:F.x,pageY:F.y});break}}function q(g){let D;switch(g.button){case 0:D=n.mouseButtons.LEFT;break;case 1:D=n.mouseButtons.MIDDLE;break;case 2:D=n.mouseButtons.RIGHT;break;default:D=-1}switch(D){case Gn.DOLLY:if(n.enableZoom===!1)return;Oe(g),r=i.DOLLY;break;case Gn.ROTATE:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enablePan===!1)return;$e(g),r=i.PAN}else{if(n.enableRotate===!1)return;fe(g),r=i.ROTATE}break;case Gn.PAN:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enableRotate===!1)return;fe(g),r=i.ROTATE}else{if(n.enablePan===!1)return;$e(g),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(or)}function K(g){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;W(g);break;case i.DOLLY:if(n.enableZoom===!1)return;ne(g);break;case i.PAN:if(n.enablePan===!1)return;de(g);break}}function J(g){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(g.preventDefault(),n.dispatchEvent(or),re(ge(g)),n.dispatchEvent(yo))}function ge(g){const D=g.deltaMode,F={clientX:g.clientX,clientY:g.clientY,deltaY:g.deltaY};switch(D){case 1:F.deltaY*=16;break;case 2:F.deltaY*=100;break}return g.ctrlKey&&!S&&(F.deltaY*=10),F}function le(g){g.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(g){g.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function Ee(g){n.enabled===!1||n.enablePan===!1||Be(g)}function se(g){switch(Ue(g),A.length){case 1:switch(n.touches.ONE){case Vn.ROTATE:if(n.enableRotate===!1)return;Ie(g),r=i.TOUCH_ROTATE;break;case Vn.PAN:if(n.enablePan===!1)return;I(g),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Vn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(g),r=i.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ye(g),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(or)}function me(g){switch(Ue(g),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(g),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ke(g),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(g),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(g),n.update();break;default:r=i.NONE}}function ze(g){n.enabled!==!1&&g.preventDefault()}function ve(g){A.push(g.pointerId)}function he(g){delete k[g.pointerId];for(let D=0;D<A.length;D++)if(A[D]==g.pointerId){A.splice(D,1);return}}function Ae(g){for(let D=0;D<A.length;D++)if(A[D]==g.pointerId)return!0;return!1}function Ue(g){let D=k[g.pointerId];D===void 0&&(D=new Se,k[g.pointerId]=D),D.set(g.pageX,g.pageY)}function je(g){const D=g.pointerId===A[0]?A[1]:A[0];return k[D]}n.domElement.addEventListener("contextmenu",ze),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",J,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}const Ze=1.05,Mo={heal:"#55c97a",trap:"#d84f4f",warp:"#6d7cff",summon:"#e6b84c",divine:"#f4f0a7",lava:"#ff7a2d",curse:"#a65bd6"};class mm{constructor(e){j(this,"group",new Mt);j(this,"squareMeshes",new Map);j(this,"pieceMeshes",new Map);j(this,"terrainMeshes",new Map);j(this,"highlightGroup",new Mt);j(this,"effectGroup",new Mt);j(this,"processedEffectIds",new Set);j(this,"activeEffects",[]);j(this,"tileGeometry",new kn(Ze*.96,.12,Ze*.96));j(this,"highlightGeometry",new nn(Ze*.88,Ze*.88));j(this,"combatRingGeometry",new en(.36,.025,8,36));j(this,"particleGeometry",new Rr(.055,8,8));j(this,"baseRingGeometry",new kt(.72,.72,.04,36));j(this,"baseBeamGeometry",new kt(.15,.38,1.45,28));j(this,"lightningBoltGeometry",new kt(.025,.055,1.35,6));j(this,"lightningHaloGeometry",new en(.56,.035,8,40));this.game=e,this.group.add(this.highlightGroup),this.group.add(this.effectGroup),this.createBoard()}sync(){this.syncTerrain(),this.syncPieces(),this.syncHighlights(),this.syncVisualEvents()}update(e){for(let t=this.activeEffects.length-1;t>=0;t-=1){const n=this.activeEffects[t];n.age+=e;const i=Math.min(1,n.age/n.duration),r=1-i;n.group.scale.setScalar(1+i*(n.scaleGrowth??1.35)),n.group.traverse(o=>{if(o instanceof Me){const a=o.userData.velocity;a&&(o.position.addScaledVector(a,e),a.y-=e*1.8),this.setOpacity(o,r)}}),n.age>=n.duration&&(n.group.traverse(o=>{o instanceof Me&&this.disposeMaterial(o.material)}),n.group.removeFromParent(),this.activeEffects.splice(t,1))}}dispose(){this.tileGeometry.dispose(),this.highlightGeometry.dispose(),this.combatRingGeometry.dispose(),this.particleGeometry.dispose(),this.baseRingGeometry.dispose(),this.baseBeamGeometry.dispose(),this.lightningBoltGeometry.dispose(),this.lightningHaloGeometry.dispose()}worldToCoord(e){return{x:Math.round(e.x/Ze+this.boardOffset),y:Math.round(e.z/Ze+this.boardOffset)}}coordToWorld(e,t=0){return new P((e.x-this.boardOffset)*Ze,t,(e.y-this.boardOffset)*Ze)}get boardOffset(){return(this.game.board.size-1)/2}pieceVisualPosition(e,t=0){const n=this.coordToWorld(e.position,t);if(e.footprintSize>1){const i=(e.footprintSize-1)*Ze/2;n.x+=i,n.z+=i}return n}createBoard(){const e=new Me(new kn(Ze*(this.game.board.size+.8),.28,Ze*(this.game.board.size+.8)),new li({color:"#7a5032",roughness:.75}));e.position.y=-.18,e.receiveShadow=!0,this.group.add(e);for(let t=0;t<this.game.board.size;t+=1)for(let n=0;n<this.game.board.size;n+=1){const i={x:n,y:t},r=new Me(this.tileGeometry,new li({color:(n+t)%2===0?"#d4a25d":"#c18b49",roughness:.62,metalness:.02}));r.position.copy(this.coordToWorld(i)),r.userData={coord:i,kind:"square"},r.receiveShadow=!0,this.squareMeshes.set(`${n},${t}`,r),this.group.add(r)}}syncTerrain(){const e=new Set;for(const t of this.game.board.terrain.values()){e.add(t.id);let n=this.terrainMeshes.get(t.id);n||(n=new Me(new kt(Ze*.33,Ze*.33,.035,24),new li({color:Mo[t.type],emissive:new Ge(Mo[t.type]).multiplyScalar(.25),transparent:!0,opacity:.78})),n.userData={coord:t.position,kind:"terrain"},this.terrainMeshes.set(t.id,n),this.group.add(n)),n.position.copy(this.coordToWorld(t.position,.095))}for(const[t,n]of this.terrainMeshes)e.has(t)||(n.removeFromParent(),this.terrainMeshes.delete(t))}syncPieces(){const e=new Set;for(const t of this.game.board.pieces.values()){e.add(t.id);let n=this.pieceMeshes.get(t.id);n&&n.userData.mechaTier!==t.mechaTier&&(n.traverse(i=>{i instanceof Me&&(i.geometry.dispose(),this.disposeMaterial(i.material))}),n.removeFromParent(),this.pieceMeshes.delete(t.id),n=void 0),n||(n=this.createPieceMesh(t),this.pieceMeshes.set(t.id,n),this.group.add(n)),n.position.copy(this.pieceVisualPosition(t,.24)),n.rotation.y=t.owner==="player"?0:Math.PI,n.userData={pieceId:t.id,coord:t.position,kind:"piece",mechaTier:t.mechaTier},n.traverse(i=>{i.userData={...i.userData,pieceId:t.id,coord:t.position,kind:"piece"}})}for(const[t,n]of this.pieceMeshes)e.has(t)||(n.traverse(i=>{if(i instanceof Me){i.geometry.dispose();const r=i.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r.dispose()}}),n.removeFromParent(),this.pieceMeshes.delete(t))}createPieceMesh(e){const t=new Mt,n=e.definition,i=e.type==="hyperMecha"&&e.mechaTier>=2,r=i?e.owner==="player"?"#78e5ff":"#a73bff":e.owner==="player"?"#f6dfb7":"#6d2932",o=i?e.owner==="player"?"#ff6f91":"#ffe36b":e.owner==="player"?"#2a5d87":"#f2c45d",a=i?.88:n.large?.43:.35,l=i?.78:n.large?.54:.38,c=new Me(new kt(a*.86,a,l,5),new li({color:r,roughness:i?.28:.48,metalness:i?.55:e.isSpecial?.14:.03}));c.castShadow=!0,c.receiveShadow=!0,c.userData={pieceId:e.id,kind:"piece"},t.add(c);const h=new Me(new kt(a*.65,a*.7,.035,5),new li({color:o,roughness:.35}));h.position.y=l*.53,h.userData={pieceId:e.id,kind:"piece"},t.add(h);const u=this.createLabel(i?"Ⅱ":n.shortName,e.owner);if(u.position.y=l*.62,u.rotation.x=-Math.PI/2,u.userData={pieceId:e.id,kind:"piece"},t.add(u),i){const f=new Me(new en(.84,.035,8,40),new Xe({color:o,transparent:!0,opacity:.72,depthWrite:!1}));f.rotation.x=Math.PI/2,f.position.y=.04,f.userData={pieceId:e.id,kind:"piece"},t.add(f)}return t}createLabel(e,t){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");if(!i)throw new Error("Canvas context unavailable.");i.clearRect(0,0,n.width,n.height),i.fillStyle=t==="player"?"#111820":"#fff5dc",i.font="bold 92px serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e,128,132);const r=new om(n);r.colorSpace=Ft;const o=new Xe({map:r,transparent:!0});return new Me(new nn(.58,.58),o)}syncHighlights(){if(this.highlightGroup.clear(),this.game.lastMove&&(this.addHighlight(this.game.lastMove.from,this.game.lastMove.owner==="ai"?"#ffb84a":"#7cff9b",.34),this.addHighlight(this.game.lastMove.to,this.game.lastMove.owner==="ai"?"#ff7a2d":"#55c97a",.48)),this.game.phase==="fusion"){const n=new Set(this.game.fusionSelectionIds);for(const i of this.game.getFusionCandidates(this.game.currentPlayer))this.addHighlight(i.position,n.has(i.id)?"#fff46a":"#5cff9d",n.has(i.id)?.74:.34);return}const e=this.game.board.getPiece(this.game.selectedPieceId);if(!e)return;this.addFootprintHighlight(e,e.position,"#ffffff",.28);const t=this.game.getMoveOptions(e.id);for(const n of t){const i=n.kind==="special"?"#bb75ff":n.kind==="capture"?"#ff5555":"#6fe0ff";n.kind==="special"&&n.areaSize?this.addAreaHighlight(n.to,n.areaSize,i,.42):n.kind==="special"?this.addHighlight(n.to,i,.54):this.addFootprintHighlight(e,n.to,i,.54)}}addAreaHighlight(e,t,n,i){for(let r=e.y;r<e.y+t;r+=1)for(let o=e.x;o<e.x+t;o+=1){const a={x:o,y:r};this.game.board.isInside(a)&&this.addHighlight(a,n,i)}}addFootprintHighlight(e,t,n,i){for(const r of this.game.board.getFootprintCoords(e,t))this.game.board.isInside(r)&&this.addHighlight(r,n,i)}addHighlight(e,t,n){const i=new Xe({color:t,transparent:!0,opacity:n,side:Dt,depthWrite:!1}),r=new Me(this.highlightGeometry,i);r.position.copy(this.coordToWorld(e,.18)),r.rotation.x=-Math.PI/2,r.userData={coord:e,kind:"highlight"},this.highlightGroup.add(r)}syncVisualEvents(){for(const e of this.game.visualEvents)this.processedEffectIds.has(e.id)||(this.processedEffectIds.add(e.id),this.spawnVisualEffect(e));this.processedEffectIds.size>120&&[...this.processedEffectIds].slice(0,60).forEach(t=>this.processedEffectIds.delete(t))}spawnVisualEffect(e){e.kind==="combat"&&e.coord&&this.spawnCombatEffect(e.coord,e.owner==="ai"?"#ff805e":"#6fe0ff"),e.kind==="baseDamage"&&e.owner&&this.spawnBaseDamageEffect(e.owner,e.amount??0),e.kind==="godSummon"&&e.coord&&this.spawnGodSummonEffect(e.coord),e.kind==="fusion"&&e.coord&&this.spawnFusionEffect(e.coord),e.kind==="mechaTransform"&&e.coord&&this.spawnMechaTransformEffect(e.coord),e.kind==="satelliteStrike"&&e.coord&&this.spawnSatelliteStrikeEffect(e.coord,e.amount??4)}spawnCombatEffect(e,t){const n=new Mt;n.position.copy(this.coordToWorld(e,.42));const i=new Me(this.combatRingGeometry,new Xe({color:t,transparent:!0,opacity:.95,depthWrite:!1}));i.rotation.x=Math.PI/2,n.add(i);for(let r=0;r<10;r+=1){const o=Math.PI*2*r/10,a=new Me(this.particleGeometry,new Xe({color:t,transparent:!0,opacity:.9,depthWrite:!1}));a.position.set(Math.cos(o)*.1,.05,Math.sin(o)*.1),a.userData.velocity=new P(Math.cos(o)*1.2,1+Math.random()*.55,Math.sin(o)*1.2),n.add(a)}this.effectGroup.add(n),this.activeEffects.push({group:n,age:0,duration:.82})}spawnBaseDamageEffect(e,t){const n=new Mt,i=e==="player"?(this.game.board.size-.25-this.boardOffset)*Ze:(-.75-this.boardOffset)*Ze;n.position.set(0,.32,i);const r=e==="player"?"#ff4f57":"#ffb84a",o=new Me(this.baseRingGeometry,new Xe({color:r,transparent:!0,opacity:.82,depthWrite:!1}));n.add(o);const a=new Me(this.baseBeamGeometry,new Xe({color:r,transparent:!0,opacity:t>=15?.65:.42,depthWrite:!1}));a.position.y=.78,n.add(a),this.effectGroup.add(n),this.activeEffects.push({group:n,age:0,duration:1.05})}spawnGodSummonEffect(e){const t=new Mt;t.position.copy(this.coordToWorld(e,.35));const n=new Me(this.lightningHaloGeometry,new Xe({color:"#fff3a0",transparent:!0,opacity:.95,depthWrite:!1}));n.rotation.x=Math.PI/2,t.add(n);const i=new Me(this.baseBeamGeometry,new Xe({color:"#f7fbff",transparent:!0,opacity:.78,depthWrite:!1}));i.position.y=1,i.scale.set(.38,1.55,.38),t.add(i);for(let r=0;r<7;r+=1){const o=Math.PI*2*r/7,a=new Me(this.lightningBoltGeometry,new Xe({color:r%2===0?"#ffe45c":"#8ee7ff",transparent:!0,opacity:.9,depthWrite:!1}));a.position.set(Math.cos(o)*(.2+Math.random()*.34),.85+Math.random()*.55,Math.sin(o)*(.2+Math.random()*.34)),a.rotation.x=Math.random()*.9-.45,a.rotation.z=Math.random()*1.4-.7,a.userData.velocity=new P(Math.cos(o)*.08,-.35-Math.random()*.2,Math.sin(o)*.08),t.add(a)}for(let r=0;r<14;r+=1){const o=Math.PI*2*r/14,a=new Me(this.particleGeometry,new Xe({color:"#fff7b8",transparent:!0,opacity:.95,depthWrite:!1}));a.position.set(0,.25,0),a.userData.velocity=new P(Math.cos(o)*1.1,1.15+Math.random()*.5,Math.sin(o)*1.1),t.add(a)}this.effectGroup.add(t),this.activeEffects.push({group:t,age:0,duration:1.28})}spawnFusionEffect(e){const t=new Mt;t.position.copy(this.coordToWorld(e,.36));const n=new Me(this.lightningHaloGeometry,new Xe({color:"#78ffcf",transparent:!0,opacity:.88,depthWrite:!1}));n.rotation.x=Math.PI/2,n.scale.setScalar(1.25),t.add(n);const i=new Me(this.baseBeamGeometry,new Xe({color:"#8ee7ff",transparent:!0,opacity:.48,depthWrite:!1}));i.position.y=.88,i.scale.set(.44,1.1,.44),t.add(i);for(let r=0;r<12;r+=1){const o=Math.PI*2*r/12,a=new Me(this.particleGeometry,new Xe({color:r%2===0?"#78ffcf":"#f2c45d",transparent:!0,opacity:.92,depthWrite:!1}));a.userData.velocity=new P(Math.cos(o)*.9,.75+Math.random()*.45,Math.sin(o)*.9),t.add(a)}this.effectGroup.add(t),this.activeEffects.push({group:t,age:0,duration:1.1})}spawnMechaTransformEffect(e){const t=new Mt,n=Ze*(this.game.board.size+6);t.position.set(0,.31,0);const i=new Me(new nn(n,n),new Xe({color:"#78e5ff",transparent:!0,opacity:.34,side:Dt,depthWrite:!1}));i.rotation.x=-Math.PI/2,t.add(i);const r=new Me(new en(Ze*2.8,.08,8,72),new Xe({color:"#ff6f91",transparent:!0,opacity:.96,depthWrite:!1}));r.rotation.x=Math.PI/2,t.add(r);const o=new Me(new en(Ze*4.7,.045,8,96),new Xe({color:"#ffe36b",transparent:!0,opacity:.72,depthWrite:!1}));o.rotation.x=Math.PI/2,t.add(o);for(let u=0;u<36;u+=1){const f=Math.PI*2*u/36,m=new Me(this.particleGeometry,new Xe({color:u%3===0?"#ffe36b":"#78e5ff",transparent:!0,opacity:.9,depthWrite:!1})),_=.8+Math.random()*Ze*1.2;m.position.set(Math.cos(f)*_,.08+Math.random()*.22,Math.sin(f)*_),m.userData.velocity=new P(Math.cos(f)*4,.45+Math.random()*.35,Math.sin(f)*4),t.add(m)}this.effectGroup.add(t),this.activeEffects.push({group:t,age:0,duration:.92,scaleGrowth:1.8});const a=new Mt,l=this.coordToWorld(e,.4);l.x+=Ze*.5,l.z+=Ze*.5,a.position.copy(l);const c=new Me(new en(.96,.045,8,48),new Xe({color:"#78e5ff",transparent:!0,opacity:.92,depthWrite:!1}));c.rotation.x=Math.PI/2,a.add(c);const h=new Me(this.baseBeamGeometry,new Xe({color:"#ff6f91",transparent:!0,opacity:.46,depthWrite:!1}));h.position.y=.92,h.scale.set(.62,1.35,.62),a.add(h);for(let u=0;u<18;u+=1){const f=Math.PI*2*u/18,m=new Me(this.particleGeometry,new Xe({color:u%2===0?"#78e5ff":"#ff6f91",transparent:!0,opacity:.95,depthWrite:!1}));m.userData.velocity=new P(Math.cos(f)*1.25,1+Math.random()*.5,Math.sin(f)*1.25),a.add(m)}this.effectGroup.add(a),this.activeEffects.push({group:a,age:0,duration:1.25})}spawnSatelliteStrikeEffect(e,t){const n=new Mt,i=this.coordToWorld(e,.34),r=(t-1)*Ze/2;i.x+=r,i.z+=r,n.position.copy(i);const o=new Me(new en(t*Ze/2,.045,8,56),new Xe({color:"#f8f0df",transparent:!0,opacity:.9,depthWrite:!1}));o.rotation.x=Math.PI/2,n.add(o);const a=new Me(new nn(t*Ze,t*Ze),new Xe({color:"#ff8a36",transparent:!0,opacity:.18,side:Dt,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=-.08,n.add(a);const l=(t-1)/2;for(let c=0;c<t;c+=1)for(let h=0;h<t;h+=1){const u=(h-l)*Ze,f=(c-l)*Ze,m=(h+c)*.08,_=new Me(new kt(.18,.34,3.35,18),new Xe({color:h%2===c%2?"#ff7a2d":"#ffd36b",transparent:!0,opacity:.82,depthWrite:!1}));_.position.set(u,3.2+m,f),_.userData.velocity=new P(0,-3.4-Math.random()*.55,0),n.add(_);const x=new Me(new kt(.08,.16,3.6,14),new Xe({color:"#fff4b8",transparent:!0,opacity:.88,depthWrite:!1}));x.position.set(u,3.36+m,f),x.userData.velocity=new P(0,-3.7-Math.random()*.45,0),n.add(x);const p=new Me(this.baseRingGeometry,new Xe({color:"#ff4f57",transparent:!0,opacity:.72,depthWrite:!1}));p.position.set(u,-.04,f),p.scale.set(.48,.65,.48),n.add(p)}for(let c=0;c<24;c+=1){const h=Math.PI*2*c/24,u=new Me(this.particleGeometry,new Xe({color:c%2===0?"#f8f0df":"#bb75ff",transparent:!0,opacity:.95,depthWrite:!1}));u.userData.velocity=new P(Math.cos(h)*1.45,1.2+Math.random()*.6,Math.sin(h)*1.45),n.add(u)}this.effectGroup.add(n),this.activeEffects.push({group:n,age:0,duration:1.32,scaleGrowth:.24})}setOpacity(e,t){var i;const n=e.material;Array.isArray(n)?n.forEach(r=>{var o;"opacity"in r&&((o=r.userData).effectBaseOpacity??(o.effectBaseOpacity=r.opacity),r.opacity=r.userData.effectBaseOpacity*t)}):"opacity"in n&&((i=n.userData).effectBaseOpacity??(i.effectBaseOpacity=n.opacity),n.opacity=n.userData.effectBaseOpacity*t)}disposeMaterial(e){Array.isArray(e)?e.forEach(t=>t.dispose()):e.dispose()}getPickables(){return[...this.squareMeshes.values(),...this.terrainMeshes.values(),...this.highlightGroup.children,...[...this.pieceMeshes.values()].flatMap(e=>e.children)]}}class gm{constructor(e,t){j(this,"scene",new am);j(this,"camera",new Pt(48,1,.1,120));j(this,"renderer",new rm({antialias:!0}));j(this,"raycaster",new um);j(this,"pointer",new Se);j(this,"clock",new dm);j(this,"controls");j(this,"boardRenderer");this.root=e,this.game=t,this.scene.background=new Ge("#15191d"),this.scene.fog=new Ar("#15191d",12,28),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wo,this.root.appendChild(this.renderer.domElement),this.camera.position.set(5.8,10.4,10.8),this.camera.lookAt(0,0,0),this.controls=new pm(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.maxPolarAngle=Math.PI*.47,this.controls.minDistance=8,this.controls.maxDistance=19,this.boardRenderer=new mm(t),this.scene.add(this.boardRenderer.group),this.addLights(),this.addEnvironment(),this.resize(),window.addEventListener("resize",()=>this.resize()),this.renderer.domElement.addEventListener("pointerdown",n=>this.onPointerDown(n)),this.renderer.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.game.log("WebGL context lost. ブラウザの再読み込みで復帰できます。","danger")})}start(){this.renderer.setAnimationLoop(()=>{const e=Math.min(this.clock.getDelta(),.05);this.controls.update(),this.boardRenderer.update(e),this.renderer.render(this.scene,this.camera)})}sync(){this.boardRenderer.sync()}addLights(){this.scene.add(new hm("#fff2d0",1.15));const e=new fo("#fff6df",2.4);e.position.set(4,9,4),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-7,e.shadow.camera.right=7,e.shadow.camera.top=7,e.shadow.camera.bottom=-7,this.scene.add(e);const t=new fo("#7fc8ff",.9);t.position.set(-5,4,-6),this.scene.add(t)}addEnvironment(){const e=new Me(new nn(40,40),new li({color:"#263238",roughness:.9}));e.rotation.x=-Math.PI/2,e.position.y=-.34,e.receiveShadow=!0,this.scene.add(e)}resize(){const e=this.root.clientWidth||window.innerWidth,t=this.root.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}onPointerDown(e){var a;const t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height*2-1),this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObjects(this.boardRenderer.getPickables(),!1),i=(a=n[0])==null?void 0:a.object;if(!i)return;const r=i.userData,o=r.coord??this.boardRenderer.worldToCoord(n[0].point);this.game.handleBoardClick(o,r.pieceId)}}const So=s=>s.toLowerCase(),lr=s=>`./assets/${s}`,Ri=[{speaker:"SYSTEM",text:"サーティビルディング31階。勝負は終わり、魔王ボランティアは武器を下ろした。",tone:"system"},{speaker:"魔王ボランティア",text:"ま、待ってください！ もう戦いません。お願いがあります。どうか、聞いてください。",tone:"demon"},{speaker:"あなた",text:"さっきまであれだけ全力で戦っていたのに、急にどうした？",tone:"player"},{speaker:"魔王ボランティア",text:"私の魔王城が、知らない連中に乗っ取られたんです。玉座も、台所も、地下倉庫のカレー鍋まで……。",tone:"demon"},{speaker:"魔王ボランティア",text:"サーティビルディングを守っていたのは、助けてくれる相手を探すためでした。強い人じゃないと、城まで辿り着けないから。",tone:"demon"},{speaker:"あなた",text:"つまり、ここで負けたから助けてほしい、ということか。",tone:"player"},{speaker:"魔王ボランティア",text:"はい……。負けた相手に頼むなんて、魔王としては情けないです。でも、あなたしか頼れません。",tone:"demon"},{speaker:"魔王ボランティア",text:"お願いします。乗っ取られ魔王城を、私と一緒に取り返してください。",tone:"demon"},{speaker:"あなた",text:"事情はわかった。今すぐ城には行けないが、準備ができたら向かおう。",tone:"player"},{speaker:"魔王ボランティア",text:"ありがとうございます……！ それまで、私も仲間として戦います。どうか、私の城を取り戻してください。",tone:"demon"},{speaker:"SYSTEM",text:"魔王ボランティアが使用可能になりました。タイトル画面に「乗っ取られ魔王城」が出現しました。",tone:"system"}];class _m{constructor(e,t,n={}){j(this,"debugEnabled");j(this,"debugOpen");j(this,"debugLines",[]);j(this,"titleMode","splash");j(this,"startMode","standard");j(this,"conquestDialogueIndex",0);j(this,"shownSkillBannerIds",new Set);j(this,"shownEnemySkillBannerIds",new Set);j(this,"activeSkillBanner",null);j(this,"activeEnemySkillBanner",null);j(this,"activeSkillBannerExpiresAt",0);j(this,"activeEnemySkillBannerExpiresAt",0);j(this,"skillBannerClearTimer",null);j(this,"enemySkillBannerClearTimer",null);this.root=e,this.game=t,this.debugEnabled=n.debugEnabled??!1,this.debugOpen=this.debugEnabled,window.addEventListener("keydown",i=>{const r=i.target,o=(r==null?void 0:r.tagName)==="INPUT"||(r==null?void 0:r.tagName)==="TEXTAREA";i.ctrlKey&&i.shiftKey&&i.key.toLowerCase()==="d"?(i.preventDefault(),this.debugEnabled=!this.debugEnabled,this.debugOpen=this.debugEnabled,this.pushDebugLine(this.debugEnabled?"debug mode enabled":"debug mode disabled"),this.render()):this.debugEnabled&&i.key==="`"&&!o&&(i.preventDefault(),this.debugOpen=!this.debugOpen,this.render())})}render(){if(this.game.phase==="title"){this.root.innerHTML=`
        ${this.renderTitleScreen()}
        ${this.debugEnabled?this.renderDebugConsole():""}
      `,this.bind();return}const e=this.game.board.getPiece(this.game.selectedPieceId),t=this.game.getPassiveLabels("player"),n=this.game.getPassiveLabels("ai"),i=this.game.getSelectedHero();this.root.innerHTML=`
      <section class="hud hud-top">
        <div class="brand">
          <span class="brand-title">銀河将棋X</span>
          ${i?`<span class="hero-chip">${i.name}</span>`:""}
          <span class="turn-pill">${this.game.phase==="gameover"?"決着":this.game.phase==="initiative"?"先攻後攻決定":this.game.phase==="fusion"?"融合選択":this.game.phase==="mechaUpgrade"?"メカ強化":this.game.phase==="processExecution"?"PROCESS":this.game.currentPlayer==="player"?"あなたの番":"AI思考中"}</span>
        </div>
        <div class="hp-row">
          ${this.renderHp("あなた",this.game.bases.player.hp,this.game.bases.player.maxHp)}
          ${this.renderHp("AI",this.game.bases.ai.hp,this.game.bases.ai.maxHp)}
        </div>
      </section>

      <aside class="side-panel">
        <div class="panel-section">
          <h2>選択中</h2>
          ${e?this.renderPieceDetails(e.id):'<p class="muted">未選択</p>'}
        </div>
        <div class="panel-section">
          <h2>永続能力</h2>
          <div class="tag-list">
            ${t.length?t.map(r=>`<span>${r}</span>`).join(""):"<span>なし</span>"}
          </div>
          <h3>AI</h3>
          <div class="tag-list compact">
            ${n.length?n.map(r=>`<span>${r}</span>`).join(""):"<span>なし</span>"}
          </div>
        </div>
        ${this.renderCommandPanel()}
        ${this.game.towerRun.active?this.renderTowerPanel():""}
        <div class="panel-section log-panel">
          <h2>行動ログ</h2>
          ${this.game.logs.map(r=>this.renderLog(r)).join("")}
        </div>
      </aside>

      ${this.renderSkillBanner()}
      ${this.renderEnemySkillBanner()}
      ${this.game.phase==="initiative"?this.renderInitiativeOverlay():""}
      ${this.game.phase==="ability"?this.renderAbilityOverlay(this.game.abilityOffers):""}
      ${this.game.phase==="fusion"?this.renderFusionOverlay():""}
      ${this.game.phase==="mechaUpgrade"?this.renderMechaUpgradeOverlay():""}
      ${this.game.phase==="processExecution"?this.renderProcessExecutionOverlay():""}
      ${this.game.phase==="gameover"?this.renderGameOver():""}
      ${this.debugEnabled?this.renderDebugConsole():""}
    `,this.bind()}renderTitleScreen(){if(this.titleMode==="characterSelect")return this.renderCharacterSelectScreen();const e=this.escapeHtml(this.game.getMetaSaveStatus()),t=this.game.isDemonCastleUnlocked();return`
      <section class="title-screen title-splash">
        <div class="title-orbit" aria-hidden="true"></div>
        <div class="title-center">
          <span class="title-kicker">Roguelike 3D Shogi</span>
          <h1 class="game-logo" aria-label="銀河将棋X">
            <span>銀河将棋</span>
            <span class="logo-x" aria-hidden="true">
              <img class="logo-x-stroke logo-x-stroke-a" src="${lr("logo-x-stroke-a.png")}" alt="" />
              <img class="logo-x-stroke logo-x-stroke-b" src="${lr("logo-x-stroke-b.png")}" alt="" />
              <i></i>
            </span>
          </h1>
          <p>星間戦場に布陣し、王将と本拠地を守り抜く。</p>
          <button class="title-start-button" data-command="open-character-select">
            <span>ゲームをスタート</span>
            <small>メインキャラクター選択へ</small>
          </button>
          <button class="title-start-button tower-start-button" data-command="open-tower-character-select">
            <span>サーティビルディング</span>
            <small>31Fまで共有HPで登る塔モード</small>
          </button>
          ${t?`<button class="title-start-button castle-start-button" data-command="open-demon-castle-character-select">
                  <span>乗っ取られ魔王城</span>
                  <small>40F / レベルアップと魔人攻撃で奪還</small>
                </button>`:""}
          <div class="title-save-panel">
            <span>セーブデータ</span>
            <p>${e}</p>
            <div>
              <button type="button" data-command="save-meta">セーブ</button>
              <button type="button" data-command="load-meta">ロード</button>
            </div>
          </div>
        </div>
      </section>
    `}renderCharacterSelectScreen(){const e=this.game.getHeroDefinitions(),t=this.startMode==="thirtyBuilding"?{label:"サーティビルディング出撃キャラ選択",title:"THIRTY BUILDING"}:this.startMode==="demonCastle"?{label:"乗っ取られ魔王城 出撃キャラ選択",title:"DEMON CASTLE"}:{label:"メインキャラクター選択",title:"銀河将棋X"};return`
      <section class="title-screen title-character-screen">
        <div class="title-orbit" aria-hidden="true"></div>
        <div class="character-select">
          <div class="character-heading">
            <span>${t.label}</span>
            <strong>${t.title}</strong>
          </div>
          <div class="character-grid">
            ${e.map(n=>this.renderHeroCard(n)).join("")}
          </div>
          <button class="title-back-button" data-command="back-title">タイトルへ戻る</button>
        </div>
      </section>
    `}renderHeroCard(e){return`
      <button class="hero-card ${e.id}" style="--hero-accent:${e.accentColor}" data-start-hero="${e.id}">
        <span class="hero-card-title">${e.title}</span>
        <strong>${e.name}</strong>
        <em>${e.archetype}</em>
        <dl>
          <div>
            <dt>${e.skillName}</dt>
            <dd>${e.skillDescription}</dd>
          </div>
          <div>
            <dt>${e.passiveName}</dt>
            <dd>${e.passiveDescription}</dd>
          </div>
        </dl>
      </button>
    `}renderSkillBanner(){var r;const e=this.game.skillBanner,t=window.performance.now();if(e&&e.id!==((r=this.activeSkillBanner)==null?void 0:r.id)&&!this.shownSkillBannerIds.has(e.id)&&(this.shownSkillBannerIds.add(e.id),this.activeSkillBanner=e,this.activeSkillBannerExpiresAt=t+2100,this.skillBannerClearTimer&&window.clearTimeout(this.skillBannerClearTimer),this.skillBannerClearTimer=window.setTimeout(()=>{var o;((o=this.activeSkillBanner)==null?void 0:o.id)===e.id&&(this.activeSkillBanner=null,this.render())},2100)),!this.activeSkillBanner||t>=this.activeSkillBannerExpiresAt)return this.activeSkillBanner=null,"";const n=this.activeSkillBanner,i=n.heroId==="uesugiKenshin"?'<div class="uesugi-war-flag" aria-hidden="true"><span>毘</span></div>':"";return`
      <div class="skill-banner ${n.heroId}" data-skill-banner="${n.id}">
        ${i}
        <span>SKILL EXECUTE</span>
        <strong>${n.skillName}</strong>
        <em>${n.subtitle}</em>
      </div>
    `}renderEnemySkillBanner(){var i;const e=this.game.enemySkillBanner,t=window.performance.now();if(e&&e.id!==((i=this.activeEnemySkillBanner)==null?void 0:i.id)&&!this.shownEnemySkillBannerIds.has(e.id)&&(this.shownEnemySkillBannerIds.add(e.id),this.activeEnemySkillBanner=e,this.activeEnemySkillBannerExpiresAt=t+2100,this.enemySkillBannerClearTimer&&window.clearTimeout(this.enemySkillBannerClearTimer),this.enemySkillBannerClearTimer=window.setTimeout(()=>{var r;((r=this.activeEnemySkillBanner)==null?void 0:r.id)===e.id&&(this.activeEnemySkillBanner=null,this.render())},2100)),!this.activeEnemySkillBanner||t>=this.activeEnemySkillBannerExpiresAt)return this.activeEnemySkillBanner=null,"";const n=this.activeEnemySkillBanner;return`
      <div class="skill-banner enemy-skill-banner" data-enemy-skill-banner="${n.id}">
        <span>ENEMY SKILL</span>
        <strong>${n.skillName}</strong>
        <em>${n.subtitle}</em>
      </div>
    `}renderInitiativeOverlay(){const e=this.game.initiative,t=this.game.getSelectedHero();if(!e||!t)return"";const n=e.firstPlayer==="player";return`
      <div class="overlay initiative-overlay">
        <div class="initiative-shell">
          <div class="initiative-heading">
            <span>先攻後攻処理</span>
            <strong>${t.name} 出陣準備</strong>
          </div>
          <div class="initiative-versus">
            <div class="initiative-side ${n?"first":"second"}">
              <span>あなた</span>
              <strong>${e.playerRoll}</strong>
              <em>${n?"先攻":"後攻"}</em>
            </div>
            <div class="initiative-divider">VS</div>
            <div class="initiative-side ${n?"second":"first"}">
              <span>AI</span>
              <strong>${e.aiRoll}</strong>
              <em>${n?"後攻":"先攻"}</em>
            </div>
          </div>
          <p>${n?"あなたが先に能力カードを選びます。":"AIが先に動きます。あなたは後攻として受けてから反撃します。"}</p>
          <button class="command-button initiative-start" data-command="confirm-initiative">
            <span>この順番で開始</span>
            <small>第1ターンへ進む</small>
          </button>
        </div>
      </div>
    `}bind(){var e;this.root.querySelectorAll("[data-command='open-character-select']").forEach(t=>{t.addEventListener("click",()=>{this.startMode="standard",this.titleMode="characterSelect",this.render()})}),this.root.querySelectorAll("[data-command='open-tower-character-select']").forEach(t=>{t.addEventListener("click",()=>{this.startMode="thirtyBuilding",this.titleMode="characterSelect",this.render()})}),this.root.querySelectorAll("[data-command='open-demon-castle-character-select']").forEach(t=>{t.addEventListener("click",()=>{this.startMode="demonCastle",this.titleMode="characterSelect",this.render()})}),this.root.querySelectorAll("[data-command='back-title']").forEach(t=>{t.addEventListener("click",()=>{this.titleMode="splash",this.startMode="standard",this.render()})}),this.root.querySelectorAll("[data-command='save-meta']").forEach(t=>{t.addEventListener("click",()=>this.game.saveMetaProgress())}),this.root.querySelectorAll("[data-command='load-meta']").forEach(t=>{t.addEventListener("click",()=>this.game.loadMetaProgress())}),this.root.querySelectorAll("[data-command='conquest-next']").forEach(t=>{t.addEventListener("click",()=>{this.conquestDialogueIndex=Math.min(Ri.length-1,this.conquestDialogueIndex+1),this.render()})}),this.root.querySelectorAll("[data-command='return-title']").forEach(t=>{t.addEventListener("click",()=>{this.conquestDialogueIndex=0,this.titleMode="splash",this.startMode="standard",this.game.start()})}),this.root.querySelectorAll("[data-start-hero]").forEach(t=>{const n=t.dataset.startHero;t.addEventListener("click",()=>{(n==="uesugiKenshin"||n==="mechaArmorChan"||n==="hoshiyomiKaguya"||n==="demonVolunteer")&&(this.titleMode="splash",this.startMode==="thirtyBuilding"?this.game.startTowerRunWithHero(n):this.startMode==="demonCastle"?this.game.startDemonCastleRunWithHero(n):this.game.startGameWithHero(n))})}),this.root.querySelectorAll("[data-command='confirm-initiative']").forEach(t=>{t.addEventListener("click",()=>this.game.confirmInitiative())}),this.root.querySelectorAll("[data-command='hero-skill']").forEach(t=>{t.addEventListener("click",()=>this.game.useHeroSkill())}),this.root.querySelectorAll("[data-ability-id]").forEach(t=>{t.addEventListener("click",()=>this.game.chooseAbility(t.dataset.abilityId??""))}),this.root.querySelectorAll("[data-command='bad-mouth']").forEach(t=>{t.addEventListener("click",()=>this.game.useBadMouthCommand("player"))}),this.root.querySelectorAll("[data-command='start-fusion-ticket']").forEach(t=>{t.addEventListener("click",()=>this.game.startFusionFromTicket("player"))}),this.root.querySelectorAll("[data-command='cancel-fusion']").forEach(t=>{t.addEventListener("click",()=>this.game.cancelFusionSelection())}),this.root.querySelectorAll("[data-command='claim-mecha-upgrade']").forEach(t=>{t.addEventListener("click",()=>this.game.claimMechaUpgrade())}),this.root.querySelectorAll("[data-process-adjust]").forEach(t=>{const n=t.dataset.processOwner,i=Number(t.dataset.processAdjust??0);(n==="player"||n==="ai")&&t.addEventListener("click",()=>this.game.adjustProcessExecutionHp(n,i))}),this.root.querySelectorAll("[data-process-range]").forEach(t=>{const n=t.dataset.processOwner;(n==="player"||n==="ai")&&t.addEventListener("input",()=>this.game.setProcessExecutionHp(n,Number(t.value)))}),this.root.querySelectorAll("[data-command='finish-process']").forEach(t=>{t.addEventListener("click",()=>this.game.finishProcessExecution())}),this.root.querySelectorAll("[data-debug-toggle]").forEach(t=>{t.addEventListener("click",()=>{this.debugOpen=!this.debugOpen,this.render()})}),this.root.querySelectorAll("[data-debug-command]").forEach(t=>{t.addEventListener("click",()=>this.executeDebugCommand(t.dataset.debugCommand??""))}),(e=this.root.querySelector("[data-debug-form]"))==null||e.addEventListener("submit",t=>{t.preventDefault();const n=this.root.querySelector("[data-debug-input]"),i=(n==null?void 0:n.value)??"";n&&(n.value=""),this.executeDebugCommand(i)})}renderHp(e,t,n){const i=Math.max(0,Math.min(100,t/n*100));return`
      <div class="hp">
        <div class="hp-label"><span>${e}</span><strong>${t}/${n}</strong></div>
        <div class="hp-bar"><i style="width:${i}%"></i></div>
      </div>
    `}renderPieceDetails(e){const t=this.game.board.getPiece(e);if(!t)return'<p class="muted">未選択</p>';const n=this.game.getMoveOptions(t.id),i=t.type==="hyperMecha"?this.game.getMechaUpgradeLabels(t):[];return`
      <div class="piece-detail ${t.owner}">
        <strong>${this.game.getPieceDisplayName(t)}</strong>
        <span>${t.owner==="player"?"自軍":"敵軍"} / HP ${t.hp}/${t.maxHp}</span>
        <p>${t.definition.movement}</p>
        <p>${t.definition.specialAbility}</p>
        ${t.type==="hyperMecha"?`<p>型 ${t.mechaTier} / 累計撃破 ${t.mechaKillCount}/5 / 次の強化まで ${t.mechUpgradeCooldown}T / ${i.length?i.join("、"):"強化なし"}</p>`:""}
        <div class="stat-grid">
          <span>候補</span><b>${n.length}</b>
          <span>評価</span><b>${t.definition.score}</b>
          <span>CD</span><b>${t.specialCooldown}</b>
          <span>状態</span><b>${t.stunnedTurns>0?"停止":t.weakenedTurns>0?"弱体":"通常"}</b>
        </div>
      </div>
    `}renderAbilityOverlay(e){return`
      <div class="overlay">
        <div class="ability-shell">
          <div class="ability-heading">
            <span>能力選択</span>
            <strong>${e.length}枚から1枚</strong>
          </div>
          <div class="card-row">
            ${e.map(t=>this.renderAbilityCard(t)).join("")}
          </div>
        </div>
      </div>
    `}renderCommandPanel(){const e=this.game.canUseBadMouthCommand("player"),t=this.game.board.getPieces("ai").filter(c=>c.type==="iyanaYatsu").length,n=this.game.mechFusionTickets.player,i=this.game.getSelectedHero(),r=this.game.getHeroSkillChargeMax(),o=this.game.canUseHeroSkill(),a=n>0&&this.game.phase==="action"&&this.game.currentPlayer==="player"&&this.game.canStartHyperMechaFusion("player",!0)&&this.game.getFusionCandidates("player").length>=5,l=this.game.turnNumber<3?`3ターン目から解禁 / USBチャンス ${n}回`:`USBチャンス ${n}回`;return`
      <div class="panel-section command-panel">
        <h2>コマンド</h2>
        ${i?`<button class="command-button hero-skill-button" data-command="hero-skill" ${o?"":"disabled"}>
                <span>${i.skillName}</span>
                <small>${i.name} / CHARGE ${this.game.heroSkillCharge}/${r}</small>
              </button>`:""}
        <button class="command-button" data-command="bad-mouth" ${e?"":"disabled"}>
          <span>罵詈雑言</span>
          <small>${t>0?`敵のいやなやつ ${t}体`:"対象なし"}</small>
        </button>
        <button class="command-button" data-command="start-fusion-ticket" ${a?"":"disabled"}>
          <span>追加融合</span>
          <small>${l}</small>
        </button>
      </div>
    `}renderTowerPanel(){const e=this.game.towerRun,t=e.mode==="demonCastle",n=e.permanentRewards.length?e.permanentRewards.map(o=>`<span>${this.escapeHtml(o)}</span>`).join(""):"<span>未獲得</span>",i=e.lastRestSpot?`${e.lastRestSpot.name} ☆${e.lastRestSpot.rarity}`:"未到達",r=Math.max(0,Math.min(100,e.playerExp/Math.max(1,e.playerExpToNext)*100));return`
      <div class="panel-section tower-panel">
        <h2>${this.escapeHtml(e.dungeonName)}</h2>
        <div class="tower-floorline">
          <strong>${e.floor}F</strong>
          <span>${e.isBossFloor?"BOSS":`TIER ${e.difficultyTier}`}</span>
        </div>
        <p class="tower-enemy">${this.escapeHtml(e.enemyName)} <small>${this.escapeHtml(e.enemyTitle)}</small></p>
        <div class="tower-meter">
          <span>敵HP</span>
          <b>${this.game.bases.ai.hp}/${e.enemyMaxHp}</b>
        </div>
        <div class="tower-meta">
          <span>階層ターン ${e.floorTurn}</span>
          <span>休憩 ${this.escapeHtml(i)}</span>
        </div>
        ${t?`<div class="castle-level">
                <div><span>Lv.${e.playerLevel}</span><b>EXP ${e.playerExp}/${e.playerExpToNext}</b></div>
                <i style="width:${r}%"></i>
                <p>能力カード ${3+Math.floor(e.playerLevel/5)}枚 / 魔人攻撃 ${e.demonAttackUnlocked?`Rank ${e.demonAttackRank} 威力${e.demonAttackPower}`:"未解放"}</p>
              </div>`:""}
        ${e.elevatorNotice?`<p class="tower-quote elevator">${this.escapeHtml(e.elevatorNotice)}</p>`:""}
        ${e.bossScenario?`<p class="tower-scenario">${this.escapeHtml(e.bossScenario)}</p>`:""}
        ${e.bossQuote?`<p class="tower-quote">${this.escapeHtml(e.bossQuote)}</p>`:""}
        <div class="tag-list compact tower-rewards">${n}</div>
      </div>
    `}renderFusionOverlay(){return`
      <div class="overlay fusion-overlay">
        <div class="ability-shell fusion-shell">
          <div class="ability-heading">
            <span>ハイパーメカ融合</span>
            <strong>${this.game.fusionSelectionIds.length}/5</strong>
          </div>
          <p class="fusion-copy">自陣の非王将コマを5体クリックすると、選択した5体がハイパーメカ一型になります。</p>
          <button class="command-button fusion-cancel" data-command="cancel-fusion">
            <span>キャンセル</span>
            <small>選択をやり直す</small>
          </button>
        </div>
      </div>
    `}renderMechaUpgradeOverlay(){const e=this.game.getPendingMechaUpgradeCard();return e?`
      <div class="overlay mecha-upgrade-overlay">
        <div class="ability-shell mecha-upgrade-shell">
          <div class="ability-heading">
            <span>ハイパーメカ強化</span>
            <strong>${e.pieceName} / 3Tごとに獲得</strong>
          </div>
          <div class="single-card-row">
            <button class="ability-card ${So(e.rarity)} mecha-upgrade-card" data-command="claim-mecha-upgrade">
              <span class="rarity">${e.rarity}</span>
              <span class="mecha-card-art ${e.upgrade}" aria-hidden="true">
                <i></i>
                <b>${e.artLabel}</b>
              </span>
              <strong>${e.name}</strong>
              <em>Hyper Mecha Upgrade</em>
              <p>${e.description}</p>
              <small>クリックで獲得してターン開始能力へ進みます。</small>
            </button>
          </div>
        </div>
      </div>
    `:""}renderProcessExecutionOverlay(){const e=(t,n)=>{const i=this.game.processExecutionHpPercent[t],r=this.game.bases[t].hp;return`
        <div class="process-row">
          <div>
            <strong>${n}</strong>
            <span>${r} HP / ${i}%</span>
          </div>
          <button type="button" data-process-owner="${t}" data-process-adjust="-100">-100%</button>
          <input type="range" min="10" max="1000" step="10" value="${i}" data-process-owner="${t}" data-process-range />
          <button type="button" data-process-owner="${t}" data-process-adjust="100">+100%</button>
        </div>
      `};return`
      <div class="overlay process-overlay">
        <div class="process-console">
          <div class="process-titlebar">
            <span>process://hp-editor</span>
            <strong>RARE EXECUTION</strong>
          </div>
          <div class="process-screen">
            <p>HP_PROCESS_WRITE ACCESS GRANTED</p>
            ${e("player","自分")}
            ${e("ai","相手")}
          </div>
          <button class="process-run-button" data-command="finish-process">EXECUTE / RETURN</button>
        </div>
      </div>
    `}renderDebugConsole(){if(!this.debugOpen)return'<button class="debug-launcher" data-debug-toggle>DEBUG</button>';const e=[["歩","spawn player pawn"],["忍者","spawn player ninja"],["タレット","spawn player turret"],["神","spawn player god"],["いやな奴","spawn player iyanaYatsu"],["メカ","spawn player hyperMecha"],["能力3枚","card player"],["メカ強化","mecha player random"],["衛星照準","mecha player satelliteAim"],["プロセス","mecha player processExecution"],["敵HP1","enemyhp1"],["USB+1","usb player 1"],["溶岩x3","terrain lava 3 player"],["Ⅱ型化","promote player"],["次F","tower next"],["+5F","tower +5"],["1F","tower floor 1"],["5F","tower floor 5"],["30F","tower floor 30"],["31F","tower floor 31"],["城5F","castle floor 5"],["城20F","castle floor 20"],["城40F","castle floor 40"]];return`
      <section class="debug-console">
        <div class="debug-titlebar">
          <span>debug://rogue-shogi</span>
          <button type="button" data-debug-toggle>_</button>
        </div>
        <div class="debug-output">
          ${(this.debugLines.length>0?this.debugLines:["debug ready. type help"]).map(n=>`<p><span>&gt;</span>${this.escapeHtml(n)}</p>`).join("")}
        </div>
        <div class="debug-quickbar">
          ${e.map(([n,i])=>`<button type="button" data-debug-command="${this.escapeAttr(i)}">${this.escapeHtml(n)}</button>`).join("")}
        </div>
        <form class="debug-input-row" data-debug-form>
          <span>$</span>
          <input data-debug-input spellcheck="false" autocomplete="off" placeholder="enemyhp1 | tower next | tower +5 | spawn player ninja | mecha player usbProMax" />
          <button type="submit">RUN</button>
        </form>
      </section>
    `}executeDebugCommand(e){const t=e.trim();if(!t)return;this.pushDebugLine(`$ ${t}`);const n=this.game.debugExecuteCommand(t);this.pushDebugLine(n),this.render()}pushDebugLine(e){this.debugLines=[...this.debugLines,e].slice(-9)}escapeHtml(e){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t)}escapeAttr(e){return this.escapeHtml(e)}renderAbilityCard(e){return`
      <button class="ability-card ${So(e.rarity)}" data-ability-id="${e.id}">
        <span class="rarity">${e.rarity}</span>
        <strong>${e.name}</strong>
        <em>${e.category}</em>
        <p>${e.description}</p>
      </button>
    `}renderLog(e){return`<p class="log ${e.tone}">${e.text}</p>`}renderGameOver(){const e=this.game.winner==="player",t=this.game.towerRun.active?this.game.towerRun:null,n=t?this.escapeHtml(t.dungeonName):"";if(e&&(t!=null&&t.conquestEventUnlocked))return this.renderTowerConquestEvent();const i=new Set(["king","rook","bishop","gold","silver","knight","lance","pawn"]),r=Object.values(fi).filter(l=>l.implemented&&!i.has(l.type)),o=Object.values(fi).filter(l=>!l.implemented),a=cs.length;return`
      <div class="overlay">
        <div class="result">
          <span>${e?"勝利":"敗北"}</span>
          <strong>${e?"王権は守られました":"本拠地が崩れました"}</strong>
          ${t?`<p>${n} ${e?"制覇":`${t.floor}Fで撤退`} / 到達 ${t.clearedFloors+(e?0:1)}F / 永続強化 ${t.permanentRewards.length}個</p>`:""}
          <p>実装済み特殊コマ ${r.length} 種 / 拡張候補 ${o.length} 種 / 能力カード ${a} 種</p>
        </div>
      </div>
    `}renderTowerConquestEvent(){const e=Math.min(this.conquestDialogueIndex,Ri.length-1),t=Ri[e],n=e>=Ri.length-1;return`
      <div class="overlay conquest-event-overlay">
        <section class="conquest-event adv-event ${t.tone}">
          <div class="conquest-image-frame adv-scene">
            <img src="${lr("tower-conquest-bg.png")}" alt="完全制覇されたサーティビルディング" />
            <div class="adv-vignette" aria-hidden="true"></div>
            <div class="adv-clear-chip">
              <span>サーティビルディング完全制覇</span>
              <strong>31F CLEAR</strong>
            </div>
          </div>
          <div class="conquest-dialogue adv-dialogue">
            <div class="adv-nameplate">${this.escapeHtml(t.speaker)}</div>
            <p>${this.escapeHtml(t.text)}</p>
            <div class="conquest-actions">
              <span class="adv-progress">${e+1}/${Ri.length}</span>
              ${n?`<button type="button" class="command-button" data-command="return-title">
                      <span>タイトルへ戻る</span>
                      <small>魔王ボランティアと魔王城入口を確認</small>
                    </button>
                    <button type="button" class="command-button conquest-disabled" disabled>
                      <span>乗っ取られ魔王城</span>
                      <small>COMING SOON</small>
                    </button>`:`<button type="button" class="command-button adv-next-button" data-command="conquest-next">
                      <span>次へ</span>
                      <small>会話を進める</small>
                    </button>`}
            </div>
          </div>
        </section>
      </div>
    `}}const nl=document.querySelector("#app"),il=document.querySelector("#ui");if(!nl||!il)throw new Error("Application roots were not found.");const vi=new Cl,sl=new gm(nl,vi),Eo=new URLSearchParams(window.location.search),rl=Eo.has("debug")&&Eo.get("debug")!=="0",vm=new _m(il,vi,{debugEnabled:rl});rl&&(window.rogueShogi={game:vi,debug:s=>vi.debugExecuteCommand(s)});vi.onChange(()=>{sl.sync(),vm.render()});vi.start();sl.start();
