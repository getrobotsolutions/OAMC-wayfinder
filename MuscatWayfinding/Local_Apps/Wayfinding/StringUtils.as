﻿/**
 * copyright (c) 2010 IxD Consultant (http://www.ixd-consultant.com)
 * license
   
   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License <http://www.gnu.org/copyleft/gpl.html> for more details.
   
 * version: 1.5
 * date: 07/12/2010
 * Actionscript 2.0
 * Flash Player 8
 * @author Ahmed Abbas, ahmed.abbas@ixd-consultant.com
 * @contributors
		Jan Jonas
			Leiter Softwareentwicklung
			learnbit Internet und Multimedia GmbH
			Buchwiese, Germany
		Yasmin
			aka geekgirl
 *
 * requirements:
 
 	1. dynamic TextField.
	2. HTML enabled TextField.
	3. pre-assigned TextFormat.
	4. Arabic fonts.
 
 * recommended properties:
 	
	1. embedFonts: for proper rendering on Mac/Linux.
	
 * 
 * properties:
 
 	1. data: for referencing original input string.
	2. wrapFactor: optional reduction value (Mac only) for wrapping correction when using bi-directional text, possible values: .98 or less.
	3. htmlLines: array of spliced text block HTML lines.
	4. numLines: integer value of total text block lines.
	5. latinOnly: optional boolean in case of using latin only input string.
 
 *
 * notes:
 
 	1. for embedding fonts, when using StyleSheet it must be assigned after calling this method and after setting TextFormat for proper font detection, for example:
	
		import com.xvisage.utils.StringUtils;
		var utils:StringUtils = new StringUtils();
		var format:TextFormat = new TextFormat();
		format.color = 0x0066FF;
		output.htmlText = utils.parseArabic("ARABIC TEXT", output, format);
		var styles:StyleSheet = new StyleSheet();
		styles.setStyle("a:hover", {color:"#000099"});
		output.stylesheet = styles;
	2. for matching/comparing input string, when referencing original input string use the data property (utils.data) instead of (TextField.text) where "utils" is an instance of StringUtils class.
	3. for bullet rendering, include the bullet character "•" in the Character Embedding menu.
 
 *
 * features supported:
 
 	1. embedding fonts (just put a dynamic textfield on-stage and select at least Basic Latin (95 glyphs) and Arabic (1088 glyphs) from the Character Embedding menu).
	2. Arabic ligatures.
	3. word wrapping.
	4. bi-directional text.
	5. HTML Text.
	6. loading external text on run-time.
	7. Windows/Mac/Linux support.
	8. Arabic enabled input fields using actionscript method (createArabicInput) with the help of javascript (arabicinput.js).
 
 *
 * features not supported:
 
 	1. Arabic diacritics (not necessarily for reading Arabic language in general, arabs are using diacritics mostly for writing quran, and in that case diacritics are not the only missing feature, there're many other ligatures cases in Arabic used for quran writing).
 
 *
 * change list:
 
 	1. one step usage, without the need to setTextFormat() method.
 
 *
 * fixed bugs:
 
 	1. using multiple fonts.
	2. proper align if latin only text (using latinOnly property).
 
 * known bugs:
 
 	1. improper wrapping for non-embedded fonts only on Mac/Linux when begin text line with non-Arabic characters or when using custom format HTML tags.
 
 *
 * example:
 	
	import com.xvisage.utils.StringUtils;
	var utils:StringUtils = new StringUtils();
	utils.wrapFactor = .98; // optional value for Mac use only
	
	var format:TextFormat = new TextFormat();
	format.font = "Arial";
	format.size = 14;
	format.align = "right";
	format.rightMargin = 4;
	
	var output:TextField = this.createTextField("output", 1, 10, 10, Stage.width-20, format.size);
	output.autoSize = true;
	output.embedFonts = true;
	output.wordWrap = true;
	output.multiline = true;
	output.html = true;
	
	var xml:XML = new XML();
	xml.ignoreWhite = true;
	xml.onLoad = function(done:Boolean) {
		if (done) {
			output.htmlText = utils.parseArabic(this.firstChild.firstChild.nodeValue, output, format);
		}
	}
	xml.load("arabic.xml");
	
	<?xml version="1.0" encoding="utf-8"?>
	<arabic>
		<![CDATA[الهدف من لعبة الكلمات المتقاطعة هو ملء المربعات البيضاء، وتشكيل الكلمات أو العبارات، عن طريق حل القرائن التي تؤدي إلى إجابات. والمربعات السوداء تستخدم لفصل الكلمات أو العبارات. ويوضع لكل صف أو عمود رقم، ثم يكتب أمام الرقم ما يشابه الكلمة المطلوب كتابتها في المربعات، وتحوي المجلات أنواعا من هذه اللعبة؛ فمنها سهل وآخر صعب، والكلمات المتقاطعة في مجلة معينة تتبع أسلوب يختلف عن الأخرى، تبعا لأسلوب اللغة المستعملة والبلد، وتقوم المجلات والصحف بوضع هذه اللعبة لتسلية القراء. ظهرت أول لعبة للكلمات المتقاطعة في صحيفة newyork world وذلك في 21 ديسمبر عام 1913، وأصبحت من الألعاب الرائجة في الولايات المتحدة، ومنها انتقلت إلى بقية دول العالم، وبمختلف اللغات، وكان أول من أدخلها إلى الصحافة هو آرثر وين.]]>
	</arabic>
 
 **/
