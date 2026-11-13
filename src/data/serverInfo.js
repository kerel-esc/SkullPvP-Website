export const serverInfo = {
  name: 'Skull PvP',
  ip: 'SkullPvP.mc.gg',
  edition: 'Java Edition',
  version: '26.3',
  discord: 'https://discord.gg/b9D9bQGJ5M',
  store: 'https://skull-pvp.tebex.store/',
}

export function getExternalUrl(value) {
  if (typeof value !== 'string' || !/^https?:\/\//i.test(value)) {
    return null
  }

  return value
}
