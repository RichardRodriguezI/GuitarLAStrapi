module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce4eqo82i3mmvv47o3fg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarrala_khtt'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'pAqcxVLGqBLJUrgxuJ8vc8deKbyM005A'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
