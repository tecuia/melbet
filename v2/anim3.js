(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"3_index_atlas_NP_1", frames: [[0,0,896,500],[0,502,896,500]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.i0_edit = function() {
	this.initialize(ss["3_index_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.i1_edit = function() {
	this.initialize(ss["3_index_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol77 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.i1_edit();
	this.instance.setTransform(-448,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol77, new cjs.Rectangle(-448,-250,896,500), null);


(lib.Symbol76 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.i0_edit();
	this.instance.setTransform(-448,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol76, new cjs.Rectangle(-448,-250,896,500), null);


(lib.Symbol75 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvsLQQhkAAAAhkIAAzXQAAhkBkAAIfZAAQBkAAAABkIAATXQAABkhkAAg");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol75, new cjs.Rectangle(-110.5,-71.9,221,143.9), null);


(lib.Symbol71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("Ak8l/IAAL/IJnmAg");
	this.shape.setTransform(0.9173,-0.0238);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDBA01").s().p("Akzl/IJnF/IpnGAg");
	this.shape_1.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol71, new cjs.Rectangle(-32.8,-41.9,67.4,83.8), null);


(lib.Symbol74 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var totalSeconds = 9;
		var timeLeft = totalSeconds;
		var txtField = this.txt;
		var self = this;                // сохраняем контекст клипа
		
		function formatTime(seconds) {
		    var secs = Math.floor(seconds);
		    var cents = Math.round((seconds - secs) * 100);
		    if (cents >= 100) {
		        cents = 0;
		        secs++;
		    }
		    if (secs < 0) secs = 0;
		    if (cents < 0) cents = 0;
		    return String(secs).padStart(2, '0') + ':' + String(cents).padStart(2, '0');
		}
		
		function onComplete() {
		    console.log("!!!!!!!!!!!!");
		    self.play();                // теперь this.play() работает
		}
		
		function tickHandler(event) {
		    if (timeLeft <= 0) {
		        // Удаляем именно привязанную функцию
		        createjs.Ticker.removeEventListener('tick', boundTickHandler);
		        onComplete();
		        return;
		    }
		    var delta = event.delta / 1000;
		    timeLeft -= delta;
		    if (timeLeft < 0) timeLeft = 0;
		    txtField.text = formatTime(timeLeft);
		}
		
		// Сохраняем привязанную функцию в переменную
		var boundTickHandler = tickHandler.bind(this);
		txtField.text = formatTime(totalSeconds);
		createjs.Ticker.addEventListener('tick', boundTickHandler);
	}
	this.frame_1 = function() {
		this.stop();
		if (window.tr === 1) {
			window.vShow2_1();
			this.parent.play();
		}
		if (window.tr === 2) {
			window.vShow3_1();
			this.parent.play();
		}
		if (window.tr === 3) {
			window.vShow4_1();
			this.parent.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("10:00", "55px 'Helvetica'", "#FDBA02");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 65;
	this.txt.lineWidth = 152;
	this.txt.parent = this;
	this.txt.setTransform(-0.05,35.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAdQgHgFAAgJQAAgTAcAAIASAAIAAgDQABgRgSAAQgNAAgIAIIgGgJQALgJAQAAQAeAAAAAcIAAAoIgMAAIAAgJQgGAKgPAAQgMAAgHgGgAgRAOQAAAFAFADQAEADAHAAQAOAAAEgMIAAgJIgRAAQgQAAgBAKg");
	this.shape.setTransform(57.65,28.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjAvIAAhdIAMAAIAAALQAJgLAPAAQAPAAAKAJQAKAKAAAQQAAAPgKAJQgKAKgPAAQgPAAgIgLIAAAjgAgQgdQgGAHAAALQAAALAGAFQAHAHAJAAQAKAAAGgHQAHgFAAgLQAAgLgHgHQgGgGgKAAQgJAAgHAGg");
	this.shape_1.setTransform(49.925,29.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAZQgLgKAAgPQABgOAJgKQALgKANAAQAQAAAJAKQAKAJAAAPIgBAEIg3AAQACAJAGAGQAHAFAJAAQANAAAHgIIAHAIQgKALgRAAQgQAAgKgKgAAXgEQgCgJgFgFQgHgGgJAAQgIAAgGAGQgGAFgBAJIAsAAIAAAAg");
	this.shape_2.setTransform(41,28.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcAiIAAgxIgZApIgFAAIgZgpIAAAxIgMAAIAAhDIANAAIAaAtIAcgtIAMAAIAABDg");
	this.shape_3.setTransform(31.825,28.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVAwIAAgxIgqAxIgLAAIAAhEIAMAAIAAAyIAqgyIALAAIAABEgAgOghQgGgFAAgJIAIAAQAAAFAEADQADADAFAAQAEAAAEgDQADgDAAgFIAJAAQgBAJgFAFQgFAEgJAAQgJAAgFgEg");
	this.shape_4.setTransform(22.15,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAdQgHgFAAgJQAAgTAcAAIATAAIAAgDQgBgRgRAAQgNAAgJAIIgFgJQALgJARAAQAdAAAAAcIAAAoIgLAAIAAgJQgIAKgPAAQgLAAgHgGgAgQAOQAAAFADADQAEADAIAAQAOAAAFgMIAAgJIgTAAQgPAAAAAKg");
	this.shape_5.setTransform(13.6,28.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAiIAAg4IgYAAIAAgLIA+AAIAAALIgaAAIAAA4g");
	this.shape_6.setTransform(6.8,28.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAdQgHgFAAgJQAAgTAcAAIASAAIAAgDQAAgRgRAAQgNAAgIAIIgGgJQALgJAQAAQAeAAAAAcIAAAoIgMAAIAAgJQgGAKgPAAQgMAAgHgGgAgRAOQAAAFAFADQAEADAHAAQAOAAAEgMIAAgJIgSAAQgPAAgBAKg");
	this.shape_7.setTransform(-3.9,28.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZArIAAgRIg9AAIAAhEIANAAIAAA5IAlAAIAAg5IAMAAIAAA5IALAAIAAAcg");
	this.shape_8.setTransform(-11.575,29.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUAiIAAgdIgnAAIAAAdIgMAAIAAhDIAMAAIAAAdIAnAAIAAgdIAMAAIAABDg");
	this.shape_9.setTransform(-20.875,28.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAZQgKgKAAgPQAAgPAKgJQALgKAOAAQAPAAAKAKQALAJAAAPQAAAPgLAKQgKAKgPAAQgOAAgLgKgAgQgRQgGAHAAAKQAAALAGAGQAHAHAJAAQAKAAAGgHQAHgGAAgLQAAgKgHgHQgGgGgKAAQgJAAgHAGg");
	this.shape_10.setTransform(-29.45,28.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASAiIgWgdIgPAAIAAAdIgMAAIAAhDIAMAAIAAAdIAPAAIAVgdIAOAAIgaAhIAbAig");
	this.shape_11.setTransform(-36.925,28.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAZQgLgKAAgPQAAgPALgJQAKgKAOAAQAQAAAJAKQALAJAAAPQAAAPgLAKQgJAKgQAAQgOAAgKgKgAgPgRQgHAHAAAKQAAALAHAGQAGAHAJAAQAKAAAGgHQAHgGAAgLQAAgKgHgHQgGgGgKAAQgJAAgGAGg");
	this.shape_12.setTransform(-48.95,28.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdAqIAAgQIg4AAIAAAQIgMAAIAAgaIADAAQAHgBADgKQACgHAAgQIABgXIA1AAIAAA5IALAAIAAAagAgMgSQgBAcgHAGIAlAAIAAguIgcAAg");
	this.shape_13.setTransform(-57.55,29.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglApIAFgJQAGAFAHAAQAIAAAFgLIACgFIgehEIANAAIAXA3IAYg3IAMAAIgiBMQgEAKgFAFQgGADgIAAQgLAAgHgGg");
	this.shape_14.setTransform(23.275,13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASAiIAAgbQgLAFgKAAQgbAAAAgXIAAgXIANAAIAAAWQAAANARAAQAIABAKgEIAAggIANAAIAABEg");
	this.shape_15.setTransform(15.425,12.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATAiIAAgVIgTAAIgBAAIgPAVIgOAAIARgXQgQgFAAgQQAAgLAIgHQAIgFANgBIAfAAIAABEgAgQgJQAAANAQAAIATAAIAAgaIgSAAQgRAAAAANg");
	this.shape_16.setTransform(7.525,12.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAcAiIAAgxIgZApIgFAAIgZgpIAAAxIgMAAIAAhEIANAAIAaAuIAcguIAMAAIAABEg");
	this.shape_17.setTransform(-1.325,12.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAZQgKgKAAgPQAAgPAKgJQALgKAOAAQAPAAALAKQAKAJAAAPQAAAPgKAKQgLAKgPAAQgOAAgLgKgAgQgRQgGAHAAAKQAAALAGAGQAHAHAJAAQAKAAAHgHQAGgGAAgLQAAgKgGgHQgHgGgKAAQgJAAgHAGg");
	this.shape_18.setTransform(-14.1,12.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATAiIAAg4IglAAIAAA4IgNAAIAAhEIA/AAIAABEg");
	this.shape_19.setTransform(-22.65,12.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAdQgHgFAAgJQAAgTAcAAIATAAIAAgDQAAgRgSAAQgNAAgJAIIgFgJQALgJAQAAQAeAAAAAcIAAAoIgMAAIAAgJQgGAKgQAAQgLAAgHgGgAgQAOQgBAFAEADQAFADAHAAQAOAAAFgMIAAgJIgSAAQgQAAAAAKg");
	this.shape_20.setTransform(62.95,-3.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjAvIAAhdIAMAAIAAALQAJgLAPAAQAPAAAKAJQAKAKAAAQQAAAPgKAJQgKAKgPAAQgPAAgIgLIAAAjgAgQgdQgGAHAAALQAAALAGAFQAHAHAJAAQAKAAAGgHQAHgFAAgLQAAgLgHgHQgGgGgKAAQgJAAgHAGg");
	this.shape_21.setTransform(55.225,-2.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWAdQgHgFAAgJQAAgTAcAAIASAAIAAgDQABgRgSAAQgNAAgIAIIgGgJQALgJAQAAQAeAAAAAcIAAAoIgMAAIAAgJQgGAKgPAAQgMAAgHgGgAgRAOQAAAFAFADQAEADAHAAQAOAAAEgMIAAgJIgRAAQgQAAgBAKg");
	this.shape_22.setTransform(46.4,-3.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAdArIAAgQIg5AAIAAAQIgMAAIAAgbIAEAAQAHgBADgKQACgHABgQIABgYIA0AAIAAA6IAKAAIAAAbgAgMgSQgBAbgHAHIAmAAIAAguIgdAAg");
	this.shape_23.setTransform(38.35,-2.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglApIAFgJQAGAFAHAAQAIAAAFgLIACgEIgehFIANAAIAXA2IAYg2IAMAAIgiBMQgEAKgFAEQgGAFgIAAQgLgBgHgGg");
	this.shape_24.setTransform(30.375,-2.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglApIAFgJQAGAFAHAAQAIAAAFgLIACgEIgehFIANAAIAXA2IAYg2IAMAAIgiBMQgEAKgFAEQgGAFgIAAQgLgBgHgGg");
	this.shape_25.setTransform(19.525,-2.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiAiIABgLIADAAQAHAAADgKQABgGABgPIACgaIAzAAIAABEIgMAAIAAg5IgdAAIAAAQQgBATgEAKQgFANgKAAIgIgBg");
	this.shape_26.setTransform(11.225,-3.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAVAjIAAgyIgqAyIgLAAIAAhFIAMAAIAAAyIAqgyIALAAIAABFg");
	this.shape_27.setTransform(3.15,-3.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAZQgKgKAAgPQAAgPAKgJQAKgKAPAAQAUAAAIAOIgJAHQgGgKgNAAQgJAAgHAGQgGAHAAAKQAAALAGAHQAHAGAJAAQANAAAGgKIAJAGQgIAPgUAAQgPAAgKgKg");
	this.shape_28.setTransform(-4.975,-3.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUAjIAAgyIgoAyIgMAAIAAhFIANAAIAAAyIApgyIALAAIAABFg");
	this.shape_29.setTransform(-16.7,-3.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgjAvIAAhdIAMAAIAAALQAJgLAPAAQAPAAAKAJQAKAKAAAQQAAAPgKAJQgKAKgPAAQgPAAgIgLIAAAjgAgQgdQgGAHAAALQAAALAGAFQAHAHAJAAQAKAAAGgHQAHgFAAgLQAAgLgHgHQgGgGgKAAQgJAAgHAGg");
	this.shape_30.setTransform(-25.325,-2.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAZQgLgKAAgPQAAgOAKgKQALgKANAAQAQAAAJAKQAKAJAAAPIgBAEIg3AAQABAJAHAGQAHAFAJAAQAMAAAIgIIAHAIQgKALgRAAQgQAAgKgKgAAWgEQgBgJgFgFQgHgGgJAAQgIAAgGAGQgGAFgBAJIArAAIAAAAg");
	this.shape_31.setTransform(-34.25,-3.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaAnQgJgMAAgWQAAgpAjgHIAfgHIABAMIgdAFQgMADgHAHQgGAIgBAOQAJgOARgBQAPAAAJAKQAJAIAAAPQAAAPgKAKQgKAJgPAAQgRAAgKgMgAgPABQgGAGAAALQAAAKAGAGQAHAHAJgBQAKABAGgHQAGgGAAgKQAAgLgGgGQgGgGgKAAQgJAAgHAGg");
	this.shape_32.setTransform(-42.425,-5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKAiIgdAAIAAhEIAMAAIAAAYIATAAQAMAAAHAGQAHAFAAAKQAAALgIAGQgHAHgLAAIgCgBgAgbAZIAQAAQAQAAAAgOQAAgMgQAAIgQAAgAAcAiIAAhEIAMAAIAABEg");
	this.shape_33.setTransform(-52.075,-3.4482);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AglAuIAAhaIAnAAQAPgBAIAHQAIAFAAAMQAAAPgOAGQATADAAARQAAAMgJAHQgIAGgRABgAgYAjIAcAAQAVAAAAgQQAAgPgVAAIgcAAgAgYgFIAZAAQATAAAAgOQAAgPgTAAIgZAAg");
	this.shape_34.setTransform(-61.825,-4.55);

	this.instance = new lib.Symbol75();
	this.instance.setTransform(0,42);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.5,-29.9,221,143.9);


(lib.Symbol70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		window.poz = 3;
	}
	this.frame_9 = function() {
		window.poz = 1;
	}
	this.frame_19 = function() {
		window.poz = 2;
	}
	this.frame_36 = function() {
		window.poz = 1;
	}
	this.frame_46 = function() {
		window.poz = 3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(17).call(this.frame_36).wait(10).call(this.frame_46).wait(9));

	// Layer_2
	this.instance = new lib.Symbol71();
	this.instance.setTransform(-61.75,266.85,1,1,0,0,0,0.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-267.45},28).to({y:266.85},26).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE600","#26FF00","#FF0000"],[0.106,0.518,1],0,-280.7,0,280.7).s().p("EgCEArAQg3g3AAhOMAAAhR1QAAhOA3g3QA3g3BNAAQBOAAA3A3QA3A3AABOMAAABR1QAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape.setTransform(-12.975,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(55));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.5,-309.3,265.4,618.2);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {f1:7, f1_2:9};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,8,9,10,11];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		function go1() {
			this.play();
			window.vShow1();
		}
		
		window.tr = 1;
		window.poz = 1;
	}
	this.frame_8 = function() {
		 if (window.act3 === 1) {
			this.gotoAndPlay("f1_2");
		}
		if (window.act3 === 0) {
			this.gotoAndPlay("f1");
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1));

	// Layer_4
	this.instance = new lib.Symbol74();
	this.instance.setTransform(636.65,99.3);

	this.instance_1 = new lib.Symbol70();
	this.instance_1.setTransform(820,294.75,0.5224,0.5224,0,0,0,1.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},10).to({state:[]},1).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDBA01").s().p("EghOAWKQgEgEgBgGQAAgGAEgFIADgDQADgCAEAAIA8gEQAGAAAFAEQAFAEAAAGQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgA/WWCQgEgEgBgGQAAgGAEgFQAEgFAGAAIA8gEQAGAAAFAEQAFAEAAAGIAAAAQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgA9eV6QgEgEgBgGIAAAAQAAgGAEgFQAEgFAGAAIA8gEQAGAAAFAEQAFAEAAAFIAAABQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgA7mVyQgEgEgBgGIAAgBQAAgFAEgFQAEgFAGAAIA8gEQAGAAAFAEQAEAEABAFIAAABQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgA5uVqQgEgEgBgGIAAgBQAAgFAEgFQAEgFAGAAIA8gEQAGAAAFAEQAEADABAGIAAABQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgA32ViQgEgEgBgGIAAgBQAAgGAEgEQAEgFAGAAIA8gEQAGAAAFAEQAEADABAGIAAABQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgA1+VaQgEgEgBgGIAAgBQAAgGAEgEQAEgFAGAAIA8gEQAGAAAFAEQAEADABAFIAAACQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgA0GVSQgEgEgBgGIAAgCQAAgFAEgEQAEgFAGAAIA8gEQAGAAAFAEQAEADABAFIAAACQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAyOVKQgEgEgBgGIAAgCQAAgFAEgEQAEgFAGAAIA8gEQAGAAAFAEQAEADABAFIAAACQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAwWVCQgEgEgBgGIAAgCQAAgFAEgEQAEgFAGAAIA8gEQAGAAAFAEQAEADABAFIAAACQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAueU6QgEgEgBgGIAAgCQABgFADgEQAEgFAGAAIA8gEQAGAAAFAEQAEADABAFIAAACQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAsmUyQgEgEgBgGIAAgCQABgFADgEQAEgFAGAAIA8gEQAGAAAFAEQAEADABAEIAAADQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAquUqQgEgEgBgGIAAgDQABgEADgEQAEgFAGAAIA8gEQAGAAAFAEQAEADABAEIAAADQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAo2UiQgEgEgBgGIAAgDQABgEADgEQAEgFAGAAIA8gEQAGAAAFAEQAEADABAEIAAADQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAm+UaQgEgEgBgGIAAgDQABgEADgEQAEgFAGAAIA8gEQAGAAAFAEQADADACAEIAAADQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAlGUSQgEgEgBgGIAAgDQABgEADgEQAEgFAGAAIA8gEQAGAAAFAEQADADACAEIAAADQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAjOUKQgEgEgBgGIAAgDQABgEADgEQAEgFAGAAIA8gEQAGAAAFAEQADADACAEIAAADQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgEglGAUFQgGgDgCgGIgSg5QgBgFACgGQADgFAGgCIAAAAQAGgCAGADQAFADACAFIASA5IABAEQAAAEgCAEQgDAFgGACIgEABQgEAAgDgCgAhWUCQgEgEgBgGIAAgDQABgEADgEQAEgFAGAAIA8gEQAGAAAFAEQADADABADIABAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAAhT6QgEgEgBgGIAAgEQABgDADgEQAEgFAGAAIA8gEQAGAAAFAEQADADABADIABAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgACZTyQgEgEgBgGIAAgEQABgEADgDQAEgFAGAAIA8gEQAGAAAFAEQADACABAEIABAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAERTqQgEgEgBgGIAAgEQABgEADgDQAEgFAGAAIA8gEQAGAAAFAEQADACABAEIABAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAGJTiQgEgEgBgGIAAgEQABgEADgDQAEgFAGAAIA8gEQAGAAAFAEQADACABAEIABAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAIBTaQgEgEgBgGIAAgEQABgEADgDQAEgFAGAAIA8gEQAGAAAFAEQADACABAEIABAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAJ5TSQgEgEgBgGIAAgEQABgEADgDQAEgFAGAAIA8gEQAGAAAFAEQADACABAEIABAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgALxTKQgEgEgBgGIAAgEQABgEADgDQAEgFAGAAIA8gEQAGAAAFAEQADACABAEIABAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgANpTCQgEgEgBgGIABgFQAAgDADgDQAEgFAGAAIA8gEQAGAAAFAEQADACABADIABAFQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAPhS6QgEgEgBgGIABgFQABgDACgDQAEgFAGAAIA8gEQAGAAAFAEQADACABADIABAFQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgARZSyQgEgEgBgGIABgFQABgDACgDQAEgFAGAAIA8gEQAGAAAFAEIAEAFIABAFQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgATRSqQgEgEgBgGIABgFIADgGQAEgFAGAAIA8gEQAGAAAFAEIAEAFIABAFQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAVJSiQgEgEgBgGIABgGIADgFQAEgFAGAAIA8gEQAGAAAFAEIAEAFIABAFQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAXBSaQgEgEgBgGIABgGIADgFQAEgFAGAAIA8gEQAGAAAFAEIAEAEIABAGQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAY5SSQgEgEgBgGIABgGIADgFQAEgFAGAAIA8gEQAGAAAFAEIADAEIACAGQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgEglqASTQgGgDgCgGIgSg5QgBgFACgGQADgFAFgCIABAAQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIAAAAIgEABQgEAAgDgCgAaxSKQgEgEgBgGIABgGIADgFQAEgFAGAAIA8gEQAGAAAFAEIADAEIACAGQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAcpSCQgEgEgBgGIABgGIADgFQAEgFAGAAIA8gEQAGAAAFAEIADAEIACAGQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgAehR6QgEgEgBgGQAAgEABgDIADgEQAEgFAGAAIA8gEQAGAAAFAEIADADQACADAAAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgEAgZARyQgEgEgBgGQAAgEABgDIADgEQAEgFAGAAIA8gEQAGAAAFAEIADADQACADAAAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgEAiRARqQgEgEgBgGQAAgEABgDIADgEQAEgFAGAAIA8gEQAGAAAFAEIADADQACADAAAEQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgEAkJARiQgEgEgBgGQAAgEABgDIADgEQAEgFAGAAIA8gFQAGgBAFAEIADAFIACAGQABAGgEAFQgEAEgHABIg8AFIgBAAQgFAAgFgEgEAmBARZQgEgEgBgGQAAgDABgDIADgFQAEgFAGAAIA8gFQAGgBAFAEIAEAGIABAFQABAGgEAFQgEAEgHABIg8AFIgBAAQgFAAgFgEgEAn5ARQQgEgEgBgGIABgGIADgFQAEgFAGAAIA8gFQAGgBAFAEQADADABADIABAFQABAGgEAFQgEAEgHABIg8AFIgBAAQgFAAgFgEgEApxARHQgEgEgBgGIAAgFQABgDADgDQAEgFAGAAIA8gFQAGgBAFAEQADADABAEIABAEQABAGgEAFQgEAEgHABIg8AFIgBAAQgFAAgFgEgEArpAQ+QgEgEgBgGIAAgEQABgEADgDQAEgFAGAAIA8gFQAGgBAFAEQAEAEABAEIAAADQABAGgEAFQgEAEgHABIg8AFIgBAAQgFAAgFgEgEAthAQ1QgEgEgBgGIAAgDQABgEADgEQAEgFAGAAIA8gFQAGgBAFAEQAEAEABAFIAAACQABAGgEAFQgEAEgHABIg8AFIgBAAQgFAAgFgEgEAvZAQsQgEgEgBgGIAAgCQAAgFAEgEQAEgFAGAAIA8gFQAGgBAFAEQAEAEABAGIAAABQABAGgEAFQgEAEgHABIg8AFIgBAAQgFAAgFgEgEAxRAQiQgEgEgBgGQAAgGAEgFQAEgFAGAAIA8gEQAGAAAFAEQAFAEAAAGIAAAAQABAGgFAFQgEAEgGABIg8AEIgBAAQgFAAgFgEgEgmOAQhQgGgDgCgGIgSg5QgBgFACgGQADgFAFgCIABAAQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgBAAIgDABQgEAAgDgCgEgmyAOvQgGgDgCgGIgSg5QgBgFACgGQADgFAFgCIABAAQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgBAAIgEABQgDAAgDgCgEgnWAM9QgGgDgCgGIgSg5QgBgFACgGQADgFAEgCIACAAQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgBABIgDAAQgEAAgDgCgEgn6ALLQgGgDgCgGIgSg5QgBgFACgGQADgEAEgCIACgBQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgCABIgCAAQgEAAgDgCgEgoeAJZQgGgDgCgGIgSg5QgBgFACgGQADgEADgCIADgBQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgCABIgDAAQgDAAgDgCgEgpCAHnQgGgDgCgGIgSg5QgBgFACgGQADgEADgCIADgBQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgDABIgBAAQgEAAgDgCgEgpmAF1QgGgDgCgGIgSg5QgBgFACgGQADgEADgCIADgBQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgDABIgBAAQgEAAgDgCgEgqKAEDQgGgDgCgGIgSg5QgBgFACgGQACgEAEgCIADgBQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgDABIgBAAQgEAAgDgCgEgquACRQgGgDgCgGIgSg5QgBgFACgGQACgEADgCIAEgBQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgEABIAAAAQgEAAgDgCgEgrSAAfQgGgDgCgGIgSg4QgBgFACgGQACgDADgDIAEgBQAGgCAGADQAFADACAFIASA4QACAGgDAGQgDAFgGACIgEABIAAAAQgEAAgDgCgEgr2gBSQgGgDgCgGIgSg5QgBgFACgGQACgDADgCIAEgCQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgEABIAAAAQgEAAgDgCgEgsagDEQgGgDgCgGIgSg5QgBgFACgGQACgDADgCIAEgCQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgFABQgDAAgDgCgEgs4gE0QgDAAgDgCQgGgCgCgGIgTg5QgCgGADgGQACgDADgDIAEgBQAGgCAFACQAGADACAGIATA5QACAGgDAGQgDAFgGACIgEABIgBAAgEgtjgGoQgGgCgCgGIgTg5QgCgGADgGQACgEAEgCIADgBQAGgCAFACQAGADACAGIATA5QACAGgDAGQgDAFgGACIgEABIgBAAIgGgCgEguIgIaQgGgDgCgGIgSg5QgBgFACgGQACgDADgDIAEgBQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgEABIAAAAQgEAAgDgCgEgutgKMQgGgDgCgGIgSg5QgBgFACgGQACgEAEgCIADgBQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgDABIgBAAQgEAAgDgCgEgvSgL+QgGgDgCgGIgSg5QgBgFACgGQADgEADgCIADgBQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgCABIgDAAQgDAAgDgCgEgv3gNwQgGgDgCgGIgSg5QgBgFACgGQADgEAEgCIACgBQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgCABIgCAAQgEAAgDgCgEgwcgPiQgGgDgCgGIgSg5QgBgFACgGQADgFAEgCIACAAQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgBABIgDAAQgEAAgDgCgEgxBgRUQgGgDgCgGIgSg5QgBgFACgGQADgFAFgCIABAAQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgBAAIgDABQgEAAgDgCgEgxmgTGQgGgDgCgGIgSg5QgBgFACgGQADgFAFgCIABAAQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIAAAAIgEABQgEAAgDgCgEgyLgU4QgGgDgCgGIgSg5QgBgFACgGQADgFAGgCIAAAAQAGgCAGADQAFADACAFIASA5QACAGgDAGQgDAFgGACIgEABQgEAAgDgCg");
	this.shape.setTransform(495.0773,275.902);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(253,186,1,0.247)").s().p("EggHAXXQgFgEgGAAIg8AEQgEAAgEACQhTh7iRAAIAAgEIgSg5QgCgFgGgDQgFgDgGACIgBAAIgJgdIABAAQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgBAAIgJgdIABAAQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgBAAIgJgdIABAAQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgCAAIgJgcIACgBQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgCAAIgJgcIACgBQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgDABIgJgdIADgBQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgDABIgJgdIADgBQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgDABIgKgdIAEgBQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgEABIgJgdIAEgBQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgEABIgJgdIAEgBQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgEABIgKgdIAFgBQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgEABIgKgdIAFgBQAGgCADgFQACgGgBgGIgSg4QgCgFgGgDQgFgDgGACIgFACIgJgeIAFgBQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgFACIgJgeIAFgBQAGgCADgFQACgGgBgGIgTg5QgCgGgGgDQgGgCgFACIgEABIgKgdIAFgBQAGgCADgFQADgGgCgGIgTg5QgCgGgGgDQgGgCgGACIgDABIgJgdIAEgBQAGgCACgFQADgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgEABIgKgdIAEgBQAGgCACgFQADgGgCgGIgSg5QgBgFgGgDQgFgDgGACIgDABIgKgdIADgBQAGgCACgFQADgGgCgGIgSg5QgBgFgGgDQgFgDgGACIgDABIgJgdIACgBQAGgCACgFQADgGgCgGIgSg5QgBgFgGgDQgFgDgGACIgCABIgKgdIACgBQAGgCACgFQADgGgCgGIgSg5QgBgFgGgDQgFgDgGACIgCAAIgJgdIABAAQAGgCADgFQACgGgCgGIgSg5QgBgFgGgDQgFgDgGACIgBAAIgKgdIABAAQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIgBAAIgJgdQAGgCADgFQACgGgBgGIgSg5QgCgFgGgDQgFgDgGACIAAAAIgDgIUBfPgNkAGAA0JIgLABQgBgGgEgEQgFgEgGAAIg8AEQgGAAgEAFQgFAFABAGIgeACQgBgGgFgEQgEgEgHABIg8AFQgGAAgEAFQgDAEAAAFIgfACQAAgFgEgEQgFgEgGABIg9AFQgGAAgEAFQgDAEAAAEIgfACQgBgEgDgEQgFgEgHABIg7AFQgHAAgEAFQgCADgBAEIgfACQgBgEgEgDQgEgEgHABIg8AFQgGAAgEAFQgCADgBADIgfACQgBgDgDgDQgFgEgGABIg9AFQgGAAgEAFIgDAFIggADIgDgGQgFgEgHABIg7AFQgHAAgEAFIgCAFIghACIgEgFQgEgEgHABIg8AFQgGAAgEAFIgCAEIgiACIgCgDQgFgEgGAAIg8AEQgGAAgEAFIgDAEIghACIgDgDQgFgEgGAAIg8AEQgGAAgEAFIgDAEIghACIgEgDQgEgEgGAAIg8AEQgGAAgFAFIgCAEIghADIgDgEQgFgEgGAAIg8AEQgGAAgEAFIgDAFIghACIgDgEQgFgEgGAAIg8AEQgGAAgEAFIgEAFIggACIgEgEQgEgEgGAAIg8AEQgGAAgFAFIgCAFIghACIgDgEQgFgEgGAAIg8AEQgGAAgEAFIgDAFIghADIgDgFQgFgEgGAAIg8AEQgGAAgEAFIgEAFIgfADIgFgFQgEgEgGAAIg8AEQgGAAgFAFIgDAGIggACIgDgFQgFgEgGAAIg8AEQgGAAgEAFQgDADgBADIggACQgBgDgCgCQgFgEgGAAIg8AEQgGAAgEAFQgDADgBADIgfACQgCgDgDgCQgEgEgGAAIg8AEQgGAAgFAFQgCADgBADIgfADQgCgEgCgCQgFgEgGAAIg8AEQgGAAgEAFQgDADgBAEIgfACQgBgEgDgCQgFgEgGAAIg8AEQgGAAgEAFQgDADgBAEIgfACQgBgEgEgCQgEgEgGAAIg8AEQgGAAgFAFQgCADgBAEIgfACQgBgEgDgCQgFgEgGAAIg8AEQgGAAgEAFQgDADgBAEIgfACQgBgEgDgCQgFgEgGAAIg8AEQgGAAgEAFQgDADgBAEIgfACQgBgEgEgCQgEgEgGAAIg8AEQgGAAgFAFQgCADgBAEIgfACQgBgDgDgDQgFgEgGAAIg8AEQgGAAgEAFQgDADgBAEIgeACQgBgDgDgDQgFgEgGAAIg8AEQgGAAgEAFQgDADgBAFIgfACQgBgEgEgDQgEgEgGAAIg8AEQgGAAgFAFQgDAEAAAEIgfACQgBgEgDgDQgFgEgGAAIg8AEQgGAAgEAFQgEAEAAAEIgfACQgBgEgDgDQgFgEgGAAIg8AEQgGAAgEAFQgEAEAAAEIgfACQgBgEgEgDQgEgEgGAAIg8AEQgGAAgFAFQgDAEAAAEIgfACQgBgEgDgDQgFgEgGAAIg8AEQgGAAgEAFQgEAEAAAEIgfACQgBgEgDgDQgFgEgGAAIg8AEQgGAAgEAFQgEAEAAAFIgeACQgCgFgEgDQgEgEgGAAIg8AEQgGAAgFAFQgDAEAAAFIgfACQgBgFgDgDQgFgEgGAAIg8AEQgGAAgEAFQgEAEAAAFIgfACQAAgFgEgDQgFgEgGAAIg8AEQgGAAgEAFQgEAEAAAFIgeACQgBgFgFgDQgEgEgGAAIg8AEQgGAAgFAFQgDAEAAAFIgfACQAAgFgEgDQgFgEgGAAIg8AEQgGAAgEAFQgEAEAAAGIgfACQAAgGgEgDQgFgEgGAAIg8AEQgGAAgEAFQgEAEAAAGIgeACQgBgGgFgDQgEgEgGAAIg8AEQgGAAgFAFQgDAFAAAFIgeACQgBgFgEgEQgFgEgGAAIg8AEQgGAAgEAFQgEAFAAAFIgeACQgBgFgEgEQgFgEgGAAIg8AEQgGAAgEAFQgFAFABAGIgeACQgBgGgFgEQgEgEgGAAIg8AEQgGAAgFAFQgEAFABAGIgeACQgBgGgEgEg");
	this.shape_1.setTransform(496.025,265.6069);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},9).to({state:[]},1).wait(2));

	// Layer_5
	this.instance_2 = new lib.Symbol76();
	this.instance_2.setTransform(425.55,238.4,0.9759,0.9779,0,0,0,1.9,1.7);

	this.instance_3 = new lib.Symbol77();
	this.instance_3.setTransform(425,240,0.9779,0.9779);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},7).to({state:[{t:this.instance_3}]},2).to({state:[]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,232.3,451.6,252.2);
// library properties:
lib.properties = {
	id: 'C2FF4C35834A4122BCF87252FB971D33',
	width: 850,
	height: 480,
	fps: 31,
	color: "#323232",
	opacity: 0.00,
	manifest: [
		{src:"images/3_index_atlas_NP_1.jpg?1782138388071", id:"3_index_atlas_NP_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C2FF4C35834A4122BCF87252FB971D33'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;