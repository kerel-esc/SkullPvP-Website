export const serverInfo = {
  name: 'Skull PvP',
  ip: 'SkullPvP.mc.gg',
  discord: 'https://discord.gg/W59MqMBafU',
  store: 'https://skull-pvp.tebex.store/',
}

export function getExternalUrl(value) {
  if (typeof value !== 'string' || !/^https?:\/\//i.test(value)) {
    return null
  }

  return value
}
