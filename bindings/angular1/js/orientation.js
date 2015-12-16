/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

/**
 * @ngdoc object
 * @name ons.orientation
 * @category util
 * @description 
 *   [en]Utility methods for orientation detection.[/en]
 *   [ja]画面のオリエンテーション検知のためのユーティリティメソッドを収めているオブジェクトです。[/ja]
 */

/**
 * @ngdoc event
 * @name change
 * @description
 *   [en]Fired when the device orientation changes.[/en]
 *   [ja]デバイスのオリエンテーションが変化した際に発火します。[/ja]
 * @param {Object} event
 *   [en]Event object.[/en]
 *   [ja]イベントオブジェクトです。[/ja]
 * @param {Boolean} event.isPortrait
 *   [en]Will be true if the current orientation is portrait mode.[/en]
 *   [ja]現在のオリエンテーションがportraitの場合にtrueを返します。[/ja]
 */

/**
 * @ngdoc method
 * @signature isPortrait()
 * @return {Boolean}
 *   [en]Will be true if the current orientation is portrait mode.[/en]
 *   [ja]オリエンテーションがportraitモードの場合にtrueになります。[/ja]
 * @description 
 *   [en]Returns whether the current screen orientation is portrait or not.[/en]
 *   [ja]オリエンテーションがportraitモードかどうかを返します。[/ja]
 */

/**
 * @ngdoc method
 * @signature isLandscape()
 * @return {Boolean}
 *   [en]Will be true if the current orientation is landscape mode.[/en]
 *   [ja]オリエンテーションがlandscapeモードの場合にtrueになります。[/ja]
 * @description 
 *   [en]Returns whether the current screen orientation is landscape or not.[/en]
 *   [ja]オリエンテーションがlandscapeモードかどうかを返します。[/ja]
 */

/**
 * @ngdoc method
 * @signature on(eventName, listener)
 * @description
 *   [en]Add an event listener.[/en]
 *   [ja]イベントリスナーを追加します。[/ja]
 * @param {String} eventName
 *   [en]Name of the event.[/en]
 *   [ja]イベント名を指定します。[/ja]
 * @param {Function} listener
 *   [en]Function to execute when the event is triggered.[/en]
 *   [ja]このイベントが発火された際に呼び出される関数オブジェクトを指定します。[/ja]
 */

/**
 * @ngdoc method
 * @signature once(eventName, listener)
 * @description
 *  [en]Add an event listener that's only triggered once.[/en]
 *  [ja]一度だけ呼び出されるイベントリスナーを追加します。[/ja]
 * @param {String} eventName
 *   [en]Name of the event.[/en]
 *   [ja]イベント名を指定します。[/ja]
 * @param {Function} listener
 *   [en]Function to execute when the event is triggered.[/en]
 *   [ja]イベントが発火した際に呼び出される関数オブジェクトを指定します。[/ja]
 */

/**
 * @ngdoc method
 * @signature off(eventName, [listener])
 * @description
 *  [en]Remove an event listener. If the listener is not specified all listeners for the event type will be removed.[/en]
 *  [ja]イベントリスナーを削除します。もしイベントリスナーを指定しなかった場合には、そのイベントに紐づく全てのイベントリスナーが削除されます。[/ja]
 * @param {String} eventName
 *   [en]Name of the event.[/en]
 *   [ja]イベント名を指定します。[/ja]
 * @param {Function} listener
 *   [en]Function to execute when the event is triggered.[/en]
 *   [ja]削除するイベントリスナーを指定します。[/ja]
 */