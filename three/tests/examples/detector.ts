﻿/// <reference types="three" />
/// <reference path="../three-tests-setup.ts" />


() => {
	if ( !Detector.canvas || !Detector.webgl || !Detector.workers || !Detector.fileapi ){
		var errorElement = Detector.getWebGLErrorMessage();
		Detector.addGetWebGLMessage();
	}
}