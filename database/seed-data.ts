interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: sañldkña asñljflñas saoñljfasñlf',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'En-Progreso dlkjs,slkjfskdn dslksd.j,sddn.,jf',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Finalizado: asñjlaskñfaksñlfaks lñsklñaf',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
