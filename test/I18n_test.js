/**
 * Created by baukh on 17/3/5.
 */
'use strict';
var GridManager = require('../src/js/GridManager').default;
var I18N = require('../src/js/I18n').default;
var jTool = require('../src/js/jTool').default;
describe('I18n', function() {
	let table_en = null;
	let $table_en = null;
	let table_cn = null;
	let $table_cn = null;

	// 注: 每个it 都会将 beforeEach 及 afterEach 中的内容执行一次
	beforeEach(function(){
		// 第一组设置为en-us
		table_en = document.createElement('table');
		table_en.setAttribute('grid-manager', 'test-i18n-en');
		document.querySelector('body').appendChild(table_en);
		$table_en = jTool('table[grid-manager="test-i18n-en"]');
		document.querySelector('table[grid-manager="test-i18n-en"]').GM({
			ajax_url: 'http://www.lovejavascript.com/learnLinkManager/getLearnLinkList'
			,disableCache: true
			,i18n: 'en-us'
			,columnData: [
				{
					key: 'name',
					remind: 'the name',
					width: '100px',
					text: '名称',
					sorting: 'up'
				}
			]
		});

		//第二组使用默认的zh-cn
		table_cn = document.createElement('table');
		table_cn.setAttribute('grid-manager', 'test-i18n-cn');
		document.querySelector('body').appendChild(table_cn);
		$table_cn = jTool('table[grid-manager="test-i18n-cn"]');
		document.querySelector('table[grid-manager="test-i18n-cn"]').GM({
			ajax_url: 'http://www.lovejavascript.com/learnLinkManager/getLearnLinkList'
			,disableCache: true
			,columnData: [
				{
					key: 'name',
					remind: 'the name',
					width: '100px',
					text: '名称',
					sorting: 'up'
				}
			]
		});
	});
	afterEach(function () {
		document.querySelector('body').innerHTML = '';
		table_en = null;
		table_cn = null;
		$table_en = null;
		$table_cn = null;
	});

	it('验证使用语言', function() {
		expect( I18N.getLanguage($table_en) ).toBe('en-us');
		expect( I18N.getLanguage($table_cn) ).toBe('zh-cn');
	});

	it('验证文本内容', function() {
		// 序号
		expect( I18N.i18nText($table_en, 'order-text') ).toBe('order');
		expect( I18N.i18nText($table_cn, 'order-text') ).toBe('序号');

		// 首页
		expect( I18N.i18nText($table_en, 'first-page') ).toBe('first');
		expect( I18N.i18nText($table_cn, 'first-page') ).toBe('首页');

		// 上一页
		expect( I18N.i18nText($table_en, 'previous-page') ).toBe('previous');
		expect( I18N.i18nText($table_cn, 'previous-page') ).toBe('上一页');

		// 下一页
		expect( I18N.i18nText($table_en, 'next-page') ).toBe('next');
		expect( I18N.i18nText($table_cn, 'next-page') ).toBe('下一页');

		// 尾页
		expect( I18N.i18nText($table_en, 'last-page') ).toBe('last');
		expect( I18N.i18nText($table_cn, 'last-page') ).toBe('尾页');

		// 显示条数
		expect( I18N.i18nText($table_en, 'dataTablesInfo', [1, 10, 20]) ).toBe('this page show 1-10 count 20');
		expect( I18N.i18nText($table_cn, 'dataTablesInfo', [1, 10, 20]) ).toBe('此页显示 1-10 共20条');

		// 跳转至
		expect( I18N.i18nText($table_en, 'goto-first-text') ).toBe('goto');
		expect( I18N.i18nText($table_cn, 'goto-first-text') ).toBe('跳转至');

		// 页
		expect( I18N.i18nText($table_en, 'goto-last-text') ).toBe('page');
		expect( I18N.i18nText($table_cn, 'goto-last-text') ).toBe('页');

		// 重新加载
		expect( I18N.i18nText($table_en, 'refresh') ).toBe('Refresh');
		expect( I18N.i18nText($table_cn, 'refresh') ).toBe('重新加载');

		// 另存为Excel
		expect( I18N.i18nText($table_en, 'save-as-excel') ).toBe('Save as Excel');
		expect( I18N.i18nText($table_cn, 'save-as-excel') ).toBe('另存为Excel');

		// 已选中项另存为Excel
		expect( I18N.i18nText($table_en, 'save-as-excel-for-checked') ).toBe('Save selected as Excel');
		expect( I18N.i18nText($table_cn, 'save-as-excel-for-checked') ).toBe('已选中项另存为Excel');

		// 配置表
		expect( I18N.i18nText($table_en, 'setting-grid') ).toBe('Setting Grid');
		expect( I18N.i18nText($table_cn, 'setting-grid') ).toBe('配置表');

		// 全选
		expect( I18N.i18nText($table_en, 'checkall-text') ).toBe('All');
		expect( I18N.i18nText($table_cn, 'checkall-text') ).toBe('全选');
	});
});
