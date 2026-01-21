// config.js - Arquivo separado para configurações sensíveis
const CONFIG = {
    // Credenciais de admin (não coloque no GitHub)
    ADMIN_CREDENTIALS: {
        username: "admin_rio_cleaning", // Altere para seu usuário
        password: "SecurePass2024!"     // Altere para sua senha
    },
    
    // Configurações do Supabase (não coloque no GitHub)
    SUPABASE: {
        URL: "https://nekbbkenxcukoortusge.supabase.co",
        ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5la2Jia2VueGN1a29vcnR1c2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzOTU5MDIsImV4cCI6MjA3ODk3MTkwMn0.D72914Vyz1du1ZDKoNDdwT7YI-D8WPgZe38LbBV2bfc"
    },
    
    // Configurações da aplicação
    APP: {
        SESSION_TIMEOUT: 8 * 60 * 60 * 1000, // 8 horas
        MAX_LOGIN_ATTEMPTS: 3,
        LOCKOUT_TIME: 30000 // 30 segundos
    }
};

// Exportar para uso
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
