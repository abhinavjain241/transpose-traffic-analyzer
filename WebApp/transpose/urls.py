
from django.conf.urls import patterns,url
from django.views.generic import TemplateView

from transpose import views

urlpatterns = patterns('',
                url(r'^$',TemplateView.as_view(template_name='index.html')),
                url(r'^heatmap$',TemplateView.as_view(template_name='heatmap.html')),
                url(r'^heat_map_basic.js$',TemplateView.as_view(template_name='heat_map_basic.js')),
                url(r'^accidents$',TemplateView.as_view(template_name='data.html')),
                url(r'^delhidata$',TemplateView.as_view(template_name='data1.html')),
            )