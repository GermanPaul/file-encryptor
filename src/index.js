const LineHelper = require('./helpers/linelHelper');
const fileHelper = require('./helpers/fileHelper');
const CryptoHelper = require('./helpers/cryptoHelper');
const textMessages = require('./constants/textMessages');

const cryptoHelper = new CryptoHelper('Initialization vector string');

async function mainMenu() {
	const userSelection = await LineHelper.question(textMessages.mainMenu);
	switch(userSelection){
		case '1':
			encryptFile();
			break;
		case '2':
			decryptFile();
			break;
		case '3':
			LineHelper.outro('\nCerrando el programa...');
			break;
		default:
			console.log('\nLa opción selecionada es inválida.\n')
			mainMenu();
	};
};

async function encryptFile() {
	const inputFileName = await LineHelper.question(textMessages.textEncryptInputFileName);
	const password = await LineHelper.question(textMessages.textEncryptPassword);
	const outputFileName = await LineHelper.question(textMessages.textEncryptOutputFileName);

	fileHelper.readFile(inputFileName).then(fileData => {
		const stringData = fileData.toString();
		return cryptoHelper.encrypt(stringData, password);
	}).then(async encryptedData => {
		await fileHelper.writeFile(outputFileName, encryptedData);
		console.log('\nEl archivo encriptado fue guardado exitosamente.\n');
	}).catch((errorMsg) => {
		console.log(`\nSe presentó un error al realizar el proceso: ${errorMsg}\n`);
	}).finally(()=>{
		mainMenu();
	});
};

async function decryptFile() {
	const inputFileName = await LineHelper.question(textMessages.textDecryptInputFileName);
	const password = await LineHelper.question(textMessages.textDecryptPassword);
	const outputFileName = await LineHelper.question(textMessages.textDecryptOutputFileName);

	fileHelper.readFile(inputFileName).then(fileData => {
		const stringData = fileData.toString();
		return cryptoHelper.decrypt(stringData, password);
	}).then(async encryptedData => {
		await fileHelper.writeFile(outputFileName, encryptedData);
		console.log('\nEl archivo desencriptado fue guardado exitosamente.\n');
	}).catch((errorMsg) => {
		console.log(`\nSe presentó un error al realizar el proceso: ${errorMsg}\n`);
	}).finally(()=>{
		mainMenu();
	});
};

LineHelper.intro();
mainMenu();
