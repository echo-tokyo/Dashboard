enum Type {
  CLASSIC = 'CLASSIC',
  SERVER_SIDE = 'SERVER_SIDE',
  MVT = 'MVT',
}

enum Status {
  DRAFT = 'DRAFT',
  ONLINE = 'ONLINE',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}

export interface Site {
  id: number
  url: string
}

export interface Test {
  id: number
  name: string
  siteName: string
  type: Type
  status: Status
  siteId: number
}
