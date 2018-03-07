/*!
 * jQuery JavaScript Library v1.0.0
 * http://jquery.com/
 *
 * Includes jquery.datepick.js
 * http://keith-wood.name/datepick.html
 *
 * Copyright 2013, Internet Consulting
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-10-08T07:00Z
 */
/* Date Range Picker - a Google-Analytics-like Date picker for date ranges based on Keith Wood's Datepick v4.1.0. */

(function ($, window, document, undefined) {
    $.widget("inetcons.RangeDatepick", {
        options: {
            maxMonthsToShow: 2,
            //minDate: new Date(),
            yearRange: 'c+0:c+2'
        },
        _create: function () {
            this.options._inputFrom = $(this.options.inputFrom);
            this.options._inputTo = $(this.options.inputTo);
            this._panel = $("<div>").addClass("daterangepickpanel").append($("<div>").addClass("daterangepickpanel-cal"));
            this._panel.appendTo($('body'));
            return this;
        },
        _init: function () {
            this._bind();
            this._initCal();
        },
        _destroy: function () {
            // Use the destroy method to reverse everything your plugin has applied
            return this._super();
        },
        _bind: function () {
            var that = this;
            $(window).resize(function () {
                that._onWindowResize();
                //if (that._panel.is(':visible')) {
                //    var inst = that._findDatepickInstance();
                //    if (inst) {
                //        that._resize(inst);
                //        that._reposition();
                //    }
                //}
            });
            //$(this.options.inputFrom).bind('change', function() {
            //    that._findDatepickInstance().datepick('setDate', new Date(Date.parse(that.options._inputFrom.val())), new Date(Date.parse(that.options._inputTo.val())));
            //});
            $(this.options.inputFrom).bind('focus click', function (e) {
                that._calWrapShow(1);
            });
            //$(this.options.inputTo).bind('change', function() {
            //    that._findDatepickInstance().datepick('setDate', new Date(Date.parse(that.options._inputFrom.val())), new Date(Date.parse(that.options._inputTo.val())));
            //});
            $(this.options.inputTo).bind('focus click', function () {
                that._calWrapShow(2);
            });
            $('.daterangepickpanel').on('click', '.datepick-cmd-close', function () {
                that._calWrapShow(3);
            });
            $(document).mousedown(function (event) {
                var inst = that._findDatepickInstance();
                if (!inst) {
                    return;
                }
                var target = $(event.target);
                if (!target.parents().andSelf().hasClass('daterangepick')
                    && target[0] != that.options._inputFrom[0]
                    && target[0] != that.options._inputTo[0]) {
                    that._calWrapShow(3);
                }
            });
        },
        _initCal: function () {
            var that = this;
            var options = this.options.lang ? $.datepick.regional[this.options.lang] : {};
            options = $.extend(options, {
                prevText: '◀',
                nextText: '▶',
                yearRange: this.options.yearRange,
                pickerClass: 'daterangepick',
                rangeSelect: true,
                showOnFocus: false,
                monthsToShow: this._datepickMonthsToShow(),
                minDate: this.options.minDate,
                maxDate: this.options.maxDate,
                onShow: function (picker, inst) {
                    picker.find(inst.options.renderer.daySelector + ' a').hover(
                        function () {
                            that._highlight(picker, inst, this);
                        });
                },
                renderer: $.extend({}, $.datepick.defaultRenderer,
                    {
                        picker: $.datepick.defaultRenderer.picker.
                            replace(/\{link:today\}/, '').
                            replace(/\{popup:start\}/, '{inline:start}').
                            replace(/\{popup:end\}/, '{inline:end}').
                            replace(/\{link:clear\}/, '{link:today}')
                        //replace(/\{link:close\}/, '<a class="datepick-cmd datepick-cmd-close2">XXX</a>')
                        //replace(/\{link:clear\}\{link:close\}/, '{link:clear}{link:today}{link:close}')
                    })
            }
            );
            that._panel.find('.daterangepickpanel-cal').datepick(options);
            var dates = [that.options._inputFrom.val(), that.options._inputTo.val()];
            that._panel.find('.daterangepickpanel-cal').datepick('setDate', dates);
            that._panel.find('.daterangepickpanel-cal').datepick('option', 'onSelect', function (dates) {
                if (dates[0] == undefined) {
                    return;
                }
                if (dates[1] == dates[0]) {
                    $(that.options.inputFrom).val($.datepick.formatDate(that._findDatepickInstance().options.dateFormat, dates[0]));
                    $(that.options.inputTo).focus();
                } else if (dates[1] > dates[0]) {
                    $(that.options.inputTo).val($.datepick.formatDate(that._findDatepickInstance().options.dateFormat, dates[1]));
                    that._calWrapShow(3);
                }
            });
            that._panel.find('.daterangepickpanel-cal').hover(null, function () {
                var inst = that._findDatepickInstance();
                that._highlight(that._panel.find('.daterangepickpanel-cal'), inst);
            });
        }/*_initCal*/,
        _highlight: function (picker, inst, element) {
            var dates = inst.selectedDates;
            if (dates[0] === undefined) return;
            var start = new Date(dates[0].valueOf());
            var end;
            if (element !== undefined) {
                end = new Date(parseInt(element.className.match(/dp[0-9]+/)[0].substr(2)));
                if (!inst.pickingRange) return;
            } else {
                end = new Date(dates[1].valueOf());
            }
            if (start <= end) {
                picker.find('.datepick-month .datepick-selected').removeClass('datepick-selected');
            }
            while (start <= end) {
                var className = "dp" + start.valueOf();
                picker.find('a.' + className + ':not([class*=datepick-selected])').addClass('datepick-selected');
                start = new Date(start.setDate(start.getDate() + 1));
            }
        },
        _onWindowResize: function () {
            if (this._panel.is(':visible')) {
                var inst = this._findDatepickInstance();
                if (inst) {
                    this._resize(inst);
                    this._reposition();
                }
            }
        },
        _resize: function (inst) {
            //if (inst) {
            var monthsToShow = this._datepickMonthsToShow();
            if (inst.options.monthsToShow != monthsToShow) {
                var pickingRange = inst.pickingRange;
                this._panel.find('.daterangepickpanel-cal').datepick('option', 'monthsToShow', monthsToShow);
                //$('.daterangepickpanel-cal').datepick('option', 'monthsToShow', monthsToShow);
                inst.pickingRange = pickingRange;
                var widthOfDayCell = 30;
                var paddingMonth = 10;
                var width = widthOfDayCell * 7 * monthsToShow + paddingMonth * (monthsToShow - 1);
                this._panel.width(width);
                //$('.daterangepickpanel').width(width);
            }
            //this._datepickerShow();
            //}
        },
        _reposition: function () {
            var left = $(this.options.inputFrom).offset().left;
            var windowOuterWidth = $(window).outerWidth();
            if (windowOuterWidth <= 320) {
                left = 0;
                this._panel.width('');
                this._panel.addClass('fullwidth');
            } else {
                this._panel.removeClass('fullwidth');
            }
            var top = $(this.options.inputTo).offset().top;
            var outerHeight = $(this.options.inputFrom).outerHeight();
            var panelHeight = this._panel.height();
            if ((top - $(window).scrollTop()) + panelHeight >= $(window).height() && (top - $(window).scrollTop()) - panelHeight <= $(window).height() && (top - $(window).scrollTop()) >= panelHeight) {
                return this._panel
                .css('top', top - panelHeight - outerHeight - 8) // 8px padding top
                .css('left', left);
            }

            return this._panel
                .css('top', top + outerHeight)
                .css('left', left);
            //.show();
        },
        _calWrapShow: function (step) {
            if (this._panel.is(':visible')) {
                if (this._activeStep == step) {
                    return;
                } else {
                    this._activeStep = step;
                }
            } else {
                // Wird das nichts gemacht wird der Datepicker mit größeren Formularen spinnen weil er bei jedem Click den focus auf elementToFocusOnClose setzen will
                if (step == 3) {
                    return;
                }
            }

           
            var inst = this._findDatepickInstance();
            switch (step) {
                case 1:
                    $(this.options.inputFrom).addClass('edpActive');
                    $(this.options.inputTo).removeClass('edpActive');
                    if (inst) {
                        inst.pickingRange = false;
                        this._resize(inst);
                    }
                    this._reposition().show();
                    break;
                case 2:
                    $(this.options.inputFrom).removeClass('edpActive');
                    $(this.options.inputTo).addClass('edpActive');
                    if (inst) {
                        inst.pickingRange = true;
                        this._resize(inst);
                    }
                    this._reposition().show();

                    // Setze InputTo wenn es kleiner ist als inputFrom auf inputFrom + 1 day
                    var dates = this._panel.find('.daterangepickpanel-cal').datepick("getDate");
                    var dateFrom =  $.datepick.parseDate(this._findDatepickInstance().options.dateFormat, $(this.options.inputFrom).val());
                    var dateTo =  $.datepick.parseDate(this._findDatepickInstance().options.dateFormat, $(this.options.inputTo).val());

                    if(dateFrom > dateTo){
                        dateFrom.setDate(dateFrom.getDate()+1);
                        $(this.options.inputTo).val($.datepick.formatDate(this._findDatepickInstance().options.dateFormat, dateFrom));
                    }

                    break;
                case 3:
                    $(this.options.inputFrom).removeClass('edpActive');
                    $(this.options.inputTo).removeClass('edpActive');
                    $('.daterangepickpanel').hide();
                    if (this.options.elementToFocusOnClose != undefined) {
                        $(this.options.elementToFocusOnClose).focus();
                    }
                    break;
            }
        },
        _datepickMonthsToShow: function () {
            var left = $(this.options.inputFrom).offset().left;
            var widthOfDayCell = 30;
            var paddingMonth = 10;
            var paddingLeft = 10;
            var paddingRight = 10;
            var marginRight = 40;
            var months = 1;
            while (true) {
                var rightOffset = left + paddingLeft + paddingRight + marginRight + widthOfDayCell * 7 * months + paddingMonth * (months - 1);
                if (rightOffset >= $(window).outerWidth()) {
                    break;
                }
                months++;
            }
            return months <= 1 ? 1 : months > this.options.maxMonthsToShow ? this.options.maxMonthsToShow : months - 1;
        },
        _findDatepickInstance: function () {
            var inst = this._panel.find('.daterangepickpanel-cal').data($.datepick.propertyName);
            return inst;
        }
    });
})(jQuery, window, document);