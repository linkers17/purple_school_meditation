export enum StatsAlias {
  anxiety = 'total_anxiety',
  calm = 'total_calm',
  focus = 'total_focus',
  minutes = 'total_minutes',
  relax = 'total_relax',
}

export interface StatInterface {
  ID: number,
  CreatedAt: string,
  UpdatedAt: string,
  DeletedAt: null,
  user_id: number,
  date: string,
  duration_min: number,
  feeling_calm: number,
  feeling_relax: number,
  feeling_focus: number,
  feeling_anxiety: number,
}

export interface StatsResponseInterface {
  data: {
    stats: StatInterface[],
    summary: {
      total_anxiety: number,
      total_calm: number,
      total_focus: number,
      total_minutes: number,
      total_relax: number,
    }
  },
  status: string,
}

export interface RequestDurationStatsInterface {
  type: 'duration_min',
  value: number,
}

export interface ResponseDurationStatsInterface {
  data: {
    stat: StatInterface,
  },
  message: string,
  status: string,
}
