// config.js - ARQUIVO DE CONFIGURAÇÃO PRIVADO
// NÃO SUBIR ESTE ARQUIVO PARA O GITHUB!

// ============================================
// CONFIGURAÇÕES DE SEGURANÇA - PRIVADAS
// ============================================

// CREDENCIAIS DE ADMINISTRADOR
// Altere estas credenciais para suas próprias
const ADMIN_CREDENTIALS = {
    username: "admin_rio_cleaning",  // Seu usuário admin
    password: "SecurePass2024!"      // Sua senha forte
};

// CONFIGURAÇÃO DO SUPABASE
// Substitua com suas credenciais do Supabase
const SUPABASE_CONFIG = {
    url: 'https://nekbbkenxcukoortusge.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5la2Jia2VueGN1a29vcnR1c2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzOTU5MDIsImV4cCI6MjA3ODk3MTkwMn0.D72914Vyz1du1ZDKoNDdwT7YI-D8WPgZe38LbBV2bfc'
};

// CONFIGURAÇÕES DO SISTEMA
const APP_CONFIG = {
    sessionTimeout: 8 * 60 * 60 * 1000,    // 8 horas em milissegundos
    maxFailedAttempts: 5,                   // Máximo de tentativas falhas
    lockoutTime: 30000,                     // 30 segundos de bloqueio
    itemsPerPage: 10,                       // Itens por página na tabela
    appName: 'Rio Cleaning',
    version: '1.0.0'
};

// CONFIGURAÇÕES DE EMAIL (opcional)
const EMAIL_CONFIG = {
    contactEmail: 'contact@riocleaning.com',
    supportEmail: 'support@riocleaning.com',
    noreplyEmail: 'noreply@riocleaning.com'
};

// CONFIGURAÇÕES DE NEGÓCIO
const BUSINESS_CONFIG = {
    businessName: 'Rio Cleaning',
    phone: '(123) 456-7890',
    address: '123 Clean Street, City, State',
    workingHours: 'Mon-Sat: 7:00 AM - 7:00 PM',
    services: ['House Cleaning', 'Church Cleaning', 'Upholstery Cleaning', 'Commercial Cleaning']
};

// Exportar configurações
if (typeof module !== 'undefined' && module.exports) {
    // Node.js/CommonJS
    module.exports = {
        ADMIN_CREDENTIALS,
        SUPABASE_CONFIG,
        APP_CONFIG,
        EMAIL_CONFIG,
        BUSINESS_CONFIG
    };
} else {
    // Browser
    window.APP_CONFIG = {
        ADMIN_CREDENTIALS,
        SUPABASE_CONFIG,
        APP_CONFIG,
        EMAIL_CONFIG,
        BUSINESS_CONFIG
    };
}
