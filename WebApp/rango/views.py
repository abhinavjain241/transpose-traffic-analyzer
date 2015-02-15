from django.shortcuts import render
from django.shortcuts import render_to_response

from django.template import RequestContext
from models import Category, Page
# Create your views here.

def renderTemplate(request,filename):
    context = RequestContext(request)
    #context_dict = {'boldmessage':"This is the bol meadd"}
    #category_list = Category.objects.order_by('-views')[:5]
    category_list = Category.objects.order_by('name')[:3]
    context_dict = {'categories': category_list}
    for category in category_list:
        category.url = category.name.replace(' ', '_')

    return render_to_response(filename, context_dict, context)



def file1(request):
    context = RequestContext(request)
    #context_dict = {'boldmessage':"This is the bol meadd"}
    #category_list = Category.objects.order_by('-views')[:5]
    category_list = Category.objects.order_by('name')[:3]
    context_dict = {'categories': category_list}
    for category in category_list:
        category.url = category.name.replace(' ', '_')

    return render_to_response('data.html', context_dict, context)




