import type { UserInterface } from '@/types/user.interface.ts';

export interface ProfileInterface {
  data: {
    user: UserInterface & { last_login_at: string },
    status: string,
  },
}

export interface RequestStateInterface {
  type: string,
  value: number,
}

export interface ResponseStateInterface {
  data: {
    stat: {
      ID: number,
        CreatedAt: string,
        UpdatedAt: string,
        DeletedAt: string | null,
        user_id: number,
        date: string,
        duration_min: number,
        feeling_calm: number,
        feeling_relax: number,
        feeling_focus: number,
        feeling_anxiety: number,
    },
  },
  message: string,
  status: string,
}
