import * as fs from 'fs-extra';
import * as Path from 'path';

const len = 2;
const src = "";
const dest = "";
const file = "";
const dir = "";
const path = "";
const data = "";
const uid = 0;
const gid = 0;
const fd = 0;
const modeNum = 0;
const modeStr = "";
const object = {};
const errorCallback = (err: Error) => { };
const readOptions: fs.ReadOptions = {
	reviver: {}
};
const writeOptions: fs.WriteOptions = {
	replacer: {}
};

fs.moveSync(src, dest, {});
fs.move(src, dest, {}).then(() => {
	// stub
});
fs.move(src, dest).then(() => {
	// stub
});
fs.move(src, dest, {}, () => {
	// stub
});
fs.move(src, dest, () => {
	// stub
});

fs.copy(src, dest).then(() => {
	// stub
});
fs.copy(src, dest, { overwrite: true }).then(() => {
	// stub
});
fs.copy(src, dest, errorCallback);
fs.copy(src, dest, (src: string) => false, errorCallback);
fs.copy(src, dest,
	{
		overwrite: true,
		preserveTimestamps: true,
		filter: (src: string) => false
	},
	errorCallback
);
fs.copy(src, dest,
	{
		overwrite: true,
		preserveTimestamps: true,
		filter: /.*/
	},
	errorCallback
);
fs.copySync(src, dest);
fs.copySync(src, dest, (src: string) => false);
fs.copySync(src, dest, /.*/);
fs.copySync(src, dest,
	{
		overwrite: true,
		preserveTimestamps: true,
		filter: (src: string) => false
	}
);
fs.copySync(src, dest,
	{
		overwrite: true,
		preserveTimestamps: true,
		filter: /.*/
	}
);
fs.createFile(file).then(() => {
	// stub
});
fs.createFile(file, errorCallback);
fs.createFileSync(file);

fs.mkdirs(dir).then(() => {
	// stub
});
fs.mkdirp(dir).then(() => {
	// stub
});
fs.mkdirs(dir, errorCallback);
fs.mkdirsSync(dir);
fs.mkdirp(dir, errorCallback);
fs.mkdirpSync(dir);

fs.outputFile(file, data).then(() => {
	// stub
});
fs.outputFile(file, data, errorCallback);
fs.outputFileSync(file, data);

fs.outputJson(file, data, {
	spaces: 2
}).then(() => {
	// stub
});
fs.outputJson(file, data, {
	spaces: 2
}, errorCallback);
fs.outputJSON(file, data, errorCallback);
fs.outputJSON(file, data).then(() => {
	// stub
});

fs.outputJsonSync(file, data);
fs.outputJSONSync(file, data);

fs.readJson(file).then(() => {
	// stub
});

fs.readJson(file, readOptions).then(() => {
	// stub
});
fs.readJson(file, (error: Error, jsonObject: any) => { });
fs.readJson(file, readOptions, (error: Error, jsonObject: any) => { });
fs.readJSON(file, (error: Error, jsonObject: any) => { });
fs.readJSON(file, readOptions, (error: Error, jsonObject: any) => { });

fs.readJsonSync(file, readOptions);
fs.readJSONSync(file, readOptions);

fs.remove(dir, errorCallback);
fs.remove(dir).then(() => {
	// stub
});
fs.removeSync(dir);

fs.writeJson(file, object).then(() => {
	// stub
});
fs.writeJSON(file, object).then(() => {
	// stub
});
fs.writeJson(file, object, errorCallback);
fs.writeJson(file, object, writeOptions, errorCallback);
fs.writeJSON(file, object, errorCallback);
fs.writeJSON(file, object, writeOptions, errorCallback);
fs.writeJson(file, object, writeOptions).then(() => {
	// stub
});
fs.writeJSON(file, object, writeOptions).then(() => {
	// stub
});
fs.writeJsonSync(file, object, writeOptions);
fs.writeJSONSync(file, object, writeOptions);

fs.ensureDir(path).then(() => {
	// stub
});
fs.ensureDir(path, errorCallback);
fs.ensureDirSync(path);

fs.ensureFile(path).then(() => {
	// stub
});
fs.ensureFile(path, errorCallback);
fs.ensureFileSync(path);
fs.ensureLink(path, path).then(() => {
	// stub
});
fs.ensureLink(path, path, errorCallback);
fs.ensureLinkSync(path, path);
fs.ensureSymlink(path, path).then(() => {
	// stub
});
fs.ensureSymlink(path, path, errorCallback);
fs.ensureSymlinkSync(path, path);
fs.emptyDir(path).then(() => {
	// stub
});
fs.emptyDir(path, errorCallback);
fs.emptyDirSync(path);
fs.pathExists(path).then((_exist: boolean) => {
	// stub
});
fs.pathExists(path, (_err: Error, _exists: boolean) => { });
const x: boolean = fs.pathExistsSync(path);

fs.rename(src, dest, errorCallback);
fs.renameSync(src, dest);
fs.truncate(path, len, errorCallback);
fs.truncateSync(path, len);
fs.chown(path, uid, gid, errorCallback);
fs.chownSync(path, uid, gid);
fs.fchown(fd, uid, gid, errorCallback);
fs.fchownSync(fd, uid, gid);
fs.lchown(path, uid, gid, errorCallback);
fs.lchownSync(path, uid, gid);
fs.chmod(path, modeNum, errorCallback);
fs.chmod(path, modeStr, errorCallback);
fs.chmodSync(path, modeNum);
fs.chmodSync(path, modeStr);
fs.fchmod(fd, modeNum, errorCallback);
fs.fchmod(fd, modeStr, errorCallback);
fs.fchmodSync(fd, modeNum);
fs.fchmodSync(fd, modeStr);
fs.lchmod(path, modeStr, errorCallback);
fs.lchmod(path, modeNum, errorCallback);
fs.lchmodSync(path, modeNum);
fs.lchmodSync(path, modeStr);
fs.statSync(path);
fs.lstatSync(path);
