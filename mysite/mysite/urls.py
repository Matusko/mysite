from django.conf.urls import patterns, include, url
from django.contrib import admin
import settings


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'famo.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^templates/uvod', 'main.views.uvod', name='uvod'),


    url(r'^admin/', include(admin.site.urls)),
)

if settings.DEBUG:
    # static files (images, css, javascript, etc.)
    urlpatterns += patterns(
        '',
        (
            r'^media/(?P<path>.*)$',
            'django.views.static.serve',
            {'document_root': settings.MEDIA_ROOT}
        )
    )

urlpatterns += patterns(
        '',
            url(r'^.*', 'main.views.main_view', name='home'),
    )
