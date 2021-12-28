const CONTRACT_ADDRESS = '0x84eD17b6DC5ebf39AEa73b40043A3984b616f249';

/*
 * Add this method and make sure to export it on the bottom!
 */
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  
  export { CONTRACT_ADDRESS, transformCharacterData };