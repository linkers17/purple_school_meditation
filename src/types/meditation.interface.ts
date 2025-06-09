export interface MeditationInterface {
  CreatedAt: string,
  description: string,
  duration_min: number,
  DeletedAt: string | null,
  ID: number,
  title: string,
  UpdatedAt: string,
}

export interface MeditationsListResponse {
  data: {
    meditations: MeditationInterface[],
    status: string,
  },
}
