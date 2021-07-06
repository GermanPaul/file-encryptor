const textMessages = {
    intro: `
███████╗███╗   ██╗ ██████╗██████╗ ██╗   ██╗██████╗ ████████╗ ██████╗ ██████╗ 
██╔════╝████╗  ██║██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗
█████╗  ██╔██╗ ██║██║     ██████╔╝ ╚████╔╝ ██████╔╝   ██║   ██║   ██║██████╔╝
██╔══╝  ██║╚██╗██║██║     ██╔══██╗  ╚██╔╝  ██╔═══╝    ██║   ██║   ██║██╔══██╗
███████╗██║ ╚████║╚██████╗██║  ██║   ██║   ██║        ██║   ╚██████╔╝██║  ██║
╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝        ╚═╝    ╚═════╝ ╚═╝  ╚═╝

Bienvenido a FileEncryptor, una herramienta que permite encriptar y desencriptar archivos individuales.`,

    mainMenu: `Por favor seleccione una opción:

1. Encriptar un archivo con el método AES-256-CBC
2. Desencriptar un archivo previamente codificado con el método AES-256-CBC
3. Salir

`,
    textEncryptInputFileName: `¿Cúal es el nombre del archivo que desea encriptar?:`,
    textEncryptPassword: `Escriba la contraseña que desea usar para encriptar el archivo:`,
    textEncryptOutputFileName: `¿Cúal es el nombre con el que desea guardar el archivo encriptado?:`,
    textDecryptInputFileName: `¿Cúal es el nombre del archivo que desea desencriptar?:`,
    textDecryptPassword: `Escriba la contraseña que se usó para encriptar el archivo:`,
    textDecryptOutputFileName: `¿Cúal es el nombre con el que desea guardar el archivo desencriptado?:`
};

module.exports = textMessages;