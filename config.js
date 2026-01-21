// config.js - Arquivo de configuração separado
// Salve este arquivo em local seguro, NÃO suba para o GitHub

// ============================================
// CONFIGURAÇÕES DE SEGURANÇA
// ============================================

// Credenciais de admin (armazenadas separadamente)
const ADMIN_CREDENTIALS = {
    username: "admin_rio_cleaning",
    password: "SecurePass2026"
};

// Configuração do Supabase
const SUPABASE_CONFIG = {
    url: 'https://nekbbkenxcukoortusge.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5la2Jia2VueGN1a29vcnR1c2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzOTU5MDIsImV4cCI6MjA3ODk3MTkwMn0.D72914Vyz1du1ZDKoNDdwT7YI-D8WPgZe38LbBV2bfc'
};

// Configuração do sistema
const APP_CONFIG = {
    sessionTimeout: 8 * 60 * 60 * 1000, // 8 horas em milissegundos
    maxFailedAttempts: 3,
    lockoutTime: 30000, // 30 segundos
    itemsPerPage: 10
};
