import re

with open("pages/products/[category]/[slug].tsx", "r") as f:
    content = f.read()

# Find and replace the broken JSX
old_jsx = """{viewMode === '3d' ? (
                  <div className="viewer-container viewer-container-lg">
                    <Suspense fallback={<div className="viewer-canvas bg-industrial-deep rounded-card-xl flex items-center justify-center border border-electricBlue/15"><div className="flex flex-col items-center space-y-2"><div className="w-8 h-8 border-2 border-electricBlue border-t-transparent rounded-full animate-spin"></div><span className="text-caption font-mono uppercase tracking-wider text-metallicSilver/70">Loading 3D Studio...</span></div></div>}>
                      slug={product.slug}
                      category={product.category}
                      autoRotate={true}
                      className="viewer-canvas"
                    />
                  </div>
                )"""

new_jsx = """{viewMode === '3d' ? (
                  <div className="viewer-container viewer-container-lg">
                    <Suspense fallback={<div className="viewer-canvas bg-industrial-deep rounded-card-xl flex items-center justify-center border border-electricBlue/15"><div className="flex flex-col items-center space-y-2"><div className="w-8 h-8 border-2 border-electricBlue border-t-transparent rounded-full animate-spin"></div><span className="text-caption font-mono uppercase tracking-wider text-metallicSilver/70">Loading 3D Studio...</span></div></div>}>
                      <Product3DViewer
                        slug={product.slug}
                        category={product.category}
                        autoRotate={true}
                        className="viewer-canvas"
                      />
                    </Suspense>
                  </div>
                )"""

content = content.replace(old_jsx, new_jsx)

with open("pages/products/[category]/[slug].tsx", "w") as f:
    f.write(content)

print("Fixed!")