import flash.external.ExternalInterface;
class StringUtils extends String {
	private var chars:String;
	private var tag:TextField;
	private var format:TextFormat;
	private var temp:TextField;
	private var tempData:String;
	private var htmlTags:Array = ["A", "B", "BR", "FONT", "IMG", "I", "LI", "P", "SPAN", "TEXTFORMAT", "U", "UL"];
	private var brackets:String = "(){}[]<>";
	private var specialChars:String = "اأإآدذرزوؤء";
	private var isMAC:Boolean;
	public var latinOnly:Boolean = false;
	public var wrapFactor:Number = 1; // optional reduction for wrapping correction when using bi-directional text, possible values: .98 or less
	public var data:String;
	public var htmlLines:Array;
	public var numLines:Number;
	function StringUtils() {
		// check for OS, it seems like Flash Player behaves differently between Windows and Mac, especially for embedding fonts!
		isMAC = false;
		var version:String = getVersion();
		if (version.toLowerCase().indexOf("mac") != -1) {
			isMAC = true;
		}
		specialChars += String.fromCharCode(0xFEFC,0xFEFB,0xFEF8,0xFEF7,0xFEFA,0xFEF9,0xFEF6,0xFEF5);
	}
	/**
	 * @public
	 * creates proper arabic HTML string.
	 * 
	 * @param input String value of original arabic string.
	 * @param tag TextField target html enabled textfield.
	 * @return String value with correct arabic text.
	 */
	public function parseArabic(input:String, field:TextField, fieldFormat:TextFormat):String {
		tag = field;
		if (fieldFormat != undefined) {
			format = fieldFormat;
		} else {
			format = tag.getTextFormat();
		}
		data = input; // referencing original input string to use for matching/comparing instead of (TextField.text)
		htmlLines = [];
		var string:String = input;
		if (input.length>0) {
			var arabicChar:String = "";
			var arabicString:String = "";
			var latinChar:String = "";
			var latinString:String = "";
			var htmlString:String = "";
			chars = input;
			// format hard lines-breaks
			chars = chars.split("\r\n").join("\n");
			if (tag.multiline) {
				chars = chars.split("\r").join("<br />");
				chars = chars.split("\n").join("<br />");
				// replace HTML line breaks
				chars = properHTMLLines(chars);
				// split bullet list
				chars = splitBulletList(chars);
			} else {
				chars = chars.split("\r").join("");
				chars = chars.split("\n").join("");
			}
			// remove diacritics from arabic characters (to enable diacritics we need to reconsider ligatures conditions after finding a way to render diacritics properly).
			chars = stripDiacritics();
			// temporarily create an autosized textfield off-stage to use for proper right to left wrapping
			// if using V2 Components somewhere, then use a static depth instead of tag._parent.getNextHighestDepth()
			temp = tag._parent.createTextField("temp", tag._parent.getNextHighestDepth(), -1000, -1000, format.size, format.size+2);
			temp.autoSize = true;
			if (tag.embedFonts) {
				temp.embedFonts = true;
			}
			temp.selectable = false;
			temp.html = true;
			temp.text = "";
			tempData = "";
			var toggleHTML:Boolean = false;
			var toggleArabic:Boolean = false;
			var singleLine:Array = [];
			var multiLines:Array = [];
			// proper bi-directional with HTML wrapping
			var i:Number = 0;
			var v:Number = 0;
			var e:Number = 0;
			while (i<chars.length) {
				// detect begining of supported HTML tags
				if (chars.charAt(i-1) == ">" && toggleHTML) {
					toggleHTML = false;
				}
				// detect closing of supported HTML tags
				if (chars.charAt(i) == "<" && validateHTMLTag(i)) {
					toggleHTML = true;
				}
				if (chars.charAt(i) != " ") {
					// toggle Arabic characters
					if (!latinOnly) {
						if (validateArabic(i) || validateSymbol(i, toggleHTML)) {
							toggleArabic = true;
						} else {
							toggleArabic = false;
						}
					}
				}
				// buildig text line
				if (!toggleArabic) {
					// look for Arabic characters while switching direction and build text line
					if (arabicString.length>0) {
						singleLine.push({arabic:true, html:false, value:arabicString});
						arabicString = "";
					}
				}
				if (toggleArabic || !toggleArabic && toggleHTML) {
					// look for non-Arabic characters while switching direction and build text line
					if (latinString.length>0) {
						singleLine.push({arabic:false, html:false, value:latinString});
						latinString = "";
					}
				}
				if (toggleArabic || !toggleArabic && !toggleHTML) {
					// look for HTML characters while switching direction and build text line
					if (htmlString.length>0) {
						singleLine.push({arabic:false, html:true, value:htmlString});
						htmlString = "";
					}
				}
				if (toggleArabic) {
					// generate proper Arabic character
					arabicChar = getCharState(i);
					// brackets symmetrical swapping
					arabicChar = symmetricalSwapping(arabicChar, i);
					// build proper Arabic string
					arabicString += arabicChar;
					// store string value to temporary TextField for later wrapping
					tempData += arabicChar;
				} else {
					// generate non-Arabic character
					latinChar = chars.charAt(i);
					// build non-Arabic string
					if (toggleHTML) {
						htmlString += latinChar;
					} else {
						latinString += latinChar;
					}
					// store string value to temporary TextField for later wrapping
					tempData += chars.charAt(i);
				}
				// assign string value to temporary TextField for later wrapping
				temp.htmlText = getHTMLFormat(tempData);
				// detect line-break for proper wrapping
				if (breakTextLine(i, toggleHTML)) {
					// build proper text line after line break detection
					if (arabicString.length>0) {
						singleLine.push({arabic:true, html:false, value:arabicString});
						arabicString = "";
					}
					if (htmlString.length>0) {
						// complete HTML tag before trimming end of line.
						if (chars.charAt(i) != ">") {
							v = i+1;
							while (v<chars.length) {
								htmlString += chars.charAt(v);
								if (chars.charAt(v) == ">") {
									break;
								}
								v++;
							}
							i = v;
						}
						singleLine.push({arabic:false, html:true, value:htmlString});
						htmlString = "";
					}
					if (latinString.length>0) {
						singleLine.push({arabic:false, html:false, value:latinString});
						latinString = "";
					}
					if (singleLine.length>0) {
						multiLines.push(singleLine);
						singleLine = [];
					}
					temp.text = "";
					tempData = "";
				}
				i++;
			}
			// remove temporary TextField
			temp.removeTextField();
			// look for remaining characters build last text line
			if (arabicString.length>0) {
				singleLine.push({arabic:true, html:false, value:arabicString});
			}
			if (htmlString.length>0) {
				singleLine.push({arabic:false, html:true, value:htmlString});
			}
			if (latinString.length>0) {
				singleLine.push({arabic:false, html:false, value:latinString});
			}
			if (singleLine.length>0) {
				multiLines.push(singleLine);
			}
			numLines = 0;
			string = "";
			// build multiline text block
			for (v=0; v<multiLines.length; v++) {
				var hasHTML:Boolean = false;
				for (e=0; e<multiLines[v].length; e++) {
					if (multiLines[v][e].html) {
						hasHTML = true;
						break;
					}
				}
				if (hasHTML) {
					autoCompleteHTMLTags(v, multiLines);
				}
			}
			for (v=0; v<multiLines.length; v++) {
				var hasArabic:Boolean = false;
				for (e=0; e<multiLines[v].length; e++) {
					if (multiLines[v][e].arabic) {
						hasArabic = true;
						break;
					}
				}
				if (hasArabic) {
					if (!isMAC || tag.embedFonts && isMAC) {
						// re-order text line string parts only for embedded fonts
						multiLines.splice(v, 1, reorderTextLine(multiLines[v]));
					} else {
						if (!multiLines[v][0].arabic) {
							// place to fix beginning text line with non-Arabic charatcers only for non-embedded fonts
						}
					}
				}
				var htmlLine:String = "";
				for (e=0; e<multiLines[v].length; e++) {
					htmlLine += multiLines[v][e].value;
					if (multiLines[v][e].arabic) {
						// reverse Arabic characters for proper reading
						string += reverseChars(multiLines[v][e].value);
					} else {
						var baseChars:String = multiLines[v][e].value;
						// switch ending space character only for embedded fonts
						if (!latinOnly) {
							if (!isMAC || tag.embedFonts && isMAC) {
								if (baseChars.charAt(baseChars.length-1) == " " && !multiLines[v][e].html) {
									baseChars = " "+baseChars.substr(0, -1);
								}
							}
						}
						string += baseChars;
					}
				}
				htmlLines.push(htmlLine);
				// using HTML line-break to join all generated text lines
				if (v<multiLines.length-1) {
					string += "\n";
				}
				// set text lines count property
				numLines++;
			}
		} else {
			numLines = 1;
		}
		// convert TextFormat to HTML format tags
		string = getHTMLFormat(string);
		// returning proper arabic text with the specified font
		return string;
	}
	/**
	 * @private
	 * helper method converts RGB color to HTML hexadecimal color.
	 * 
	 * @param input Number value of RGB color.
	 * @return String value of valid HTML hexadecimal color.
	 */
	private function getProperColor(input:Number):String {
		var color:String = "#";
		var checker:Number = 0;
		if (input.toString(16).length<6) {
			while (checker<6-input.toString(16).length) {
				color += "0";
				checker++;
			}
		}
		color += input.toString(16);
		return color;
	}
	/**
	 * @private
	 * helper method converts TextFormat to HTML format tags.
	 * 
	 * @param input String value input string.
	 * @return Strinf value of valid HTML format tags.
	 */
	private function getHTMLFormat(input:String):String {
		var htmlFormat:String = '<textformat leftmargin="'+((format.leftMargin) ? format.leftMargin : 0)+'" rightmargin="'+((format.rightMargin) ? format.rightMargin : 0)+'" leading="'+((format.leading) ? format.leading : 0)+'"><p align="'+((format.align) ? format.align : "left")+'"><font face="'+((format.font) ? format.font : "Arial")+'" color="'+((format.color) ? getProperColor(format.color) : "#000000")+'" size="'+((format.size) ? format.size : 12)+'" letterspacing="'+((format.letterSpacing) ? format.letterSpacing : 0)+'" kerning="'+((format.kerning) ? format.kerning : 0)+'">';
		if (format.bold) {
			htmlFormat += "<b>";
		}
		if (format.italic) {
			htmlFormat += "<i>";
		}
		if (format.underline) {
			htmlFormat += "<u>";
		}
		htmlFormat += input;
		if (format.underline) {
			htmlFormat += "</u>";
		}
		if (format.italic) {
			htmlFormat += "</i>";
		}
		if (format.bold) {
			htmlFormat += "</b>";
		}
		htmlFormat += "</font></p></textformat>";
		return htmlFormat;
	}
	/**
	 * @private
	 * helper method detects valid HTML tag.
	 * 
	 * @param i Number index of target character.
	 * @return Boolean value of valid HTML tag.
	 */
	private function validateHTMLTag(i:Number):Boolean {
		var htmlTAG:String = "";
		var v:Number = i+1;
		while (v<chars.length) {
			if (chars.charAt(v) == " " || chars.charAt(v) == ">") {
				break;
			} else {
				htmlTAG += chars.charAt(v);
			}
			v++;
		}
		var validHTMLTag:Boolean = false;
		for (v=0; v<htmlTags.length; v++) {
			if (htmlTAG.toLowerCase().indexOf(htmlTags[v].toLowerCase()) != -1) {
				validHTMLTag = true;
				break;
			}
		}
		return validHTMLTag;
	}
	/**
	 * @private
	 * helper method returns valid HTML Open tag.
	 * 
	 * @param i Number index of target character.
	 * @param input String value of original string.
	 * @return String value of valid HTML tag.
	 */
	private function getHTMLOpenTag(i:Number, input:String):String {
		var htmlTAG:String = "";
		var toggleHTML:Boolean = false;
		var v:Number = i;
		while (v<input.length) {
			if (toggleHTML) {
				if (input.charAt(v) == " " || input.charAt(v) == ">") {
					break;
				} else {
					htmlTAG += input.charAt(v);
				}
			}
			if (input.charAt(v) == "<" && input.charAt(v+1) != "/") {
				toggleHTML = true;
			}
			v++;
		}
		var validHTMLOpenTag:Boolean = false;
		for (v=0; v<htmlTags.length; v++) {
			if (htmlTAG.toLowerCase() == htmlTags[v].toLowerCase()) {
				validHTMLOpenTag = true;
				break;
			}
		}
		if (validHTMLOpenTag) {
			return htmlTAG;
		} else {
			return "";
		}
	}
	/**
	 * @private
	 * helper method detects valid Arabic characters or symbols.
	 * 
	 * @param i Number index of target character.
	 * @return Boolean value of valid Arabic character or symbols.
	 */
	private function validateArabic(i:Number):Boolean {
		var valid:Boolean = false;
		var code:Number = chars.charCodeAt(i);
		if (code >= 1536 && code <= 1791 || code >= 1872 && code <= 1919 || code >= 64336 && code <= 65023 || code >= 65136 && code <= 65279 || code == 8226) {
			valid = true;
		}
		return valid;
	}
	/**
	 * @private
	 * helper method detects valid symbols.
	 * 
	 * @param i Number index of target character.
	 * @param htmlOn Boolean if character resides in valid html tags.
	 * @return Boolean value of valid symbols.
	 */
	private function validateSymbol(i:Number, htmlOn:Boolean):Boolean {
		var valid:Boolean = false;
		var code:Number = chars.charCodeAt(i);
		if (code >= 33 && code <= 47 || code >= 58 && code <= 63 || code >= 123 && code <= 126) {
			// validate brackets symmetrical swapping
			var bidirectional:Object = validateBiDirectional(i, htmlOn);
			if (bidirectional.isBiDirectional || bidirectional.isArabic) {
				valid = true;
			}
		}
		return valid;
	}
	/**
	 * @private
	 * helper method detects bi-directional case.
	 * 
	 * @param i Number index of target character.
	 * @param htmlOn Boolean if character resides in valid html tags.
	 * @return Object values of bi-directional case.
	 */
	 private function validateBiDirectional(i:Number, htmlOn:Boolean):Object {
		var prevArabic:Boolean = false;
		var nextArabic:Boolean = false;
		var isBiDirectional:Boolean = false;
		var isArabic:Boolean = false;
		var htmlOff:Boolean = false;
		var v:Number;
		if (htmlOn) {
			if (i>0) {
				v = i-1;
				while (v>=0) {
					if (chars.charAt(v) == "<" && !htmlOff) {
						htmlOff = true;
					}
					if (chars.charAt(v) != " " && htmlOff) {
						if (validateArabic(v)) {
							prevArabic = true;
						}
						break;
					}
					v--;
				}
			}
			htmlOff = false;
			if (i<chars.length) {
				v = i+1;
				while (v<=chars.length) {
					if (chars.charAt(v) == ">" && !htmlOff) {
						htmlOff = true;
					}
					if (chars.charAt(v) != " " && htmlOff) {
						if (validateArabic(v)) {
							nextArabic = true;
						}
						break;
					}
					v++;
				}
			}
		} else {
			if (i>0) {
				v = i-1;
				while (v>=0) {
					if (chars.charAt(v) != " ") {
						if (validateArabic(v)) {
							prevArabic = true;
						}
						break;
					}
					v--;
				}
			}
			if (i<chars.length) {
				v = i+1;
				while (v<=chars.length) {
					if (chars.charAt(v) != " ") {
						if (validateArabic(v)) {
							nextArabic = true;
						}
						break;
					}
					v++;
				}
			}
		}
		if (!prevArabic && nextArabic || prevArabic && !nextArabic) {
			isBiDirectional = true;
		} else if (prevArabic && nextArabic) {
			isArabic = true;
		}
		return {isBiDirectional:isBiDirectional, isArabic:isArabic, prevArabic:prevArabic, nextArabic:nextArabic};
	 }
	/**
	 * @private
	 * symmetrical swapping to reserve bi-directional brackets
	 *
	 * @param char String value of target character.
	 * @param i Number index of target character.
	 * @return String value of new string with proper brackets
	 */
	private function symmetricalSwapping(char:String, i:Number):String {
		if (brackets.indexOf(char) != -1) {
			switch (char) {
				case "(":
				char = ")";
				break;
				case ")":
				char = "(";
				break;
				case "{":
				char = "}";
				break;
				case "}":
				char = "{";
				break;
				case "[":
				char = "]";
				break;
				case "]":
				char = "[";
				break;
				case "<":
				char = ">";
				break;
				case ">":
				char = "<";
				break;
			}
		}
		return char;
	}
	/**
	 * @private
	 * helper method detects line width for proper wrapping.
	 * 
	 * @param i Number index of target character.
	 * @param htmlOn Boolean if character resides in valid html tags.
	 * @return String value with reversed arabic characters.
	 */
	private function breakTextLine(i:Number, htmlOn:Boolean):Boolean {
		var isNewLine:Boolean = false;
		if (tag.multiline && chars.charAt(i) == " ") {
			var htmlOff:Boolean = false;
			var initHTML:String = tempData;
			var v:Number = i+1;
			while (v<chars.length) {
				initHTML += chars.charAt(v);
				if (htmlOn) {
					if (chars.charAt(v) == ">") {
						if (chars.charAt(v-5) == "<" && chars.charAt(v-4) == "b" && chars.charAt(v-3) == "r" && chars.charAt(v-2) == " " && chars.charAt(v-1) == "/") {
							isNewLine = true;
							break;
						}
						htmlOff = true;
					}
				} else {
					htmlOff = true;
				}
				if (chars.charAt(v) == " " && htmlOff) {
					break;
				}
				v++;
			}
			if (!isNewLine) {
				temp.htmlText = getHTMLFormat(initHTML);
				var measureLine:Boolean = false;
				if (isMAC) {
					var metrics:Object = format.getTextExtent(temp.text);
					if (metrics.width>=(tag._width*wrapFactor)-(format.leftMargin ? Number(format.leftMargin) : 0)-(format.rightMargin ? Number(format.rightMargin) : 0)) {
						measureLine = true;
					}
				} else {
					if (Math.ceil(temp._width)>=(tag._width*wrapFactor)-(format.leftMargin ? Number(format.leftMargin) : 0)-(format.rightMargin ? Number(format.rightMargin) : 0)) {
						measureLine = true;
					}
				}
				if (measureLine) {
					isNewLine = true;
				} else {
					temp.htmlText = getHTMLFormat(tempData);
				}
			}
		}
		return isNewLine;
	}
	/**
	 * @private
	 * helper method for proper HTML tags syntax.
	 * 
	 * @param index Number order of text line.
	 * @param lines Array value of multiline text block generated object.
	 */
	private function autoCompleteHTMLTags(index:Number, lines:Array) {
		if (index>0) {
			var prevLine:Array = lines[index-1];
			var currentLine:Array = lines[index];
			var openTag:String = "";
			var closeTag:String = "";
			var closeTags:Array = [];
			var toggleCloseTag:Boolean = false;
			var i:Number;
			var v:Number;
			for (i=0; i<currentLine.length; i++) {
				if (currentLine[i].html && currentLine[i].value.indexOf("</") != -1) {
					v = 0;
					while (v<currentLine[i].value.length) {
						if (currentLine[i].value.charAt(v-2) == "<" && currentLine[i].value.charAt(v-1) == "/") {
							toggleCloseTag = true;
							closeTag = "";
						}
						if (toggleCloseTag) {
							if (currentLine[i].value.charAt(v) == ">") {
								if (closeTag.length>0) {
									closeTags.push(closeTag.toLowerCase());
								}
								toggleCloseTag = false;
							} else {
								closeTag += currentLine[i].value.charAt(v);
							}
						}
						v++;
					}
				}
			}
			var openIndex:Number;
			var closeIndex:Number;
			var validCloseTags:Array = [];
			if (closeTags.length>0) {
				for (v=0; v<closeTags.length; v++) {
					openIndex = -1;
					for (i=0; i<currentLine.length; i++) {
						if (currentLine[i].html) {
							if (currentLine[i].value.indexOf("<"+closeTags[v]+" ") != -1) {
								openIndex = i;
							} else if (currentLine[i].value.indexOf("</"+closeTags[v]+">") != -1) {
								closeIndex = i;
							}
						}
					}
					if (openIndex == -1 || closeIndex<openIndex) {
						validCloseTags.push(closeTags[v]);
					}
				}
				if (validCloseTags.length>0) {
					var indexA:Number;
					var indexB:Number;
					var tempTag:Object;
					for (v=0; v<validCloseTags.length; v++) {
						for (i=prevLine.length-1; i>0; i--) {
							if (prevLine[i].html && prevLine[i].value.toLowerCase().indexOf("<"+validCloseTags[v]+" ") != -1) {
								indexA = prevLine[i].value.toLowerCase().lastIndexOf("<"+validCloseTags[v]+" ");
								indexB = indexA;
								while (indexB<prevLine[i].value.length) {
									if (prevLine[i].value.charAt(indexB) == ">") {
										break;
									}
									indexB++;
								}
								openTag = prevLine[i].value.substring(indexA, indexB+1);
							}
						}
						if (openTag.length>0) {
							if (prevLine[prevLine.length-1].html) {
								tempTag = prevLine.pop();
								tempTag.value += "</"+validCloseTags[v]+">";
							} else {
								tempTag = {arabic:false, html:true, value:"</"+validCloseTags[v]+">"};
							}
							prevLine.push(tempTag);
							if (currentLine[0].html) {
								tempTag = currentLine.shift();
								tempTag.value = openTag+tempTag.value;
							} else {
								tempTag = {arabic:false, html:true, value:openTag};
							}
							currentLine.unshift(tempTag);
						}
					}
				}
			}
		}
	}
	/**
	 * @private
	 * helper method for proper text line order in bi-directional case (only for embedded fonts).
	 * 
	 * @param line Array value of text line generated object.
	 * @return Array value of proper text line order.
	 */
	private function reorderTextLine(line:Array):Array {
		var elements:Array = [];
		var htmlElement:Array = [];
		var tempElements:Array = [];
		var tempElement:Object;
		var openTag:String = "";
		var toggleHTML:Boolean = false;
		var i:Number = 0;
		var v:Number = 0;
		var e:Number = 0;
		var index:Number = 0;
		while (i<line.length) {
			if (line[i].html) {
				if (openTag == "") {
					v = 0;
					while (v<line[i].value.length) {
						openTag = getHTMLOpenTag(v, line[i].value);
						if (openTag != "") {
							toggleHTML = true;
							break;
						}
						v++;
					}
				} else {
					v = 0;
					while (v<line[i].value.length) {
						if (line[i].value.indexOf("</"+openTag+">") != -1) {
							openTag = "";
							toggleHTML = false;
							break;
						}
						v++;
					}
				}
			}
			if (toggleHTML) {
				htmlElement.push(line[i]);
			} else {
				if (htmlElement.length>0) {
					htmlElement.push(line[i]);
					for (v=0; v<htmlElement.length; v++) {
						if (!htmlElement[v].html) {
							tempElements.push(htmlElement[v]);
						}
					}
					tempElements.reverse();
					index = 0;
					for (v=0; v<htmlElement.length; v++) {
						if (!htmlElement[v].html) {
							htmlElement.splice(v, 1, tempElements[index]);
							index++;
						}
					}
					tempElements = [];
					elements.push(htmlElement);
					htmlElement = [];
				} else {
					elements.push([line[i]]);
				}
			}
			i++;
		}
		elements.reverse();
		var newLine:Array = [];
		for (i=0; i<elements.length; i++) {
			for (v=0; v<elements[i].length; v++) {
				newLine.push(elements[i][v]);
			}
		}
		return newLine;
	}
	/**
	 * @private
	 * helper method to reverse only arabic characters for proper right to left order.
	 * 
	 * @param input String value of original arabic string with HTML tags stripped out.
	 * @param tag TextField target html enabled textfield.
	 * @return String value with reversed arabic characters.
	 */
	private function reverseChars(input:String):String {
		var chars:Array = input.split("");
		if (!isMAC || tag.embedFonts && isMAC) {
			chars.reverse();
		}
		return chars.join("");
	}
	/**
	 * @private
	 * helper method replaces HTML line breaks into proper tags.
	 * 
	 * @param input String value of HTML string.
	 * @return String value of new HTML string.
	 */
	private function properHTMLLines(input:String):String {
		if (tag.multiline) {
			if (input.indexOf("<BR />") != -1) {
				input = input.split("<BR />").join("<br />");
			}
			if (input.indexOf("<bR />") != -1) {
				input = input.split("<bR />").join("<br />");
			}
			if (input.indexOf("<Br />") != -1) {
				return input.split("<Br />").join("<br />");
			}
			if (input.indexOf("<BR>") != -1) {
				input = input.split("<BR>").join("<br />");
			}
			if (input.indexOf("<br>") != -1) {
				input = input.split("<br>").join("<br />");
			}
			if (input.indexOf("<bR>") != -1) {
				input = input.split("<bR>").join("<br />");
			}
			if (input.indexOf("<Br>") != -1) {
				input = input.split("<Br>").join("<br />");
			}
		}
		return input;
	}
	/**
	 * @private
	 * helper method splits HTML bullet list.
	 * 
	 * @param input String value of HTML string.
	 * @return String value of new HTML string.
	 */
	private function splitBulletList(input:String):String {
		if (tag.multiline) {
			if (input.indexOf("<UL>") != -1) {
				input = input.split("<UL>").join("");
			}
			if (input.indexOf("<Ul>") != -1) {
				input = input.split("<Ul>").join("");
			}
			if (input.indexOf("<uL>") != -1) {
				input = input.split("<uL>").join("");
			}
			if (input.indexOf("<ul>") != -1) {
				input = input.split("<ul>").join("");
			}
			if (input.indexOf("</UL>") != -1) {
				input = input.split("</UL>").join("<br />");
			}
			if (input.indexOf("</Ul>") != -1) {
				input = input.split("</Ul>").join("<br />");
			}
			if (input.indexOf("</uL>") != -1) {
				input = input.split("</uL>").join("<br />");
			}
			if (input.indexOf("</ul>") != -1) {
				input = input.split("</ul>").join("<br />");
			}
			if (input.indexOf("<LI>") != -1) {
				input = input.split("<LI>").join("<br /> • ");
			}
			if (input.indexOf("<Li>") != -1) {
				input = input.split("<Li>").join("<br /> • ");
			}
			if (input.indexOf("<lI>") != -1) {
				input = input.split("<lI>").join("<br /> • ");
			}
			if (input.indexOf("<li>") != -1) {
				input = input.split("<li>").join("<br /> • ");
			}
			if (input.indexOf("</LI>") != -1) {
				input = input.split("</LI>").join(" ");
			}
			if (input.indexOf("</Li>") != -1) {
				input = input.split("</Li>").join(" ");
			}
			if (input.indexOf("</lI>") != -1) {
				input = input.split("</lI>").join(" ");
			}
			if (input.indexOf("</li>") != -1) {
				input = input.split("</li>").join(" ");
			}
		}
		return input;
	}
	/**
	 * @private
	 * helper method detects valid Arabic only characters.
	 * 
	 * @param i Number index of target character.
	 * @return Boolean value of valid Arabic only character.
	 */
	private function validateArabicChar(i:Number):Boolean {
		var valid:Boolean = false;
		var code:Number = chars.charCodeAt(i);
		if (code >= 1570 && code <= 1594 || code >= 1601 && code <= 1610 || code >= 65154 && code <= 65276) {
			valid = true;
		}
		return valid;
	}
	/**
	 * @private
	 * uses unicode character codes to get proper arabic characters with various cases.
	 * 
	 * @param chars String containing original text.
	 * @param i Number index of target character.
	 * @return String value with correct arabic character.
	 */
	private function getCharState(i:Number):String {
		var string:String;
		switch (chars.charAt(i)) {
			case "ا":
			string = setChar(i, String.fromCharCode(0x0627), String.fromCharCode(0x0627), String.fromCharCode(0xFE8E), String.fromCharCode(0xFE8E));
			break;
			case "أ":
			string = setChar(i, String.fromCharCode(0x0623), String.fromCharCode(0x0623), String.fromCharCode(0xFE84), String.fromCharCode(0xFE84));
			break;
			case "إ":
			string = setChar(i, String.fromCharCode(0x0625), String.fromCharCode(0x0625), String.fromCharCode(0xFE88), String.fromCharCode(0xFE88));
			break;
			case "آ":
			string = setChar(i, String.fromCharCode(0x0622), String.fromCharCode(0x0622), String.fromCharCode(0xFE82), String.fromCharCode(0xFE82));
			break;
			case "ب":
			string = setChar(i, String.fromCharCode(0x0628), String.fromCharCode(0xFE91), String.fromCharCode(0xFE92), String.fromCharCode(0xFE90));
			break;
			case "ت":
			string = setChar(i, String.fromCharCode(0x062A), String.fromCharCode(0xFE97), String.fromCharCode(0xFE98), String.fromCharCode(0xFE96));
			break;
			case "ث":
			string = setChar(i, String.fromCharCode(0x062B), String.fromCharCode(0xFE9B), String.fromCharCode(0xFE9C), String.fromCharCode(0xFE9A));
			break;
			case "ج":
			string = setChar(i, String.fromCharCode(0x062C), String.fromCharCode(0xFE9F), String.fromCharCode(0xFEA0), String.fromCharCode(0xFE9E));
			break;
			case "ح":
			string = setChar(i, String.fromCharCode(0x062D), String.fromCharCode(0xFEA3), String.fromCharCode(0xFEA4), String.fromCharCode(0xFEA2));
			break;
			case "خ":
			string = setChar(i, String.fromCharCode(0x062E), String.fromCharCode(0xFEA7), String.fromCharCode(0xFEA8), String.fromCharCode(0xFEA6));
			break;
			case "د":
			string = setChar(i, String.fromCharCode(0x062F), String.fromCharCode(0x062F), String.fromCharCode(0xFEAA), String.fromCharCode(0xFEAA));
			break;
			case "ذ":
			string = setChar(i, String.fromCharCode(0x0630), String.fromCharCode(0x0630), String.fromCharCode(0xFEAC), String.fromCharCode(0xFEAC));
			break;
			case "ر":
			string = setChar(i, String.fromCharCode(0x0631), String.fromCharCode(0x0631), String.fromCharCode(0xFEAE), String.fromCharCode(0xFEAE));
			break;
			case "ز":
			string = setChar(i, String.fromCharCode(0x0632), String.fromCharCode(0x0632), String.fromCharCode(0xFEB0), String.fromCharCode(0xFEB0));
			break;
			case "س":
			string = setChar(i, String.fromCharCode(0x0633), String.fromCharCode(0xFEB3), String.fromCharCode(0xFEB4), String.fromCharCode(0xFEB2));
			break;
			case "ش":
			string = setChar(i, String.fromCharCode(0x0634), String.fromCharCode(0xFEB7), String.fromCharCode(0xFEB8), String.fromCharCode(0xFEB6));
			break;
			case "ص":
			string = setChar(i, String.fromCharCode(0x0635), String.fromCharCode(0xFEBB), String.fromCharCode(0xFEBC), String.fromCharCode(0xFEBA));
			break;
			case "ض":
			string = setChar(i, String.fromCharCode(0x0636), String.fromCharCode(0xFEBF), String.fromCharCode(0xFEC0), String.fromCharCode(0xFEBE));
			break;
			case "ط":
			string = setChar(i, String.fromCharCode(0x0637), String.fromCharCode(0xFEC3), String.fromCharCode(0xFEC4), String.fromCharCode(0xFEC2));
			break;
			case "ظ":
			string = setChar(i, String.fromCharCode(0x0638), String.fromCharCode(0xFEC7), String.fromCharCode(0xFEC8), String.fromCharCode(0xFEC6));
			break;
			case "ع":
			string = setChar(i, String.fromCharCode(0x0639), String.fromCharCode(0xFECB), String.fromCharCode(0xFECC), String.fromCharCode(0xFECA));
			break;
			case "غ":
			string = setChar(i, String.fromCharCode(0x063A), String.fromCharCode(0xFECF), String.fromCharCode(0xFED0), String.fromCharCode(0xFECE));
			break;
			case "ف":
			string = setChar(i, String.fromCharCode(0x0641), String.fromCharCode(0xFED3), String.fromCharCode(0xFED4), String.fromCharCode(0xFED2));
			break;
			case "ق":
			string = setChar(i, String.fromCharCode(0x0642), String.fromCharCode(0xFED7), String.fromCharCode(0xFED8), String.fromCharCode(0xFED6));
			break;
			case "ك":
			string = setChar(i, String.fromCharCode(0x0643), String.fromCharCode(0xFEDB), String.fromCharCode(0xFEDC), String.fromCharCode(0xFEDA));
			break;
			case "ل":
			string = setChar(i, String.fromCharCode(0x0644), String.fromCharCode(0xFEDF), String.fromCharCode(0xFEE0), String.fromCharCode(0xFEDE));
			break;
			case "م":
			string = setChar(i, String.fromCharCode(0x0645), String.fromCharCode(0xFEE3), String.fromCharCode(0xFEE4), String.fromCharCode(0xFEE2));
			break;
			case "ن":
			string = setChar(i, String.fromCharCode(0x0646), String.fromCharCode(0xFEE7), String.fromCharCode(0xFEE8), String.fromCharCode(0xFEE6));
			break;
			case "ه":
			string = setChar(i, String.fromCharCode(0x0647), String.fromCharCode(0xFEEB), String.fromCharCode(0xFEEC), String.fromCharCode(0xFEEA));
			break;
			case "ة":
			string = setChar(i, String.fromCharCode(0x0629), "", "", String.fromCharCode(0xFE94));
			break;
			case "و":
			string = setChar(i, String.fromCharCode(0x0648), String.fromCharCode(0x0648), String.fromCharCode(0xFEEE), String.fromCharCode(0xFEEE));
			break;
			case "ؤ":
			string = setChar(i, String.fromCharCode(0x0624), String.fromCharCode(0x0624), String.fromCharCode(0xFE86), String.fromCharCode(0xFE86));
			break;
			case "ى":
			string = setChar(i, String.fromCharCode(0x0649), String.fromCharCode(0x0649), String.fromCharCode(0xFEF0), String.fromCharCode(0xFEF0));
			break;
			case "ي":
			string = setChar(i, String.fromCharCode(0x064A), String.fromCharCode(0xFEF3), String.fromCharCode(0xFEF4), String.fromCharCode(0xFEF2));
			break;
			case "ئ":
			string = setChar(i, String.fromCharCode(0x0626), String.fromCharCode(0xFE8B), String.fromCharCode(0xFE8C), String.fromCharCode(0xFE8A));
			break;
			case "ء":
			string = String.fromCharCode(0x0621);
			break;
			case "ـ":
			string = String.fromCharCode(0x0640);
			break;
			case "?":
			string = String.fromCharCode(0x061F);
			break;
			case ",":
			string = String.fromCharCode(0x060C);
			break;
			case ";":
			string = String.fromCharCode(0x061B);
			break;
			case "%":
			string = String.fromCharCode(0x066A);
			break;
			default:
			string = chars.charAt(i);
			break;
		}
		return string;
	}
	/**
	 * @private
	 * detects special cases for arabic ligatures.
	 * 
	 * @param chars String containing original text.
	 * @param i Number index of target character.
	 * @param solo String arabic character without joints.
	 * @param begin String arabic character with a trailing joint.
	 * @param middle String arabic character with both joint.
	 * @param end String arabic character with an initial joint.
	 * @return String value with correct arabic character.
	 */
	private function setChar(i:Number, solo:String, begin:String, middle:String, end:String):String {
		var string:String = "";
		// detect lam-alef (ﻻ) cases
		if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "ا") {
			if (validateArabicChar(i-1) && specialChars.indexOf(chars.charAt(i-1)) == -1) {
				string = String.fromCharCode(0xFEFC);
			} else {
				string = String.fromCharCode(0xFEFB);
			}
			chars = chars.substring(0, i)+string+chars.substring(i+2, chars.length);
		} else if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "أ") {
			if (validateArabicChar(i-1) && specialChars.indexOf(chars.charAt(i-1)) == -1) {
				string = String.fromCharCode(0xFEF8);
			} else {
				string = String.fromCharCode(0xFEF7);
			}
			chars = chars.substring(0, i)+string+chars.substring(i+2, chars.length);
		} else if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "إ") {
			if (validateArabicChar(i-1) && specialChars.indexOf(chars.charAt(i-1)) == -1) {
				string = String.fromCharCode(0xFEFA);
			} else {
				string = String.fromCharCode(0xFEF9);
			}
			chars = chars.substring(0, i)+string+chars.substring(i+2, chars.length);
		} else if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "آ") {
			if (validateArabicChar(i-1) && specialChars.indexOf(chars.charAt(i-1)) == -1) {
				string = String.fromCharCode(0xFEF6);
			} else {
				string = String.fromCharCode(0xFEF5);
			}
			chars = chars.substring(0, i)+string+chars.substring(i+2, chars.length);
		} else {
			// check for arabic character position in word (solo, begin, middle, end)
			if (i == 0) {
				if (specialChars.indexOf(chars.charAt(i)) != -1) {
					string = solo;
				} else {
					string = begin;
				}
			} else if (i == chars.length-1) {
				if (specialChars.indexOf(chars.charAt(i-1)) != -1) {
					string = solo;
				} else {
					string = end;
				}
			} else if (validateArabicChar(i-1) && validateArabicChar(i+1)) {
				if (specialChars.indexOf(chars.charAt(i-1)) != -1) {
					if (specialChars.indexOf(chars.charAt(i)) != -1) {
						string = solo;
					} else {
						string = begin;
					}
				} else {
					if (specialChars.indexOf(chars.charAt(i)) != -1 || chars.charAt(i+1) == "ء" || chars.charAt(i) == "ة") {
						if (chars.charAt(i-1) != "ة") {
							string = end;
						} else {
							string = begin;
						}
					} else {
						if (chars.charAt(i-1) != "ة") {
							string = middle;
						} else {
							string = begin;
						}
					}
				}
			} else {
				if (validateArabicChar(i-1) && !validateArabicChar(i+1)) {
					if (specialChars.indexOf(chars.charAt(i-1)) != -1) {
						string = solo;
					} else {
						string = end;
					}
				} else if (!validateArabicChar(i-1) && validateArabicChar(i+1)) {
					if (specialChars.indexOf(chars.charAt(i)) != -1) {
						string = solo;
					} else {
						string = begin;
					}
				} else if (!validateArabicChar(i-1) && !validateArabicChar(i+1)) {
					string = solo;
				}
			}
		}
		return string;
	}
	/**
	 * @private
	 * remove diacritics from arabic characters.
	 *
	 * @return String containing spliced characters without diacritics.
	 */
	 private function stripDiacritics():String {
		var string:String = "";
		var i:Number = 0;
		while (i<chars.length) {
			// arabic diacritics range from charcode 1611 and 1618
			if (chars.charCodeAt(i)<1611 || chars.charCodeAt(i)>1618) {
				string += chars.charAt(i);
			}
			i++;
		}
		return string;
	 }
	 /**
	 * @public
	 * creates proper arabic input field.
	 * 
	 * @param flashID String swf object id in HTML document.
	 * @param inputID String generated HTML input id.
	 * @param field TextField target text input in flash.
	 */
	public function createArabicInput(flashID:String, inputID:String, field:TextField):Void {
		tag = field;
		var point:Object = {x:tag._x, y:tag._y};
		tag._parent.localToGlobal(point);
		ExternalInterface.call("createArabicInput", flashID, inputID, "", point.x, point.y, tag._width, tag._height, "multiline");
	}
	/**
	* @public
	* convert numeric characters
	* 
	* @param input Number numbers to be converted
	* @return String converted numbers
	*/
	public function convertNumbers(input:Number):String {
		var string:String = "";
		var i:Number = 0;
		while (i<String(input).length) {
			switch (String(input).charAt(i)) {
				case "0":
				string += String.fromCharCode(0x0660);
				break;
				case "1":
				string += String.fromCharCode(0x0661);
				break;
				case "2":
				string += String.fromCharCode(0x0662);
				break;
				case "3":
				string += String.fromCharCode(0x0663);
				break;
				case "4":
				string += String.fromCharCode(0x0664);
				break;
				case "5":
				string += String.fromCharCode(0x0665);
				break;
				case "6":
				string += String.fromCharCode(0x0666);
				break;
				case "7":
				string += String.fromCharCode(0x0667);
				break;
				case "8":
				string += String.fromCharCode(0x0668);
				break;
				case "9":
				string += String.fromCharCode(0x0669);
				break;
			}
			i++;
		}
		return string;
	}
}